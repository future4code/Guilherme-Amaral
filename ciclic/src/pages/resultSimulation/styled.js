import styled from 'styled-components'

export const ContainerMain = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContainerResult = styled.div`
box-shadow: 3px 6px 10px #ABABAB;
border-radius: 15px;

width: 450px;
height: 500px;

display: flex;
flex-direction: column;
align-items: center;

margin-top: 30px;

    h1 {
        margin-top: 110px;
        margin-bottom: 20px;

        color: #095CA0;
        font-size: 30px;
    }

    h2 {
        margin-top: 20px;
        margin-bottom: 10px;

        color: green;
        font-size: 30px;
    }

    p {

        text-align: center;

        width: 400px;
        
        font-size: 18px;
        line-height: 35px;
    }

    button {
        width: 200px;
        height: 40px;   

        margin-top: 40px;
        border: none;
        border-radius: 5px;

        color: white;
        background-color: #095CA0;

        font-size: 18px;
        font-weight: bold;

        transition: filter 0.2s;

        &:hover {
        filter: brightness(0.9)
        }   
    }
`



