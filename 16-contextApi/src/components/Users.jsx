import React, { useContext, useEffect, useState } from 'react';
import { LoginContext } from '../context/Login.context';

const Users = () => {
  const [login] = useContext(LoginContext);
  const [users, setUsers] = useState([]);
  const getUsers = () => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(users => setUsers(users));
  };
  useEffect(() => {
    if (users.length === 0) {
      getUsers();
    }
  }, [users]);

  return (
    <div>
      <h1>Users</h1>
      <div>
        {login ? (
          <ul>
            {users.map(user => (
              <li key={user.id}>{user.name}</li>
            ))}
          </ul>
        ) : (
          <p>Login to see all users</p>
        )}
      </div>
    </div>
  );
};

export default Users;
