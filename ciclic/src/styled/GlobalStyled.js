import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
    background-color: #EEEEEE;
    color: #303134; 
    -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Arial', sans-serif;
        font-weight: 400;
        color: #303134;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600px;
    }

    button {
        cursor: pointer;
    }

`