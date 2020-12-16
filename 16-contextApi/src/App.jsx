import React from 'react'

import { createGlobalStyle } from 'styled-components'

import { BrowserRouter, Route } from 'react-router-dom'
import Theme from './components/Theme'
import Login from './components/Login'
import Navigation from './components/Navigation'
import Users from './components/Users'
import { LoginProvider } from './context/Login.context'

const GlobalStyle = createGlobalStyle`
    body{
        font-family:'Lucida Sans',sans-serif;
        text-align: center;
        margin: 0;
    }
`

const App = () => {
  return (
    // HOC :-> High Order Component
    <LoginProvider>
      <BrowserRouter>
        <GlobalStyle />
        <Navigation />
        <Route exact path="/" component={Login} />
        <Route exact path="/users" component={Users} />
        <Route exact path="/theme" component={Theme} />
      </BrowserRouter>
    </LoginProvider>
  )
}

export default App
