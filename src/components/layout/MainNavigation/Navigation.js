import { Link, NavLink } from 'react-router-dom';

import EventBar from './EventBar';

import classes from './Navigation.module.css';

const Navigation = () => {
    return (
        <>
            <EventBar className={classes.eventBar} />
            <div className={classes.navigation}>
                <p><Link to='/'>LOGO</Link></p> {/*TODO: 로고이미지 변경*/}
                <div>
                    <NavLink
                        to='/auth/signin' className={({ isActive }) =>
                            isActive ? classes.action : undefined
                        }>
                        SingIn
                    </NavLink>
                    <NavLink
                        to='/auth/signup' className={({ isActive }) =>
                            isActive ? classes.action : undefined
                        }>SingUp</NavLink>
                </div>
            </div>
        </>
    );
}

export default Navigation;