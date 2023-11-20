import React from "react";

const ubah = (obj) => {
    const btn = obj.target
    btn.innerText = 'Di Klik'
}

const Event = () => {
    return <button onClick={ubah}>INFO</button>
}

export default Event