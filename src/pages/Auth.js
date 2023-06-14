import React from 'react';
import { Outlet } from 'react-router-dom';

import Styled from 'styled-components';

const AuthDiv = Styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-lightgray);
`;

const AuthPage = () => {
    return (
        <AuthDiv>
            <Outlet />
        </AuthDiv>
    );
}

export default AuthPage;