import styled from 'styled-components'

export const ContainerMain = styled.main`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const ContainerInputs = styled.div`
box-shadow: 3px 6px 10px #ABABAB;
border-radius: 15px;

width: 450px;
height: 500px;

display: flex;
flex-direction: column;
align-items: center;

margin-top: 30px;

    h1 {
        margin-top: 80px;
        margin-bottom: 20px;  
        margin-right: 215px;
        color: #095CA0;

    }

    button {
        width: 200px;
        height: 40px;   

        margin-top: 50px;
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

export const InputName = styled.div`

    label {
        font-size: 18px;
        font-weight: bold;
    }

    input {
        margin-left: 10px;
        margin-top: 20px;
        margin-bottom: 20px;

        border: none;
        border-radius: 5px;

        padding: 10px;

        width: 300px;
        height: 30px;
    }
`

export const InputMonthy = styled.div`

    label {
        font-size: 18px;
        font-weight: bold;
    }

    input {
        margin-left: 10px;
        margin-bottom: 20px;
        margin-left: 10px;

        border: none;
        border-radius: 5px;

        padding: 10px;

        width: 246px;
        height: 30px;
    }
`

export const InputTime = styled.div`

    label {
        font-size: 18px;
        font-weight: bold;
    }

    input {
        margin-left: 10px;
        margin-bottom: 20px;
        margin-left: 10px;

        border: none;
        border-radius: 5px;

        padding: 10px;

        width: 295px;
        height: 30px;
    }

`