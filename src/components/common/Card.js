import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';

import styled from 'styled-components'

const StyledCard = styled.div`
    width: 20rem;
    height: 17rem;
    border: 1px solid #E0E3DA;
    border-radius: 1rem;
    overflow: hidden;
    box-shadow: 0 2px 6px #b3b5af;
    display: flex;
    flex-direction: column;

    ${props => props.width && `
        width: ${props.width};
        height: auto;
        padding: 1rem;
        background: white;
    `}
    
    & .card-image {
        background-image: url(${props => props.image || 'none'});
        background-size: 100%;
        background-position: center;
        width: 100%;
        height: 100%;
        flex: 2;
        transition: all 0.5s;
    }
    
    & .card-image:hover {
        background-size: 105%;
        transition: all 0.2s;
    }

    & .card-title {
        background-color: var(--color-beige);
        width: 100%;
        text-align: left;
        padding: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }
    
    & .card-title > h1 {
        font-family: 'hanna Pro';
        color: var(--color-blue-dark);
        margin: 0;
    }
    
    & .card-title > p {
        font-family: 'hanna Air', sans-serif;
        margin: 0;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;  /* 표시할 줄 수 */
        -webkit-box-orient: vertical;
    }
`;

const Card = (props) => {
    const navigate = useNavigate();

    const sendDetailPageHandler = useCallback(() => {
        navigate(`${props.id}`);
    }, [navigate, props.id]);

    return (
        <>
            <StyledCard width={props.width} image={props.image} onClick={sendDetailPageHandler}>
                {props.children
                    ? props.children
                    : <>
                        <div className='card-image'></div>
                        <div className='card-title'>
                            <h1>{props.store}</h1>
                            <p>{props.description}</p>
                        </div>
                    </>
                }
            </StyledCard>
        </>
    );
}

export default Card;