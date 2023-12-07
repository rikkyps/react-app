import React, { useEffect } from "react";

const Identity = () => {
    let [menu, setMenu] = React.useState([])

    useEffect(() => {
        const fetchData = function() {
            return ['Bakso', 'Chicken', 'Nugget']
        }

        let data = fetchData()
        setMenu(data)
    }, [])

    return <div>
        {menu.map(makanan => <div key={makanan}>{makanan}</div>)}
    </div>
}

export default Identity