import React, { useContext } from "react";
import TemaSitus from './UseContext'

const Child = () => {
    let tema = useContext(TemaSitus)

    return <div>
        Tema situ sekarang adalah {tema}
    </div>
}

export default Child