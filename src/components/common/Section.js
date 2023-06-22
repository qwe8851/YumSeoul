import React from 'react';

import styled from 'styled-components';

const StyledSection = styled.section`
    margin-top: var(--height-header)
`;

const Section = (props) => {
    return (
        <StyledSection {...props}>
            {props.children}
        </StyledSection>
    );
}

export default Section;