import { Outlet } from "react-router-dom";

import Navigation from '../components/layout/MainNavigation/Navigation';

function RootPage() {
    return (
        <>
            <Navigation />
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootPage;