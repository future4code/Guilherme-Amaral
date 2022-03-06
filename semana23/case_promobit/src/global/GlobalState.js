import React from "react";
import GlobalContext from "./GlobalContext";

const GlobalState = (props) => {

    const state = {}
    const setters = {}
    const requests = {}

    return (

        <GlobalContext.Provider value = {{state, setters, requests}}>
            {props.children}
        </GlobalContext.Provider>
    )
}

export default GlobalState