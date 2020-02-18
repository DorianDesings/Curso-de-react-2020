import React from 'react';
import './App.css';

//Components
import Header from './components/Header'
import Person from './components/Person'

function App() {
  return (
    <>
      <Header />
      <Person
        info={
          {
            age: 27,
            name: 'Pepe',
            birthday: new Date(1993, 11, 4)
          }
        }
        hobbies={['la musica', 'viajar', ' e ir al cine']}
        bio={<p>Lorem ipsum dolor...</p>}
      />
      <Person
        info={
          {
            age: 30,
            name: 'Carlos',
            birthday: new Date(1989, 11, 4)
          }
        }
        hobbies={['la musica', 'viajar', ' e ir al cine']}
        bio={<p>Lorem ipsum dolor...</p>}
        render={false}
      />
      <Person
        info={
          {
            age: 56,
            name: 'Marta',
            birthday: new Date(1964, 11, 4)
          }
        }
        hobbies={['la musica', 'viajar', ' e ir al cine']}
      />

      <Person>Esto son los children de Person</Person>
    </>
  )
}

export default App;