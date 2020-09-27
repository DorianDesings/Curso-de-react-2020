import React, { useReducer } from 'react'
import { DECREMENT, INCREMENT } from '../actions/counter.actions'
import {
  counterInicialState,
  counterReducer
} from '../reducers/counter.reducer'

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, counterInicialState)
  const incrementAction = {
    type: INCREMENT,
    payload: 1
  }
  const decrementAction = {
    type: DECREMENT,
    payload: 1
  }
  return (
    <>
      <h1>Counter: {state.counter}</h1>
      <button onClick={() => dispatch(incrementAction)}>+</button>
      <button onClick={() => dispatch(decrementAction)}>-</button>
    </>
  )
}

export default Counter
