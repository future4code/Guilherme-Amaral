import { createGlobalStyle } from 'styled-components'

export const GlobalStyled = createGlobalStyle`

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: black;
        -webkit-font-smoothing: antialiased;
        color: #B3B5C6; 
    }

    body, input, textarea, button {
        font-family: 'Poppins', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600px;
    }

    button {
        cursor: pointer;
    }

`