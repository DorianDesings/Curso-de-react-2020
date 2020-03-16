import React, { Component } from 'react'
import Title from './components/Title';
import Button from './components/Button';
import Responsive from './components/Responsive'



import styled, { ThemeProvider } from 'styled-components'
import colors from './theming/colors'

const ButtonRounded = styled(Button)`
    border-radius:15px;
`
class App extends Component {

    render() {
        return (
            <>
                <Title />
                <ThemeProvider theme={colors}>
                    <Responsive>
                        <Button>Click Me!</Button>
                        <Button danger>Click Me!</Button>
                        <Button ghost>Ghost Me!</Button>
                        <Button danger ghost>Ghost Me!</Button>
                        <ButtonRounded danger ghost>Rounded</ButtonRounded>
                        <Button>Click Me!</Button>
                    </Responsive>
                </ThemeProvider>
            </>
        )
    }
}

export default App;