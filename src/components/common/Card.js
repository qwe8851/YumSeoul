import React from 'react';
import { Link } from 'react-router-dom';

import Styled from 'styled-components'

const CardDiv = Styled.div`
    color-scheme: dark;
    color: black;
    background-color: var(--color-beige);
    width: ${props => props.width || '30rem'};
    height: auto;
    padding: 30px;
    border-radius: 10px;
    border: 1px solid #E0E3DA;
    box-shadow: 0 2px 6px #b3b5af;
`;

const Logo = Styled.div`
    position: absolute;
    top: 0;
    left: 0;
    padding: 50px;
    font-size: 1.5rem;
    font-weight: 500;
    cursor: pointer;
    color: black;
`;

const Card = (props) => {
    return (
        <>
            <Link to='./'><Logo>LOGO</Logo></Link>
            <CardDiv>
                {props.children}
            </CardDiv>
        </>
    );
}

export default Card;