import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

function User() {
  const [user, setUser] = useState({});
  const { userId }  = useParams();

  useEffect(() => {
    if (!userId) {
      return;
    }
    (async () => {
      const response = await fetch(`/api/users/${userId}`);
      const user = await response.json();
      setUser(user);
    })();
  }, [userId]);

  if (!user) {
    return null;
  }

  return (
    <div className='user-list-page-container'>
      <div className='user-info'>
        <div>{user.username}</div>
        <div>{user.email}</div>
        <div>Career Wins - {user.wins}</div>
      </div>


    </div>
  );
}
export default User;
