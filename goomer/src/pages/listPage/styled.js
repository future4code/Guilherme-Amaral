import styled from "styled-components"

export const Container = styled.main`
display: flex;
flex-direction: column;
align-items: center;

    h1 {
        margin-top: 30px;

        opacity: 1;
    }

    input {
        width: 840px;
        height: 40px;

        margin-top: 30px;

        padding: 20px;
        
        border:none;
        border-radius: 20px;
        box-shadow: 0px 2px 4px var(--gray-light);

        opacity: 1;
    }

    svg {
        position: relative;
        top: -29px;
        left: 395px;
    }
`

export const MainContainer = styled.div`
margin-top: 30px;

display: grid;
grid-template-columns: 1fr 1fr 1fr;
`

export const RestaurantContainer = styled.div`
display: flex;
align-items: center;
justify-content: flex-start;

border-radius: 4px;
box-shadow: 0px 2px 4px var(--gray-light);

width: 367px;
height: 100px;

margin: 25px;


    &:hover {
        cursor: pointer;
    }

    img {
        width: 120px;
        height: 103px;

        margin-right: 25px;
        border-radius: 4px 0px 0px 4px;
    }

    h4 {
        font-size: 16px;
        letter-spacing: 0px;
        opacity: 1;
    }

    p {
        font-size: 12px;
        letter-spacing: 0px;
        opacity: 1;
    }

    .tag {

        position: relative;
        left: 35px;
        bottom: 45px;

        p { 
            width: 48px;
            height: 48px;

            padding-top: 18px;
            
            border-radius: 30px;
            box-shadow: 0px 1px 2px var(--gray-light);
            opacity: 1;

            color: white;
            text-align: center;
            font-size: 8px;
            font-weight: bold;

            background-color: var(--purple); 

            & + p {
               margin-right: -320px;
            }
        }

        .closed {
            width: 48px;
            height: 48px;

            padding-top: 18px;
            
            border-radius: 30px;
            box-shadow: 0px 1px 2px var(--gray-light);
            opacity: 1;

            color: white;
            text-align: center;
            font-size: 8px;
            font-weight: bold;

            background-color: #B5ABD4;
        }
    }

`