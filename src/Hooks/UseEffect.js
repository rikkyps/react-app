import React, { useEffect } from "react";

const UseEffect = () => {

    //Deklarasi hooks state
    let [value, setValue] = React.useState(""),
        [seconds, setSeconds] = React.useState(0)

    //effect 1
    useEffect(function () {
        if (value.length) localStorage.setItem('edit-text', value)
    }, [value])

    //effect 2
    useEffect(function () {
        setValue(localStorage.getItem('edit-text'))
        let intervalId = setInterval(() => {
            setSeconds(second => second +1)
        }, 1000)
        

        //Untuk fungsi yang dijalankan continue baiknya selalu menggunakan clean up function
        return function() {
            clearInterval(intervalId)
        }
    }, [])

    return (
        <>
            Waktu: {Math.floor(seconds / 60)} menit {seconds % 60} detik
            <br />
            <textarea value={value} onChange={(e) => setValue(e.target.value)} />
        </>
    )
}

export default UseEffect