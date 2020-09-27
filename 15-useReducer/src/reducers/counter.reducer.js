import { DECREMENT, INCREMENT } from '../actions/counter.actions'

const counterInicialState = {
  counter: 0
}

const counterReducer = (state = counterInicialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + action.payload }
    case DECREMENT:
      return { counter: state.counter - action.payload }
    default:
      return state
  }
}

export { counterInicialState, counterReducer }
