import EventForm from "../components/EventForm";
import {json, redirect} from 'react-router-dom'

export const NewEventPage = () => {
    return <EventForm />
}

export async function action({request, params}) {
    const data = await request.formData();

    const eventData = {
        title: data.get('title'),
        image: data.get('image'),
        date: data.get('date'),
        description: data.get('description')
    }

    const response = await fetch ('http://localhost:8080/events',
        {
            method: 'POST',
            body: JSON.stringify(eventData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

    if(response.status === 422) //response code set in backend in case of validation error
    {
        return response;
    }

    if(!response.ok) {
        throw json ({message: 'Couldn\'t save the event'}, {status: 500})
    }

    return redirect('/events')
}