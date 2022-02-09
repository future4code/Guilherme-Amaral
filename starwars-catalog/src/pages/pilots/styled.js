import styled from 'styled-components'

export const ConatainerPilots = styled.main`
width: 95vw;
margin: 0 auto;

h1 {
    text-align: center;
    color: #000;

    margin-top: 15px;
}
`

export const CardPilot = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

align-items:center;
justify-content: center;
align-self: center;

margin: 10px auto;

    .carregando {
        position: relative;
        left: 580px;

        font-size: 25px;
        font-weight: bold;
        margin-top: 180px;
    }   

    div{
        border: 2px solid #1F2738;
        width: 180px;

        background-color: #1F2738;

        margin: 20px auto;

        p {
            text-align: center;
            color: #EEEEEE;

            font-size: 17px;
            padding: 15px;
        }

        img {
            width: 176px;
            height: 150px;
            
        }

        &:hover {
            border: 2px solid #F56F36;
            background-color: #F56F36;
            cursor: pointer;
        }

    }
`