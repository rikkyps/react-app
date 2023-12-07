import React from "react";

let reducer = function (todos, action) {
    switch (action.type) {
        case 'ADD_TODO':
            let id = todos.length ? todos[todos.length - 1].id + 1 : 1
            let newval = [...todos, { id: id, complete: false, ...action.todo }]
            return newval

        case 'REMOVE_TODO':
            return todos.filter(todo => todo.id !== action.id)

        case 'UPDATE_TODO':
            return todos.map(todo => todo.id === action.todo.id ? action.todo : todo)

        case 'TOGGLE_COMPLETED':
            return todos.map(todo => todo.id === action.id ? { ...todo, complete: !todo.complete } : todo)
        default:
            return todos
    }
}

const TodoList = () => {
    let [todos, dispatch] = React.useReducer(reducer, [])
    let [value, setValue] = React.useState('')

    return <div>
        <input type="text" value={value} onChange={(e) => setValue(e.target.value)} />
        <button onClick={() => dispatch({
            type: 'ADD_TODO', todo: {
                title: value
            }
        })}>ADD TODO</button>
        <ul>
            {todos.map(todo => <li key={todo.id}>{todo.title} | <button onClick={() => dispatch({
                type: 'REMOVE_TODO', id: todo.id
            })}>REMOVE TODO</button></li>)}
        </ul>
    </div>
}

export default TodoList




