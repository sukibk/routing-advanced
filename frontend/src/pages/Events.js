import {Link} from "react-router-dom";

export const EventsPage = () => {
    const EVENTS = [
        {id: 'event-1', title: 'First Event'},
        {id: 'event-2', title: 'Second Event'},
        {id: 'event-3', title: 'Third Event'}
    ];
    return <>
    <h1>Events</h1>
    <ul>
    {EVENTS.map(event =>
                <li><Link key={event.id} to={event.id}>{event.title}</Link></li>
        )}
    </ul>
    </>
}