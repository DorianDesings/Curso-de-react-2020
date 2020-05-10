import React from "react";

import { createGlobalStyle } from "styled-components";

import { BrowserRouter, Route } from 'react-router-dom'
import Users from './components/Users';
import User from './components/User';

const GlobalStyle = createGlobalStyle`
    body{
        font-family:'Lucida Sans',sans-serif;
        text-align: center;
    }
`;

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <h1>Práctica Usuarios</h1>
      <Route exact path="/" component={Users} />
      <Route path="/user" component={User} />
    </BrowserRouter>
  );
};

export default App;
