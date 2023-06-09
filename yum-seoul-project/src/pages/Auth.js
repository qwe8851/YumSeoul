import React from 'react';
import { Outlet } from 'react-router-dom';

import Styled from 'styled-components';

const AuthDiv = Styled.div`
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: var(--color-light-gray);
`;

const isNotEmpty = (value) => value.trim() !== '';
const isEmail = (value) => {
    const emailRegEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isNotEmpty(value) && emailRegEx.test(value);
}
const isPassword = (value) => {
    return value.trim().length >= 8;
}

const AuthPage = () => {
    return (
        <AuthDiv>
            <Outlet />
        </AuthDiv>
    );
}

export default AuthPage;
export { isNotEmpty, isEmail, isPassword };