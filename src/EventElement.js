import React from "react";

const BlueButton = ({ action, title }) => {
    return <button style={{ border: '2px solid blue' }} onClick={action}>{title}</button>
}

export default BlueButton