import { createStore } from "redux";

const counterReducer = (state = { counter: 0, isShown: false}, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      isShown: state.isShown
    };
  }

  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      isShown: state.isShown
    };
  }

  if (action.type === "ADD") {
    return {
      counter: state.counter + action.value,
      isShown: state.isShown
    };
  }

  if(action.type === 'toggle') {

    return {
        counter: state.counter,
        isShown: !state.isShown
    }

  }

  return state;
};



const store = createStore(counterReducer);

export default store;
