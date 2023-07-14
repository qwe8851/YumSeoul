import React from 'react';

import styled, { css } from 'styled-components';

const StyledButton = styled.button`
    width: ${props => props.width || '100%'};
    padding: 10px;
    border-radius: 5px;
    border: 1px solid var(--color-gray-500);
    background-color: transparent;
    color: black;
    font-weight: normal;

    ${props => props.$primary && css`
        border-color: var(--color-blue-500);
        background-color: var(--color-blue-700);
        color: white;
        font-weight: bold;
    `};

    &:hover,
    &:active {
        background-color: 
        ${props => props.$primary
            ? 'var(--color-blue-800)'
            : 'var(--color-gray-100)'
    };
    }
    
    &:disabled,
    &:disabled:hover,
    &:disabled:active {
    background-color: #ccc;
    color: var(--color-gray-900);
    border-color: #ccc;
    cursor: not-allowed;
}
`;

const Button = ({primary, ...props}) => {
    return (
        <StyledButton $primary={primary} {...props}>
            {props.children}
        </StyledButton>
    );
}

export default Button;