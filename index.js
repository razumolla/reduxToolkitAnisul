// defining constants
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const ADD_USER = "ADD_USER";

// state 
const initialCounter = {
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
