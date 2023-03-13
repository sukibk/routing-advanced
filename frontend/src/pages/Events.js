import { useLoaderData, json } from 'react-router-dom';

import EventsList from '../components/EventsList';

export const EventsPage = () => {
    const data = useLoaderData();
    const events = data.events;

    // if(data.isError){
    //     return <p>{data.message}</p>
    // }

    return (
        <>
            <EventsList events={events} />
        </>
    );

}

export async function loader(){
    const response = await fetch('http://localhost:8080/events');
    if (!response.ok) {
        // return {isError: true, message: 'Could not fetch events.'}
        throw new json({message: 'Couldn\'t fetch events'}, {status: 500})
    } else {
        return response;
    }
}