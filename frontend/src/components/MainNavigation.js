import classes from './MainNavigation.module.css';
import {NavLink} from "react-router-dom";
import {HomePage} from "../pages/Home";
import {EventsPage} from "../pages/Events";
import {EventDetailPage} from "../pages/EventDetail";
import {NewEventPage} from "../pages/NewEvent";

// {index: true, element: <HomePage />},
// {path: 'events', element: <EventsPage />},
// {path: 'events/:eventId', element:  <EventDetailPage />},
// {path: 'events/new', element: <NewEventPage />},
// {path: 'events/:eventId/edit'}

function MainNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <NavLink className={({isActive}) => isActive ? classes.active : undefined} to=''>Home</NavLink>
          </li>
          <li>
            <NavLink to='events' className={({isActive}) => isActive ? classes.active : undefined}>Events</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
