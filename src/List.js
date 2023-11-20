import React from "react"
import User from './User'

const List = () => {
    const users = [
        { id: 1, name: 'Riky', gender: 'male' },
        { id: 2, name: 'Mita', gender: 'female' },
        { id: 3, name: 'Bilal', gender: 'male' },

    ]
    return <User users={users}/>
}

export default List