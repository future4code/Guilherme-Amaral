import styled from "styled-components"

export const Container = styled.main`
width: 100vw;

h1 {
   text-align: center;
   margin: 20px auto;

   color: #363f5f;
}
`

export const ContainerPlaylist = styled.div`
text-align: center;
margin-top: 50px;

    h2{
        box-shadow: 2px 3px 6px rgba(162, 162, 162, 0.25);
        
        width: 400px;

        margin: 35px auto;
        padding: 20px;

        color: #363f5f;

        transition: ease 0.2s;

        &:hover {
        transform: scale(1.05);
        border-bottom: solid 1px #6933ff;

        cursor: pointer
        }
    }



`