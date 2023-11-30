import React from "react";
import InputText from "./InputText";

const FormInput = () => {
    const [value, setValue] = React.useState('')
    const onSubmit = event => {
        event.preventDefault()
        alert(value)
    }
    return <form onSubmit={onSubmit}>
        <InputText label='Name' value={value} customEvent={(e) => setValue(e.target.value)}/>
        <br/>
        <button type="submit">Submit</button>
    </form>
}

export default FormInput