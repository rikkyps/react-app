import React from "react";

const InputText = ({label, value, customEvent}) => {

    return <label>
        {label} : <input type="text" value={value} onChange={customEvent}/>
    </label>
}

export default InputText