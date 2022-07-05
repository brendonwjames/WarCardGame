import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './UsersList.css';

function UsersList() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch('/api/users/');
      const responseData = await response.json();
      setUsers(responseData.users);
    }
    fetchData();
  }, []);

  const userInfo = users.map((user) => {
    return (
      <div key={user.id} className='user-list'>
        <NavLink to={`/users/${user.id}`}>{user.username}</NavLink>
      </div>
    );
  });

  return (
    <div className='user-list-container'>
      <h1>All Players</h1>
      <div className='message'>Click on a player to see their stats</div>
      <div>{userInfo}</div>
    </div>
  );
};

export default UsersList;
