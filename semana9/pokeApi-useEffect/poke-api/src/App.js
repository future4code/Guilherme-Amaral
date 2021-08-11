import axios from 'axios'
import PokeCard from './PokeCard/index.js'
import styled from 'styled-components'
import React, { useEffect, useState } from "react"


const ContainerPrincipal = styled.div `
text-align: center;
border: 1px solid red;
border-radius: 5px;
width: 300px;
height: 230px;
padding: 15px;
margin: 130px auto;
`

function App (props) {
  const [pokeList, setPokeList] = useState ([])
  const [pokeName, setPokeName] = useState ("")

  useEffect (() => { 

    axios
    .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
    .then(response => {
      
       setPokeList (response.data.results)
    })
    .catch(err => {
      console.log(err);
    });
  })

  const changePokeName = event => {
    setPokeName (event.target.value)
  };

  {
    return (
      <ContainerPrincipal>
    
        <select onChange={changePokeName}>
          <option value={""}>Nenhum</option>
         
          {pokeList.map(pokemon => {
            return (
              <option key={pokemon.name} value={pokemon.name}>
                {pokemon.name}
              </option>
            );
          })}
        </select>
  
        {pokeName && <PokeCard pokeName={pokeName} />}
      </ContainerPrincipal>
    );
  }
}

export default App;