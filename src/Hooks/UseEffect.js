import React, { useEffect, useState } from "react";

// Pure function adalah sebuah fungsi yg nilainya tidak terpengaruh dengan deklarasi variable di luar fungsi tersebut
// Sedangkan effect adalah sebaliknya
// Contoh deklarasi pure component
const Editing = ({ value }) => {

    //Contoh dari deklarasi non pure function atau effect
    let number = 0
    function jumlah(tambah) {
        number = number + tambah
        return number
    }

    //Contoh deklarasi pure function
    function hitung(a, b) {
        return a + b
    }

    return <textarea value={value} />
}

const Editing2 = () => {
    let [text, setText] = React.useState('')

    useEffect(function () {
        if (text.length) localStorage.setItem('edit-text', text)
    })

    useEffect(function () {
        setText(localStorage.getItem("edit-text"))
    }, [])

    return <textarea type="text" value={text} onChange={(e) => setText(e.target.value)} />
}

export default Editing2