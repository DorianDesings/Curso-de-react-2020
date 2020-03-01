import React, { Component } from 'react'
import Button from './components/Button'

class App extends Component {

    handleClick = (e) => {
        console.log(e.target)
    }

    render() {
        return (
            <>
                <h1>Events</h1>
                {/* <button onClick={this.handleClick}>Click me!</button> */}
                <Button text="Click me!" />
            </>
        )
    }
}


export default App;