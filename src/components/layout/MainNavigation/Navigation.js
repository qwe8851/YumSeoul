import { Link, NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { clearAuthToken } from '../../../store/authSlice';

import EventBar from './EventBar';

import classes from './Navigation.module.css';

const Navigation = () => {
    const dispatch = useDispatch();
    const token = useSelector(state => state.auth.token);

    const logoutHandler = () => {
        dispatch(clearAuthToken());
    };

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