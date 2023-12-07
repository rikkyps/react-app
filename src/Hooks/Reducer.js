import React from "react";

let reducer = function (state, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

const ReducerComponent = () => {
    let [counter, dispatch] = React.useReducer(reducer, 0)
    return <div>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
        {counter}
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
    </div>
}

export default ReducerComponent


