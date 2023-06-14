import React from 'react';

import styled from 'styled-components'

const StyledButton = styled.button`
    width: ${props => props.width || '100%'};
    padding: 10px;
    border-radius: 5px;
    border: 1px solid ${props => props.isSubmit ? 'var(--color-blue-500)' : 'var(--color-gray-500)'};
    background-color: ${props => props.isSubmit ? 'var(--color-blue-600);' : 'transparent'};
    color: ${props => props.isSubmit ? 'white' : 'black'};
    font-weight : ${props => props.isSubmit ? 'bold' : 'normal'};

    &:hover {
        background-color:  ${props => props.isSubmit ? 'var(--color-blue-700)' : 'var(--color-gray-100)'};
    }
`;

const Button = (props) => {

    return (
        <StyledButton isSubmit={props.isSubmit}>
            {props.children}
        </StyledButton>
    );
}

export default Button;