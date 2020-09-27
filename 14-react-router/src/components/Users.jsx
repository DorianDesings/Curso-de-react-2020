import React from 'react';
import {
  useHistory,
  useLocation,
  useParams,
  useRouteMatch
} from 'react-router-dom';

const Users = ({ history, location, match }) => {
  // console.log('History', history);
  // console.log('Location', location);
  // console.log('Match', match);

  const historyHook = useHistory();
  const locationHook = useLocation();
  const paramsHook = useParams();
  const matchHook = useRouteMatch();

  console.log('History', historyHook);
  console.log('Location', locationHook);
  console.log('Params', paramsHook);
  console.log('Match', matchHook);

  return <h1> Users</h1>;
};

export default Users;
