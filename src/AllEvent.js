import React from "react";

const AllEvent = () => {
    return <table border={1}>
        <tbody>
            <tr>
                <th>Event</th>
                <th>Contoh</th>
                <th>Elemen HTML</th>
            </tr>
            <tr>
                <td>onClick</td>
                <td><button onClick={() => console.log('onClick')}>onClick</button></td>
                <td>semua</td>
            </tr>
            <tr>
                <td>onDoubleClick</td>
                <td><button onDoubleClick={() => console.log('onDoubleClick')}>onClick</button></td>
                <td>semua</td>
            </tr>
            <tr>
                <td>onDragStart</td>
                <td><input onDragStart={() => console.log('dragStart')} defaultValue='onDragStart' /></td>
                <td>semua</td>
            </tr>
            <tr>
                <td>onDrop</td>
                <td><input onDrop={() => console.log('drop')} defaultValue='onDrop' /></td>
                <td>semua</td>
            </tr>
            <tr>
                <td>onKey</td>
                <td><input
                    onKeyDown={() => console.log('onKeyDown')}
                    onKeyUp={() => console.log('onKeyUp')}
                    onKeyPress={() => console.log('onKeyPress')}
                    defaultValue='onKey'
                /></td>
                <td>semua</td>
            </tr>
            <tr>
                <td>onFocus, onBlue & onSelect</td>
                <td><input
                    onFocus={() => console.log('onFocus')}
                    onBlur={() => console.log('onBlur')}
                    onSelect={() => console.log('onSelect')}
                    defaultValue=''
                /></td>
                <td>input, textarea, select, button</td>
            </tr>
            <tr>
                <td>onChange</td>
                <td><input
                    onChange={() => console.log('onChange')}
                    defaultValue='onChange' />
                    <br />
                    <input type="radio" name="gender"
                        onChange={() => console.log('1')}
                        value='1' />Pria
                    <input type="radio" name="gender"
                        onChange={() => console.log('0')}
                        value='0' />Wanita
                    <br />
                    <select onChange={(event) => console.log('onChange')}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                    </select>
                </td>
                <td>input, textarea, select, button</td>
            </tr>
            <tr>
                <td>onCopy, onCut, onPaste</td>
                <td><input
                    onCopy={() => console.log('onCopy')}
                    onCut={() => console.log('onCut')}
                    onPaste={() => console.log('onPaste')}
                    defaultValue='clipboard' /></td>
                <td>semua</td>
            </tr>

        </tbody>
    </table>
}

export default AllEvent