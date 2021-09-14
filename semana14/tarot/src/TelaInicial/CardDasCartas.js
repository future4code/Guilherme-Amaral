import React from 'react';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { CardEstilizado } from './styled';


const CardDasCartas = (props) => {

  return (

    <CardEstilizado>
      <CardActionArea>
        <img src={props.cartas && props.cartas.image}/>
        <CardContent>
          <Typography gutterBottom component="p">
            {props.cartas.name}
          </Typography>
        </CardContent>
      </CardActionArea>
    </CardEstilizado>
  );
}

export default CardDasCartas