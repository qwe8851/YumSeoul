// import { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";

const EventBar = (props) => {
    const event = <span>신규 회원에게 YumSeoul에서 <font color="#8eff45">20%</font>할인 쿠폰을 선물로 드려요! <font color="gray"> ~ 06.29</font> THURSDAY 🌞</span>
    // const [event, setEvent] = useState('');

    // useEffect(() => {
    //     fetchEvent();
    // }, []);

    // const fetchEvent = async () => {
    //     const fetchResult = await fetch('https://yum-seoul-default-rtdb.firebaseio.com/event.json');
    //     const result = await fetchResult.json();

    //     setEvent(result.event);
    // }

    return (
        <Marquee className={props.className} autoFill={true}>
            {event}
        </Marquee>
    );
}

export default EventBar;