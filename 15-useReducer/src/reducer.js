const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  if (action) {
    switch (action.type) {
      case 'increment':
        return { counter: state.counter + action.payload };

      default:
        return state;
    }
  }

  return state;
};

let currentCounter = reducer();

console.log(currentCounter);

const incrementAction = {
  type: 'increment',
  payload: 5
};

currentCounter = reducer(initialState, incrementAction);

console.log(currentCounter);
