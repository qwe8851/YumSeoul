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

const Card = (props) => {
    return (
        <>
            <StyledCard width={props.width}>
                {props.children}
            </StyledCard>
        </>
    );
}

export default Card;