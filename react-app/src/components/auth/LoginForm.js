import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import { NavLink } from 'react-router-dom';
import './LoginForm.css';

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const demoUser = async (e) => {
    e.preventDefault();
    await dispatch(login('demo@demo.com', 'password'));
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <div className='login-page-container'>
      <div className='left-half'>
        <div>Login to your account to play!</div>
        <form onSubmit={onLogin}>
          <div>
            {errors.map((error, ind) => (
              <div key={ind}>{error}</div>
            ))}
          </div>
          <div className='input-info'>
            <label htmlFor='email'>Email</label>
            <input
              id='input'
              name='email'
              type='text'
              placeholder='Email'
              value={email}
              onChange={updateEmail}
            />
          </div>
          <div className='input-info'>
            <label htmlFor='password'>Password</label>
            <input
              id='input'
              name='password'
              type='password'
              placeholder='Password'
              value={password}
              onChange={updatePassword}
            />
          </div>
          <button type='submit'>Login</button>
        </form>
      </div>
      <h1>War! The Card Game</h1>
      <div className='right-half'>
        <NavLink to='/sign-up' exact={true} activeClassName='active' className='button'>
          Don't have an account? Sign up here!
        </NavLink>
        <div>
          <div className='message'>Or try with a Demo account.</div>
          <button onClick={demoUser} className='button'>Demo</button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
