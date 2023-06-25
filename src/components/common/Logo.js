import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const StyledLogo = styled.h1`
    position: absolute;
    top: 0;
    left: 0;
    margin: 0;
    padding: 40px;
    font-size: 75px;
    font-weight: 700;
    color: white;
    letter-spacing: -11px;
    text-decoration: none;
    cursor: pointer;
`;

const Logo = () => {
    return (
        <Link to='/'>
            <StyledLogo>YumSeoul</StyledLogo>
        </Link>
    );
}

export default Logo;