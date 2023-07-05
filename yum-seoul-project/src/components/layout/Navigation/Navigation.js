// TODO: 네비게이션 반응형으로 바꾸기 

import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthToken } from '../../../store/authSlice';

import EventBar from './EventBar';

import classes from './Navigation.module.css';
// import { useState } from 'react';
// import { useEffect } from 'react';

const Navigation = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    const logoutHandler = () => {
        dispatch(clearAuthToken());
    };

    // const [position, setPosition] = useState(0);
    // const changePosition = window.innerHeight
    // function onScroll() {
    //     console.log(window.scrollY);
    //     setPosition(window.scrollY);
    // }

    // useEffect(() => {
    //     window.addEventListener("scroll", onScroll);
    //     return () => {
    //         window.removeEventListener("scroll", onScroll);
    //     };
    // }, []);  

    const navigationUnit = (
        token ? <Link onClick={logoutHandler}>LogOut</Link>
            : <>
                <NavLink
                    to='/auth/signin'
                    className={({ isActive }) => (isActive ? classes.action : undefined)}
                >
                    SignIn
                </NavLink>
                <NavLink
                    to='/auth/signup'
                    className={({ isActive }) => (isActive ? classes.action : undefined)}
                >
                    SingUp
                </NavLink>
            </>
    );

    return (
        <>
            <EventBar className={classes.eventBar} />
            <div className={classes.navigation}>
                <div>
                    <Link to='/' className={classes.logo}>YumSeoul</Link>
                </div>
                <div className={classes.flexbox}>
                    {navigationUnit}
                </div>
            </div>
        </>
    );
}

export default Navigation;