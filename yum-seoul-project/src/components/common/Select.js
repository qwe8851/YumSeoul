import React from 'react';
import styled from 'styled-components';

const StyledSelect = styled.select`
    width: 100%;
    padding: 10px;
    box-sizing: border-box;
    border: 1px solid var(--color-gray-300);
    border-radius: 5px;
    background-color: transparent;
`;

const Select = (props) => {
    return (
        <StyledSelect {...props}>
            {props.children.map((child, index) => (
                <React.Fragment key={index}>{child}</React.Fragment>
            ))}
        </StyledSelect>
    );
}

export default Select;
