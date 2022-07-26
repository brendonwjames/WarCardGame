import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from './auth/LogoutButton';
import { useSelector } from 'react-redux';
import './Navbar.css';

const NavBar = () => {

  const loggedInUser = useSelector(state => state.session.user);

  return (
    <div className='nav-bar-container'>
      <nav className='nav-buttons'>
        {loggedInUser && <div className='nav-button'>Welcome, {loggedInUser.username}</div>}
        {loggedInUser && <NavLink className='nav-button' to='/' exact={true} activeClassName='active'>
          Home
        </NavLink>}
        {!loggedInUser && <NavLink className='nav-button' to='/login' exact={true} activeClassName='active'>
          Login
        </NavLink>}
        {!loggedInUser && <NavLink className='nav-button' to='/sign-up' exact={true} activeClassName='active'>
          Sign Up
        </NavLink>}
        {loggedInUser && <NavLink className='nav-button' to='/users' exact={true} activeClassName='active'>
          Users
        </NavLink>}
        {loggedInUser && <LogoutButton className='nav-button'/>}
      </nav>
    </div>
  );
}

export default NavBar;
