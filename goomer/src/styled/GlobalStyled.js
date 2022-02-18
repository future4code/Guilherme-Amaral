import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'

export const GlobalStyled = createGlobalStyle`

    :root {
        --background: #FFFFFF;
        --green: #009CA3;
        --gray-light: #00000029;
        --gray: #404040;
        --purple: #2B0D61;
        --purple-ligth: #B5ABD4;
        --shape: #FFFFFF;
        --white: #FBFBFB;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        background-color: var(--background);
        color: var(--gray);
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button {
        font-family: 'Montserrat', sans-serif;
        font-weight: 400;
        color: var(--gray);
    }

    h1, h2, h3, h4, h5, h6, strong {
        font-weight: 600px;
    }

    button {
        cursor: pointer;
    }

    //Estilização do modal 

    .react-modal-overlay{
        background: rgba(0, 0, 0, 0.5);

        position: fixed;
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;

        display: flex;
        align-items: center;
        justify-content: center;

    }
    
    .react-modal-content{
        width: 601px;
        height: 484px;
        background: #f0f2f5;
        padding: 3rem;
        position: relative;
        border-radius: 0.25rem;
    }

    .react-modal-close {
        position: absolute;
        right: -20px;
        top: -25px;
        border: 0;
        background: white;

        border-radius: 30px;
        box-shadow: 0px 2px 4px #00000029;
        opacity: 1;

        width: 40px;
        height: 40px;

        font-size: 20px;
        font-weight: bold;
        color: black;

        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.8);
        }
    }
`