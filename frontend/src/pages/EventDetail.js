import {useParams} from "react-router-dom";

export const EventDetailPage = () => {
    const parm = useParams();
    return <>
        <h1>Event Detail</h1>
        <p>{parm.eventId}</p>
    </>
}