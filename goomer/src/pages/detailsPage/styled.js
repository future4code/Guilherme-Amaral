import styled from "styled-components"

export const Container = styled.main`
width: 900px;
position: relative;
left: 230px;
`

export const ContainerDescriptionRestaurant = styled.div`
display: flex;
align-items: center;

width: 800px;
height: 160px;

margin-top: 50px;

    img {
        width: 145px;
        height: 145px;

        margin-right: 20px;

        border-radius: 4px;
    }

    h2 {
        font-size: 24px;
        padding-bottom: 10px;
    }

    p { 
        font-weight: normal;
        font-size: 12px;
        
        text-align: justify;
    }

    .descripition{
        font-size: 16px;
        padding-bottom: 10px;
    }

    span {
        font-weight: bold;
    }
`

export const ContainerInput = styled.div`
display: flex;
align-items: center;
justify-content: center;

margin-top: 30px;
margin-bottom: 50px;

box-shadow: 0px 2px 4px #0000001A;
border-radius: 20px;

width: 870px;

    label {

        position: relative;
        left: 20px;

        font-size: 14px;
        font-weight: normal;

        input {
            margin-left: 20px;
            padding: 20px;
            
            width: 690px;
            height: 40px;

            border: none;
            border-radius: 0 20px 20px 0;

            border-radius: left 20px;
            background-color: #E6E6E6;
        }

        svg {
            position: relative;
            top: 1px;
            right: 27px;
        }

    }
`