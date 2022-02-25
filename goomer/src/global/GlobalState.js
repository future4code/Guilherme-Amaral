import GlobalContext from '../global/GlobalContext'
import { useState } from 'react'

const GlobalState = (props) => {

    const [restaurants, setRestaurants] = useState([])

    const state = { restaurants, setRestaurants }

    return (
        <GlobalContext.Provider value={{state}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState