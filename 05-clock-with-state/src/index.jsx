import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Clock extends Component {
    constructor() {
        super()
        this.state = { date: new Date().toLocaleTimeString() }
    }

    componentDidMount() {
        setInterval(() => {
            this.tick()
        }, 1000)
        //NO HACER ESTO
        //this.state.date = new Date().toLocaleTimeString()
    }

    tick() {
        this.setState({ date: new Date().toLocaleTimeString() })
    }

    render() {
        return (
            <div>
                <h1>{this.state.date}</h1>
            </div>
        );
    }
}

ReactDOM.render(<Clock />, document.getElementById('root'))

export default Clock;