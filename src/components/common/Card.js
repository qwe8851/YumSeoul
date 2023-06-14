import React from 'react';
import { Link } from 'react-router-dom';

import styled from 'styled-components'

const StyledCard = styled.div`
    // background-color: var(--color-beige);
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
    padding: 30px;
    font-size: 1.5rem;
    cursor: pointer;
    color: black;
`;

const Card = (props) => {
    return (
        <>
            <Link to='./'>
                <StyledLogo>YumSeoul</StyledLogo>
            </Link>
            <StyledCard>
                {props.children}
            </StyledCard>
        </>
    );
}

export default Card;