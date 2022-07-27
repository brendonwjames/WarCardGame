import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../auth/LogoutButton';
import { useSelector } from 'react-redux';
import NavButton from '../NavButton';
import './Navbar.css';

const NavBar = () => {

  const loggedInUser = useSelector(state => state.session.user);

  return (
    <div className='nav-bar-container'>
      <div className='nav-buttons-container'>
        {loggedInUser && <div className='welcome-message'>{loggedInUser.username}</div>}
        {loggedInUser && <NavButton className='nav-bar-button' buttonName='Home' path='/' />}
        {!loggedInUser && <NavButton className='nav-bar-button' buttonName='Login' path='/login'/>}
        {!loggedInUser && <NavButton className='nav-bar-button' buttonName='Sign Up' path='/sign-up'/>}
        {loggedInUser && <NavButton className='nav-bar-button' buttonName='Users' path='/users'/>}
        {loggedInUser && <LogoutButton className='nav-bar-button' />}
      </div>
    </div>
  );
}

export default NavBar;
