import styled from "styled-components"
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'

export const Container = styled.main`
margin: auto;
`
export const AccordionEstilizado = styled(Accordion)`
width: 900px;
height: auto;

position: relative;
right: 35px;
`

export const AccordionSummaryEstilizado = styled(AccordionSummary)`

    p {
        font-size: 16px;
        font-weight: bold;
    }
`

export const AccordionDetailsEstilizado = styled(AccordionDetails)`

`

export const AccordionGrid = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
`

export const AccordionFlex = styled.div`
display: flex;

width: 386px;
height: 115px;

border-radius: 5px;
box-shadow: 0px 4px 8px #00000029;
opacity: 1;

margin-bottom: 30px;
margin-left: 30px;

    &:hover {
        cursor: pointer;
    }

    img {
        width: 115px;
        height: 115px;

        margin-right: 15px;
    }

    h2 {
        font-size: 16px;
        font-weight: bold;

        margin-bottom: 10px;
    }

    p {
        font-size: 12px;
        margin-bottom: 10px;
    }

    .price {
        font-size: 16px;
        font-weight: bold;

        color: var(--green)
    }

`

export const ContainerModal = styled.div`
display: flex;
flex-direction: column;
align-items: center;

    img {
        width: 553px;
        height: 196px;
    }

    button {
        width: 265px;
        height: 50px;

        position: relative;
        top: 60px;
        left: 105pt;

        background-color: var(--green);
        color: white;
        border: none;

        font-size: 20px;
    }

`

export const ModalFlex = styled.div`
display: flex;
flex-direction: row;
align-items: center;

margin: 20px;

width: 380px;
height: 65px;

    .title-description { 
        position: relative;
        left: -85px;
    }

    .price {
        position: relative;
        left: -50px;
        top: 65px;

        p {
            font-size: 32px;
            font-weight: bold;
            color: var(--green)
        }
    }

    h2 {
        font-size: 24px;
        font-weight: bold;
        margin-top: 60px;
        
    }

    p {
        font-size: 16px;
        margin-top: 20px;

        width: 380px;
        height: 65px;
    }

`