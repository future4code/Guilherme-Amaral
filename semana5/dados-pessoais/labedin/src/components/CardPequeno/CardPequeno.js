import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="bigcard-container-1">
            <img src={ props.imagem }/>
            <strong><p>{props.palavra}</p></strong>
            <p>{props.textoDoEmail}</p>   
        </div>

    )
}

export default CardPequeno;