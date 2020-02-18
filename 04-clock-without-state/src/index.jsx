import React from 'react';
import ReactDOM from 'react-dom';

const clock = () => {
    const element =
        <>
            <h1>Clock</h1>
            <h1>{new Date().toLocaleTimeString()}</h1>
        </>
    ReactDOM.render(element, document.getElementById('root'))
}

setInterval(clock, 1000)