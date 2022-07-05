import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';
import './Navbar.css';

const NavBar = () => {

  const loggedInUser = useSelector(state => state.session.user);

  return (
    <nav className='nav-buttons'>
          {loggedInUser && <NavLink to='/' exact={true} activeClassName='active'>
            Home
          </NavLink>}
          {!loggedInUser && <NavLink to='/login' exact={true} activeClassName='active'>
            Login
          </NavLink>}
          {!loggedInUser && <NavLink to='/sign-up' exact={true} activeClassName='active'>
            Sign Up
          </NavLink>}
          {loggedInUser && <div>Welcome, {loggedInUser.username}</div>}
          {loggedInUser && <NavLink to='/users' exact={true} activeClassName='active'>
            Users
          </NavLink>}
          {loggedInUser && <LogoutButton />}
    </nav>
  );
}

export default NavBar;
