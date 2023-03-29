import { createSlice, configureStore } from "@reduxjs/toolkit";




const counterSlice = createSlice({
    name: 'counter',
    initialState: {counter: 0, isShown: true},
    reducers: {
        increment(state) {
            state.counter ++
        },
        decrement(state) {
            state.counter --
        },
        increase(state, action) {
            state.counter = state.counter + action.payload
        },
        toggleCounter(state) {
            state.isShown = !state.isShown
        }
    }
})




const store = configureStore({
    reducer: counterSlice.reducer
});


export const counterActions = counterSlice.actions


export default store;
