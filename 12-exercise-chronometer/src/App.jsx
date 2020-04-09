import React, { Component } from 'react'

import Chronometer from './components/ChronometerHook'

import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
    body{
        background-color:#222;
        color:#387EF5;
        text-align:center;
    }
`

class App extends Component {

    render() {
        return (
            <>
                <GlobalStyle />
                <h1>Chronometer</h1>
                <Chronometer />
            </>
        )
    }
}


export default App;