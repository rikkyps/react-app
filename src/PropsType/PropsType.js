import React from "react";
import PropsTypes from 'prop-types'

function Button({ title, action }) {
    return <button onClick={action}>{title}</button>
}
Button.propTypes = {
    title: PropsTypes.string.isRequired,
    action: PropsTypes.func.isRequired
}
export default Button