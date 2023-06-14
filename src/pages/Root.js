import React from 'react';
import { Outlet } from 'react-router-dom';

const RootPage = () => {
    return (
        <>
            <h1>root</h1>
            <main>
                <Outlet />
            </main>
        </>
    );
}

export default RootPage;
