import React, { Component } from 'react'
import Button from './Button'

class App extends Component {

    state = { number: this.props.number }

    handleIncrement = () => {
        this.setState({
            number: this.state.number + 1
        })
    }

    handleDecrement = () => {
        this.setState({
            number: this.state.number - 1
        })
    }

    handleReset = () => {
        this.setState({
            number: 0
        })
    }

    render() {
        return (
            <>
                <h1>Number: {this.state.number}</h1>
                <Button text='lo que sea' onClick={this.handleIncrement}>Increment</Button>
                <button onClick={this.handleDecrement}>Decrement</button>
                <button onClick={this.handleReset}>Reset</button>
            </>
        );
    }
}

App.defaultProps = {
    number: 0
}


export default App;