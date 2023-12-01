import React from "react";
import style from './Button.module.scss'

const Button = ({title}) => {
    return <button className={style.default}>{title}</button>
}

export default Button