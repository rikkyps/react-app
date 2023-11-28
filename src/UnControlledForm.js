import React from "react";

const UnControlledForm = () => {
    const inputName = React.useRef(null)
    const inputFile = React.useRef(null)
    const submit = event => {
        event.preventDefault()
        alert(inputName.current.value)
        alert(inputFile.current.files[0].name)
    }

    return <form onSubmit={submit}>
        <label>Name: 
            <input type="text" ref={inputName} defaultValue="riky"/>
        </label>
        <label>Photo: 
            <input type="file" ref={inputFile}/>
        </label>
        <button type="submit">Submit</button>
    </form>
}

export default UnControlledForm