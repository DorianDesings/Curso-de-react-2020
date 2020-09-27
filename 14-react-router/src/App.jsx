import React from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';

import Home from './components/Home';
import User from './components/User';
import UserWithId from './components/UserWithId';
import Contact from './components/Contact';
import Navigation from './components/Navigation';
import Users from './components/Users';

const GlobalStyle = createGlobalStyle`
    body{
        margin:0
    }
`;

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user/:userId" component={UserWithId} />
          <Route path="/user" component={User} />
          <Route path="/users/:id?" component={Users} />
          <Route path="/contact" component={Contact} />
          <Route path="/*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </Router>
    </>
  );
};

export default App;
