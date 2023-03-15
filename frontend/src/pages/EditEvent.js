import EventForm from "../components/EventForm";
import {Await, useRouteLoaderData} from "react-router-dom";
import {Suspense} from "react";

export const EditEventPage = () => {
    const {events, event} = useRouteLoaderData('event-detail');

    return <Suspense fallback={<p style={{textAlign: 'center'}}>Loading...</p>}>
    <Await resolve={event}>
        {eventData => <EventForm event={event} method='patch'/>}
    </Await></Suspense>
}