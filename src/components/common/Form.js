import React from 'react';

import styled from 'styled-components';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const Form = (props) => {
    return (
        <StyledForm onSubmit={props.onSubmit}>
            {props.children}
        </StyledForm>
    );
}

export default Form;