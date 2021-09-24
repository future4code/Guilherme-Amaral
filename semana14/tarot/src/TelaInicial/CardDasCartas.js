import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardEstilizado } from './styled';
import tarot from '../assets/tarot.json'

const CardDasCartas = (props) => {

  const imagens = tarot
  return (

    <CardEstilizado>
      <CardActionArea>
        <img src={`https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${props.cartas.image}`}/>
      </CardActionArea>
    </CardEstilizado>
  );
}

export default CardDasCartas