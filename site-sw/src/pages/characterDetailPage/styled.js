import styled from 'styled-components'

export const ContainerDetailPersonagem = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

    h2 {
        margin-top: 25px;
        margin-bottom: 10px;
    }

    button {
        width: 300px;
        height: 60px;

        margin-top: 50px;

        border: none;
        border-radius: 10px;
        background-color: #1A1D23;

        font-weight: bold;
        color: #B3B5C6;

        &:hover{
            border: 2px solid #B69142;
        }
    }
`

export const Personagem = styled.div`

    p {
        margin-top: 15px;
        text-align: flex-start;
    
    }
`