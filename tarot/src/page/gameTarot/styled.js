import styled from "styled-components";

export const ContainerGame = styled.main`
height: 90.8vh;

display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

padding: 30px;
margin-left: 30px;

overflow-y: scroll;

    img {
        margin-bottom: 30px;

        height: 340px;
    }
`

export const Footer = styled.footer`
display: flex;
justify-content: center;
align-items: center;

width: 100vw;
height: 60px;

background-color: #EBEBFF;

    button {
        width: 200px;
        height: 35px;

        border: none;
        border-radius: 5px;

        background-color: #329B32;
        color: white;
        
        font-weight: bold;
        font-size: 18px;

        transition: filter 0.2s;
        
        &:hover {
            filter: brightness(0.9)
        }

    }
`

