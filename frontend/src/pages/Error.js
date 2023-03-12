import MainNavigation from "../components/MainNavigation";
import PageContent from "../components/PageContent";
import {useRouteError} from 'react-router-dom';


export const ErrorPage = () => {
    const error = useRouteError();
    // If I threw an object than I have error.status adn if not then I don't have it
    let title = 'An error occurred';
    let message = 'Something went wrong';

    if(error.status === 500){
        message = JSON.parse(error.data).message;
    }

    if(error.status === 404){
        title = 'Not Found!'
        message = 'Could not find resource'
    }

    return <>
        <MainNavigation />
        <PageContent title={title}>
        <p>
            {message}
        </p>
    </PageContent></>
}