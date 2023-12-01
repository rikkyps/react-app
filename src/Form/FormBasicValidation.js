import React from "react";
import InputText from "../InputText"

const FormBasicValidation = () => {
    const [form, setForm] = React.useState({
        name: '',
        phone: '',
        email: '',
    })
    const [error, setError] = React.useState({
        name: 'name minimal 3 karakter',
        phone: 'phone minimal 3 karakter',
        email: 'email minimal 3 karakter',
    })

    const onSubmit = event => {
        event.preventDefault()
        if (error['name'].length > 0) {
            alert(error['name'])
        } else if (error['phone'].length > 0) {
            alert(error['phone'])
        } else if (error['email'].length > 0) {
            alert(error['email'])
        } else {
            alert(`${JSON.stringify(form)} validasi berhasil`)
        }
    }

    const onChange = (field, e) => {
        const value = e.target.value
        if (value.length < 3) {
            setError({ ...error, [field]: `${field} minimal 3 karakter` })
        } else {
            setError({ ...error, [field]: '' })
        }

        setForm({ ...form, [field]: value })
    }

    return <form onSubmit={onSubmit}>
        <InputText label='Name' value={form.name} customEvent={(e) => onChange('name', e)} />
        <br />
        <InputText label='Phone' value={form.phone} customEvent={(e) => onChange('phone', e)} />
        <br />
        <InputText label='Email' value={form.email} customEvent={(e) => onChange('email', e)} />
        <br />
        <button type="submit">Submit</button>
    </form>
}

export default FormBasicValidation
