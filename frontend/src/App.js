import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import {RootPage} from "./pages/Root";
import {HomePage} from "./pages/Home";
import {EventsPage} from "./pages/Events";
import {EventDetailPage} from "./pages/EventDetail";
import {NewEventPage} from "./pages/NewEvent";
import {EditEventPage} from "./pages/EditEvent";
import {EventNavigationRootPage} from "./pages/EventNavigationRoot";
import {loader as eventsLoader} from '../src/pages/Events'
import {loader as eventDetailLoader,
        action as deleteAction} from '../src/pages/EventDetail'
import {ErrorPage} from "./pages/Error";
import {action as newEventAction} from './pages/NewEvent'

const router = createBrowserRouter([
  {
    path: '',
    element: <RootPage/>,
    errorElement: <ErrorPage />,
    children: [
      {index: true, element: <HomePage />},
      {path: 'events',
      element: <EventNavigationRootPage />,
      children: [
        {index: true, element: <EventsPage />, loader: eventsLoader},
        {path: ':eventId',
          loader: eventDetailLoader,
          id: 'event-detail',
        children: [
          {index: true,
           element:  <EventDetailPage />,
           action: deleteAction
          },
          {path: 'edit', element: <EditEventPage />}
        ]},
        ,
        {path: 'new', element: <NewEventPage />, action: newEventAction}
      ]}
    ]
  }
])

function App() {
  return <RouterProvider router={router} />;
}

export default App;
