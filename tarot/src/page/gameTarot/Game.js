import { useEffect, useState } from "react"
import { ContainerGame, Footer } from "./styled"

import { getCardGames } from "../../styled/requests"
import Modal from "../../modal/Modal"
import { toast } from "react-toastify"

export const Game = () => {

    const [cards, setCards] = useState([])
    const [imageBackCard, setImageBackCard] = useState([])
    const [imagesUrl, setImagesUrl] = useState([])
    const [selectedCard, setSelectedCard] = useState();

    const [modalVisible, setModalVisible] = useState(false)

    useEffect(() => {
        getCardGames(setCards, setImageBackCard, setImagesUrl)
    }, [])


    const onClickStartGame = () => {
        const invisibleCards = cards.map(card => ({ ...card, visible: false }))
        const numberedCards = invisibleCards.map(card => ({ ...card, number: Math.random() }))
        const shuffledCards = numberedCards.sort((a, b) => a.number - b.number)
        setCards(shuffledCards)
        toast.success("Cartas embaralhadas", {
            theme: "light"
        })
    }

    const onClickCard = (card) => {
        const newCards = cards.map(c => {
            if (c.name === card.name) {
                return { ...card, visible: true }
            }
            return c
        });
        setCards(newCards)
        setModalVisible(true)
        setSelectedCard(card)
    }

    return (

        <>
            <ContainerGame>
                {cards.map(card => card.visible ?

                    <img src={`${imagesUrl}${card.image}`} /> :
                    <img src={imageBackCard} onClick={() => onClickCard(card)} />

                )}
            </ContainerGame>

            <Footer>
                <button onClick={onClickStartGame}>Começar</button>
            </Footer>

            {modalVisible && <Modal onClose={() => setModalVisible(false)}>
                <div>
                    <h1>{selectedCard.name}</h1>
                    <img src={`${imagesUrl}${selectedCard.image}`} />
                </div>

                <div className="text">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                    Donec consequat dui nec nisi condimentum facilisis. 
                    Maecenas gravida pharetra magna sit amet dignissim. 
                    Curabitur purus velit, malesuada eu tristique sit amet, 
                    fringilla ac nisi. Etiam elementum nunc ac placerat gravida. 
                    Etiam commodo dictum tortor eu rutrum. Pellentesque nec euismod nisi. 
                    In hac habitasse platea dictumst. In eu metus augue. 
                    Nulla aliquam, nibh quis vehicula consectetur, 
                    nisi est rhoncus tellus, a luctus ex massa eu turpis. 
                    Vivamus gravida nisi ac massa finibus facilisis. 
                    Phasellus nec facilisis tellus. 
                    </p>
                </div>
            </Modal>}
        </>
    )
}

export default Game