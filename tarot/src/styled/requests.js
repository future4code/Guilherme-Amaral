import axios from 'axios'

export const getCardGames = (setCards, setImageBackCard, setImagesUrl) => {

    axios.get('tarot.json')
    .then((res) => {
        setCards(res.data.cards.map(card => ({...card, visible: true})))
        setImageBackCard(res.data.imageBackCard)
        setImagesUrl(res.data.imagesUrl)
    })
    .catch((err) => {
        console.log (err)
    })
}