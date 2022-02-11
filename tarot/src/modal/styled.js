import styled from 'styled-components'

export const ModalBackdrop = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    backdrop-filter: blur(30px);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ModalFrame = styled.div`
    background-color: white;
    height: 500px;
    width: 800px;
`

export const ModalHeader = styled.div`
    text-align: end;
    padding: 10px;

    span {
        color: red;
        font-weight: bold;

        &:hover {
            cursor: pointer;
        }
    }
`

export const ModalContent = styled.div`
display: flex;

align-items: flex-start;
justify-content: center;

    div {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        h1{
            text-align: center;
            margin-bottom: 20px;

            font-size: 20px;
        }

    }

    .text {
        width: 500px;

        p {
            margin-left: 60px;
            margin-top: 7px;
            text-align: justify;
        }

    }

`