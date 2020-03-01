import React, { Component } from 'react'

class App extends Component {

    handleClick(e) {
        console.log(e)
        console.log(e.nativeEvent)
    }

    render() {
        return (
            <>
                <h1>Events</h1>
                <button onClick={this.handleClick}>Click me!</button>
            </>
        )
    }
}


export default App;