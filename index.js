// ====================== class-5 =====================
// State -count:0
// action - increment, decrement, reset
// reducer for logic handle 
// store

const { createStore } = require("redux");

// Constant
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const RESET = "RESET";

// State -count:0
const initialState = {
    count: 0
}

// action - increment, decrement, reset
const incrementCounterAction = () => {
    return {
        type: INCREMENT,
    }
}
const decrementCounterAction = () => {
    return {
        type: DECREMENT,
    }
}
const resetCounterAction = () => {
    return {
        type: RESET,
    }
}

// Creating reducer 
const counterReducer = (state = initialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1,
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1,
            }
        case RESET:
            return {
                ...state,
                count: 0,
            }

        default:
            state;
    }
}

// Store
const store = createStore(counterReducer)

store.subscribe(() => {
    console.log(store.getState());
})

store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(incrementCounterAction())
store.dispatch(decrementCounterAction())
store.dispatch(resetCounterAction())

store.dispatch(incrementCounterAction())