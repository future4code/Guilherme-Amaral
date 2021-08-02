import './App.css';
import React from "react";
import axios from "axios";

class App extends React.Component {
  state = {
    pokemons: [],

    pictures: ""
  };

  componentDidMount() {
    this.getPokemons();
  }

  getPokemons = () => {
    axios
      .get("https://pokeapi.co/api/v2/pokemon?limit=151&offset=0")

      .then((res) => {
        this.setState({ pokemons: res.data.results });
      })
      .catch((err) => {
        console.log(err.data);
      });
  };

  onChangeSelectPokemons = (event) => {
    const url = event.target.value;

    axios
      .get(`${url}`)

      .then((res) => {
        console.log("pictures:", res.data.sprites.front_default);
        this.setState({ pictures: res.data.sprites.front_default });
      })

      .catch((err) => {
        alert("Não é um pokemon");
        console.log(err.data);
      });
  };

  render() {
    const pokeList = this.state.pokemons.map((poke) => {
      return (
        <option key={poke.name} value={poke.url}>
          {" "}
          {poke.name}{" "}
        </option>
      );
    });

    return (
      <div className="App">
        <h1>P o k e m o n s</h1>
        <select onChange={this.onChangeSelectPokemons}>
          <option>Selecione um pokemon</option>
          {pokeList}
        </select>
        {this.state.pictures && (
          <img src={this.state.pictures} alt="foto pokemon"></img>
        )}
      </div>
    );
  }
}

export default App;
