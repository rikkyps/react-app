import React, { useEffect } from "react";

const ClenUp = () => {
    let [friend, setFriend] = React.useState(null)

    useEffect(() => {
        if (!friend) return;
        console.log(`EFFECT: chat ini dari ${friend}`)

        return () => {
            console.log(`CLEANUP: awdawdawd ${friend}`)
        }
    }, [friend])

    friend && console.log(`RENDER: friend ${friend}`)

    return (
        <button onClick={(e) => setFriend}></button>
    )
}

export default ClenUp