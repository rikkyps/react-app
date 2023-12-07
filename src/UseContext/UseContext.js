import React from "react";
import Child from "./Child";

let TemaSitus = React.createContext('light')
const Context = () => {
    return <div>
        <TemaSitus.Provider value={'light'}>
            <Child/>
        </TemaSitus.Provider>
    </div>

}

export default Context