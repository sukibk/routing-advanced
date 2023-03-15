import {defer, json, redirect, useRouteLoaderData, Await} from "react-router-dom";
import EventItem from "../components/EventItem";
import EventsList from "../components/EventsList";
import {Suspense} from "react";

export const EventDetailPage = () => {
    const {event, events} = useRouteLoaderData('event-detail');
    return <>
        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading event...</p>}>
            <Await resolve={event}>
            {loadedEvent => <EventItem event={loadedEvent}/>}
        </Await>
        </Suspense>

        <Suspense fallback={<p style={{textAlign: 'center'}}>Loading events...</p>}>
            <Await resolve={events}>
                {loadedEvents => <EventsList events={loadedEvents}/>}
            </Await>
        </Suspense>

    </>
}

export async function loader({request, params}) {
    const id = params.eventId;

    return defer({
        event: await loadEvent(id),
        events: loadEvents()
    })
}

async function loadEvent(id){
    const response = await fetch('http://localhost:8080/events/' + id)

    if(!response.ok){
        throw json({message: 'Could not fetch details for selected event.'},
            {status: 500})
    }

    else{
        const resData = await response.json();
        return resData.event;
    }
}

async function loadEvents(){
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // return {isError: true, message: 'Could not fetch events.'}
        throw json({message: 'Couldn\'t fetch events'}, {status: 500})
    } else {
        // return response;
        const resData = await response.json();
        return resData.events;
    }
}

export async function action({params, request}) {
    const eventId = params.eventId;
    const response = await fetch('http://localhost:8080/events/' + eventId,
        {
            method: request.method /*'delete'*/,
        });

    if(!response.ok){
        throw json({message: 'Could not delete an event.'},
            {status: 500})
    }

    return redirect('/events');
}