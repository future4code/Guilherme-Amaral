import GlobalContext from "./GlobalContext"
import { useState } from "react"

export const GlobalState = (props) => {

    const [inputName, setInputName] = useState('')
    const [inputMonthy, setInputMonthy] = useState('')
    const [inputTime, setinputTime] = useState('')
    const [result, setResult] = useState('')

    const data = {
        name: inputName,
        monthy: inputMonthy,
        time: inputTime,
        result: result
    }

    const state = {
        
        data, 
        inputName, 
        setInputName, 
        inputMonthy, 
        setInputMonthy, 
        inputTime, 
        setinputTime, 
        result, 
        setResult
    }

    return (
        <GlobalContext.Provider value={{ state }}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalContext