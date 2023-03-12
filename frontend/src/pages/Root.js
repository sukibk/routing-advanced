import {Outlet} from 'react-router-dom';
import MainNavigation from "../components/MainNavigation";

export const RootPage = () => {
    return <>
        <MainNavigation />
        <Outlet />
    </>
}