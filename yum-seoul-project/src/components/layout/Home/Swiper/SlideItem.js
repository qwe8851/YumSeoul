import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
        ${props => `url(${props.$imageurl})` || 'none'};
    background-size: cover;
    background-position: center;
    width: 100vw;
    height: 100%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: white;
    text-align: center;

    & h1 {
        width: 100%;
        font-family: 'hanna Pro';
        font-size: 3.125rem;
        line-height: 50px;
        margin: 0;
    }

    & p {
        width: 100%;
        font-family: 'hanna Air';
        font-size: 1.25rem;
    }
`;

const SlideItem = ({ imageurl, title, description }) => {
    return (
        <StyledDiv $imageurl={imageurl} >
            <h1>{title}</h1>
            <p>{description}</p>
        </StyledDiv>
    );
};

export default SlideItem;
