import React from "react";
import InputText from "./InputText";

const MultiForm = () => {
    const [value, setValue] = React.useState({
        name: '',
        phone: '',
        email: '',
    })
    const onSubmit = event => {
        event.preventDefault()
        alert(JSON.stringify(value))
    }

    return <form onSubmit={onSubmit}>
        <InputText label='Nama' value={value.name} customEvent={(e) => setValue({ ...value, name: e.target.value })} />
        <InputText label='Phone' value={value.phone} customEvent={(e) => setValue({ ...value, phone: e.target.value })} />
        <InputText label='Email' value={value.email} customEvent={(e) => setValue({ ...value, email: e.target.value })} />
        <br/>
        <button type="submit">Submit</button>
    </form>

}

export default MultiForm