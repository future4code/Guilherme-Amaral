import styled from "styled-components";
import Card from '@material-ui/core/Card';

export const ContainerTitulo = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 20px;
`
export const ContainerBotaoVoltar = styled.div`
margin: 30px;
text-align: center;
`
export const CardEstilizado = styled(Card)`
margin: 20px;
width: 180px;
text-align: center;
`
export const ContainerCartas = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
`
