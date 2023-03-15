import classes from './EventItem.module.css';
import {Link, useSubmit} from "react-router-dom";

function EventItem({ event }) {
    const submit = useSubmit();

  function startDeleteHandler() {
    const proceed = window.confirm('Are you sure?');

    if(proceed){
        submit(null/*here goes data but in this case it is null*/,
            {method: 'delete'/*, action: '/a-different-path'*/})
    }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to={`/events/${event.id}/edit`}>Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

export default EventItem;
