import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    background-image: linear-gradient(rgba(0, 0, 0, 0.3), 
        rgba(0, 0, 0, 0.3)), 
        url(${({ imageUrl }) => imageUrl || 'none'});
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
        font-family: hanna Pro;
        font-size: 50px;
        line-height: 50px;
        margin: 0;
    } 
    
    & p {
        width: 100%;
        font-family: hanna Air;
        font-size: 20px;
    }
}`;

const SlideItem = ({ imageUrl, title, description }) => {

    return (
        <StyledDiv imageUrl={imageUrl}>
            <h1>{title}</h1>
            <p>{description}</p>
        </StyledDiv>
    );
};

export default SlideItem;