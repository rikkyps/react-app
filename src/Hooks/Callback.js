import React, { useCallback, useEffect } from "react";

const Callback = () => {
    let [menu, setMenu] = React.useState([])

    const fetchData = useCallback(() => {
        return ['Nasi Goreng', 'Mie', 'Bakso']
    }, [])

    useEffect(() => {
        let data = fetchData
        setMenu(data)
    }, [fetchData])

    return <div>
        {menu.map(item => <div key={item}>{item}</div>)}
    </div>
}

export default Callback