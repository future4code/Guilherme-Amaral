import axios from 'axios'
import PokeCard from './PokeCard/index.js'
import styled from 'styled-components'
import React, { useEffect, useState } from "react"


const ContainerPrincipal = styled.div `
text-align: center;
border: 1px solid red;
border-radius: 5px;
width: 300px;
height: 300px;
padding: 15px;
margin: 130px auto;
`

function App () {
  const [pokeList, setPokeList] = useState ([])
  const [pokeName, setPokeName] = useState ("")

  useEffect (() => { 
    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      
      this.setState({ pokeList: response.data.results });
    })
    .catch(err => {
      console.log(err);
    });
  })

  changePokeName = event => {
    this.setState({ pokeName: event.target.value });
  };

  {
    return (
      <ContainerPrincipal>
        {/* evento onChange chama função toda vez que o usuário 
        escolhe um novo pokemon no dropdown */}
        <select onChange={this.changePokeName}>
          <option value={""}>Nenhum</option>
          {/* renderizando a lista de pokemons como opções do select */}
          {this.state.pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
        {/* expressão booleana que renderiza o componente PokeCard,
        caso o valor de pokeName, no estado, seja true */}
        {this.state.pokeName && <PokeCard pokemon={this.state.pokeName} />}
      </ContainerPrincipal>
    );
  }
}

export default App;