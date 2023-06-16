import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const StyledCard = styled.div`
    background-color: white;
    width: ${props => props.width || '30rem'};
    height: auto;
    padding: 30px;
    border-radius: 12px;
    border: 1px solid #E0E3DA;
    box-shadow: 0 2px 6px #b3b5af;
`;

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

const Card = (props) => {
    return (
        <>
            <Link to='/'>
                <StyledLogo>YumSeoul</StyledLogo>
            </Link>
            <StyledCard width={props.width}>
                {props.children}
            </StyledCard>
        </>
    );
}

export default Card;