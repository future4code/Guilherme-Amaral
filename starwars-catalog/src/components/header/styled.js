import styled from "styled-components";

export const ContainerHeader = styled.div`
display: flex;
justify-content: space-between;
align-items: center;


padding-left: 15px;

background-color: #1F2738;
color: #EEEEEE;

height: 55px;

    h1 { 
        font-size: 18pt;
    }
`

export const Menu = styled.div`
padding: 10px;

.buttonSelect {

    color: #F56F36;
}

button {
    
    width: 150px;
    height: 55px;
    border: none;

    border-left: 2px solid #EEEEEE;
    font-weight: bold;
    font-size: 16px;

    background-color: #1F2738;
    color: #EEEEEE;

    &:hover {
      
        color: #F56F36;
        cursor: pointer;
    }
}


       






`