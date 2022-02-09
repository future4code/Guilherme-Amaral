import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: #EEEEEE;
 ;
        -webkit-font-smoothing: antialiased;
        color: #000; 
    }

    body, input, textarea, button {
        font-family: 'Arial', sans-serif;
        font-weight: 400;
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600px;
    }

    button {
        cursor: pointer;
    }

`