import React from "react";

const ControlledForm = () => {
    const [name, setName] = React.useState('')
    const submit = event => {
        event.preventDefault()
        alert(name)
    }

    return <form onSubmit={submit}>
        <label>
            Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <button type="submit">Submit</button>
    </form>
}

const ControlledCheckBoxRadio = () => {
    const [name, setName] = React.useState('')
    const [isMember, setIsMember] = React.useState(false)
    const [gender, setGender] = React.useState(0)
    const [comment, setComment] = React.useState('')
    const [category, setCategory] = React.useState('')

    const submit = event => {
        event.preventDefault()
        const formData = {name, isMember, gender, comment, category}
        console.log(formData)
    }

    return <form onSubmit={submit}>
        <label>
            Name: <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
        </label>
        <br/>
        <label>
            Member: <input type="checkbox" checked={isMember} onChange={(e) => setIsMember(e.target.checked)}/>
        </label>
        <br/>
        <label>
            Gender: <input type="radio" checked={gender===1} onChange={(e) => setGender(1)}/>Male
           <input type="radio" checked={gender===0} onChange={(e) => setGender(0)}/>Female
        </label>
        <br/>
        <label>
            Comment: <input type="textarea" value={comment} onChange={(e) => setComment(e.target.value)}/>
        </label>
        <br/>
        <label>
            Category: <select value={category} onChange={(e) => setCategory(e.target.value)}>
                <option value="food">Food</option>
                <option value="drink">Drink</option>
            </select>
        </label>
        <br/>
        <button type="submit">Submit</button>
    </form>
}


export default ControlledCheckBoxRadio