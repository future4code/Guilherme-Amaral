import styled from "styled-components"

export const ContainerCharacterList = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

padding-bottom: 50px;

    h2 {
        margin-bottom: 15px;
    }

    button {
        width: 250px;
        height: 60px;

        margin-top: 15px;

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
