import React, { useState } from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import { CardEstilizado } from './styled';
import tarot from '../assets/tarot.json'
import { Typography } from '@material-ui/core';

const CardDasCartas = (props) => {

  const [carta, setCarta] = useState(true)

 
  const FundoCartas = tarot.imageBackCard
  const FrenteCartas = `https://dkw5ssdvaqf8l.cloudfront.net/static/psr/br/framework/yii/images/content/pt-br/product/tarot/marselha/162x341/${props.cartas.image}`
 
  const virarCarta = () => {
    setCarta(false)
  }

  return (

    <CardEstilizado>
      <CardActionArea>
        {carta ? <img src={FundoCartas} 
          onClick={virarCarta}/> : 
          <div> 
            <img src={FrenteCartas}/>
            <Typography  align='center'>
              {props.cartas.name} 
            </Typography>
            <Typography variant='p' align='center'>
              Mussum Ipsum, cacilds vidis litro abertis. 
              Mauris nec dolor in eros commodo tempor. 
              Aenean aliquam molestie leo, vitae iaculis nisl. 
              Interagi no mé, cursus quis, vehicula ac nisi. 
              Mais vale um bebadis conhecidiss, que um alcoolatra anonimis. 
              Todo mundo vê os porris que eu tomo, mas ninguém vê os tombis que eu levo!
            </Typography> 
          </div>
        }
      </CardActionArea>
    </CardEstilizado>
  );
}

export default CardDasCartas