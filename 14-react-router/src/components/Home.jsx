import React from 'react';
import { useHistory } from 'react-router-dom';

const Home = () => {
  const history = useHistory();
  const getUsers = async () => {
    try {
      const res = await fetch('https://jsonplaceholder.typicode.com/users');
      if (res.status === 200) {
        const users = await res.json();
        history.push('/users', users);
      } else if (res.status === 401) {
        history.push('/unauthorized');
      }
    } catch (err) {
      console.error(err);
    }
  };

  //   const getUsers2 = () => {
  //     fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(res => res.json())
  //       .then(users => {
  //         console.log(users);
  //       });
  //   };
  return (
    <>
      <h1>Home</h1>
      <button onClick={getUsers}>Get Users</button>
      {/* <button onClick={getUsers2}>Get Users 2</button> */}
    </>
  );
};

export default Home;
