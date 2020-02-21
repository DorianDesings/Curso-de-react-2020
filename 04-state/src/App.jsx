import React, { Component } from 'react'

class App extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { otherNumber: 5 };
    // }

    // state = { number: 5 }
    render() {
        const { number, name } = this.props
        return (
            <h1>{name} {number}</h1>
        );
    }
}

export default App;