import React from "react";
import styled from "styled-components";
import Marquee from "react-fast-marquee";

const StyledEventBar = styled.div`
    width: 100%;
    height: var(--height-header-event);
    background-color: var(--color-gray-900);
    color: white;
    overflow: hidden;

    span {
        margin: 0 5rem;
    }
`;

const event = (
    <span>
        신규 회원에게 YumSeoul에서 <font color="#8eff45">20%</font>할인 쿠폰을 선물로 드려요!{" "}
        <font color="gray"> ~ 06.29</font> THURSDAY 🌞
    </span>
);

const EventBar = () => {
    return <StyledEventBar>
        <Marquee autoFill={true}>
            {event}
        </Marquee>
    </StyledEventBar>;
};

export default EventBar;