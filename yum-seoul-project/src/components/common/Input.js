import React from 'react';

import styled from 'styled-components';

const StyledInput = styled.input`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid var(--color-gray-300);
    border-radius: 5px;
    background-color: transparent;

    &:hover, &:active{
        border: 1px solid var(--color-gray-300);
    }
`;

const Input = (props) => {
    return (
        <StyledInput {...props} />
    );
}

export default Input;