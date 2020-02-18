import React from 'react';
import './App.css';

import { generate as id } from 'shortid'

function App() {
  const numbers = [1, 2, 3, 4, 5]
  const names = ['Dorian', 'Laura', 'Alex']

  return (
    <ul>
      {
        names.map(name => {
          return <li key={id()}>{name} {id()}</li>
        })

      }
    </ul>
  )
}

export default App;