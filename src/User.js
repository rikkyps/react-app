import React from "react";

const Users = ({ users }) => {
    return <table border="1">
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Gender</th>
            </tr>
        </thead>
        <tbody>
            {users.length > 0 && users.map((user) => {
                const {id, name, gender} = user
                return <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{gender}</td>
                </tr>
            })}
        </tbody>
    </table>
}

export default Users