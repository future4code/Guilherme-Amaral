import React, { useState } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardEstilizado } from './styled';
import tarot from '../assets/tarot.json'


const CardDasCartas = (props) => {

  const [virarCarta, setVirarCarta] = useState(true)

  const mostrarCarta = () => {
    setVirarCarta(false)
  }

  const imagens = tarot
  const FundoCartas = tarot.imageBackCard
  const FrenteCartas = `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${props.cartas.image}`
 
  return (

    <CardEstilizado>
      <CardActionArea>
        {virarCarta ? <img src={FundoCartas} 
        onClick={mostrarCarta}/> : <img src={FrenteCartas}/>}
    
      </CardActionArea>
    </CardEstilizado>
  );
}

export default CardDasCartas