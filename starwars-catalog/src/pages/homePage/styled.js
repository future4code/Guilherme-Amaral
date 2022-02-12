import styled from "styled-components";
import background from '../../images/background.jpg'

export const ContainerHomePage = styled.main`
display:flex;
align-items: center;
justify-content: center;

height: 91.5vh;

background-image: url(${background});
background-size: cover;


    button {
        margin: 10px;
        
        width: 300px;
        height: 45px;

        font-size: 20px;
        font-weight: bold;

        border: none;
        border-radius: 20px;

        transition: filter 0.2s;

        &:hover {
            cursor: pointer;
            filter: brightness(0.9)
        }
    }
  
`