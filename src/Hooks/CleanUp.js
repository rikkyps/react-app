import React, { useEffect } from "react";

const ClenUp = () => {
    let [friend, setFriend] = React.useState(null)

    useEffect(() => {
        if (!friend) return;
        console.log(`EFFECT: subscribe chat ini dari ${friend}`)

        return () => {
            console.log(`CLEANUP: subscribe chat message dari ${friend}`)
        }
    }, [friend])

    friend && console.log(`RENDER: friend ${friend}`)

    return (
        <div>
            <button onClick={() => setFriend("Riky")}>Riky</button>
            <button onClick={() => setFriend("Bilal")}>Bilal</button>
            <br />
            {friend ? `friend ${friend}` : 'no opened friend'}
        </div>
    )
}

const SetInterval = () => {
    let [seconds, setSeconds] = React.useState(5)

    useEffect(() => {
        let intervalId = setInterval(() => {
            setSeconds(increment => increment + 1)
        })

        return () => clearInterval(intervalId)
    }, [])

    return <div>{seconds} detik</div>
}

export default SetInterval