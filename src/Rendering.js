import React from "react";

const Rendering = ({a}) => {
    const b = null
    const c = false
    const d = ' '
    const e = 0
    return <div>
        <div>a - undefined: {a}</div>
        <div>b - null: {b}</div>
        <div>c - false: {c}</div>
        <div>d - string kosong: {d}</div>
        <div>e - 0: {e}</div>
    </div>
}

export default Rendering