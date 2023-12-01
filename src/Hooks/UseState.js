import React from "react";

const Button = () => {
    const [counter, setCounter] = React.useState(0)

    const onAdd = () => {
        setCounter(counter => counter+1)
    }

    return  <button onClick={onAdd}>{counter}</button>
}

export default Button