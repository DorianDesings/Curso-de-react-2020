import React, { Component, createRef } from 'react';

class Refs extends Component {

    inputText = createRef()

    componentDidMount() {
        this.handleFocus()
    }

    handleFocus = () => {
        console.log(this.inputText)
        this.inputText.current.focus()
    }
    render() {
        return (
            <>
                <input type="text" ref={this.inputText} />
            </>
        );
    }
}

export default Refs;