// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state 
const initialCounterState = {
    count: 0,
}

const initialUsersStates = {
    users: [
        { name: "Razu Molla" }
    ]
}

// action - Object [2 important things(type , payload)]
// Increment Counter & Decrement Counter

const incrementCounter = () => {
    return {
        type: INCREMENT,
    }
}

const decrementCounter = () => {
    return {
        type: DECREMENT,
    }
}

const addUser = () => {
    return {
        type: ADD_USER, // dispace korbo , data dite hobe , payload er maddome
        payload: { name: "Rakib" }, // passing data to reducer
    }
}

// 1. state
// 2. dispatch action
// 3. reducer (work based on type) increment / decrement
// 4. store update
// --------------- 3-----------

// create reducer for Counter
// reducer is pure function .. which work by action type er upor base kore

const counterReducer = (state = initialCounterState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: state.count + 1
            }
        case DECREMENT:
            return {
                ...state,
                count: state.count - 1
            }
        default:
            state;
    }
}





