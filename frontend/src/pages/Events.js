import { useLoaderData, json, defer, Await } from 'react-router-dom';
import { Suspense } from 'react';

import EventsList from '../components/EventsList';

export const EventsPage = () => {
    const {events} = useLoaderData();

    return (
    <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
    <Await resolve={events}>
        {(loadedEvents) => <EventsList events={loadedEvents} />}
    </Await>
    </Suspense>)

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

export function loader(){
    return defer({
        events: loadEvents()
    })
}