import axios from 'axios'
import React from 'react'
import styled from 'styled-components'


const ContaninerPrincipal = styled.div `
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,600;0,700;0,800;1,300;1,400;1,600;1,700;1,800&display=swap');
background-color: #222;
font-family: Open Sans;
color: white;
border: solid 1px chartreuse;
box-shadow: 1px 1px 2px chartreuse;
border-radius: 5px;
width: 1000px;
margin: 30vh auto;
text-align: center;
padding: 20px;
`

const CardPlayLists = styled.div`
display: flex;
justify-content:center;
align-items: center;
border-bottom: solid 1px #3f3f3f;
padding-right: 5px;
padding-left: 5px;
margin: 7px;
`

const CardAddPlaylist = styled.div`
display: flex;
justify-content: center;
align-items: center;
padding: 20px;
`
const Button = styled.div`
text-align: center;
align-items: center;
margin-left: 10px;
padding: 3px;
border: 1px solid chartreuse;
border-radius: 5px;
cursor: pointer;

`
const ButtonX = styled.div `
text-align: center;
color: red;
margin-left: 10px;
padding: 5px;
cursor: pointer;
`

const ButtonPlayLists = styled.div`
text-align: center;
color: chartreuse;
border: solid 1px #3f3f3f;
border-radius: 5px;
padding: 5px;
margin: 15px 15px;
cursor: pointer;
`

const TituloLogo = styled.div `
align-items: center;
border-bottom: solid 1px #3f3f3f;
padding-right: 5px;
padding-left: 5px;
padding-bottom: 15px;
margin: 7px;
`

const AddMusics = styled.div`
display: flex;
justify-content: center;
flex-direction: row;
padding: 20px;
align-items: center;
`
const InputAddMusics = styled.input`
margin: 7px;
padding: 7px;
border-radius: 5px;
text-align: center;
align-items: center;
align-items: center;
`

const ButtonMusic = styled.div`
text-align: center;
margin-top: 10px;
padding: 6px;
border: 1px solid chartreuse;
border-radius: 2px;
cursor: pointer;
`

class App extends React.Component {

  state = {

    inputPlaylist: '',
    playlists: [],
    name: "", 
    artist: "",
    url: "",
    music: []
    
  }

  onChangeInputPlayList= (event) => {
    this.setState ({inputPlaylist: event.target.value})
  }

  createPlaylist = () => {

    const body = {
    
      name: this.state.inputPlaylist
    }

    axios.post ('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', body, {
      
    headers: {
        Authorization: "guilherme-amaral-lovelace"
      }
      
    })

    .then ((res) => {
      alert ('Playlist adicionada')
      this.setState({inputPlaylist: ''})
    })

    .catch ((err) => {
      alert (err.data)
    })

  }

  getAllPlaylists = () => { 
    
    axios.get ('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', {

      headers: {

        Authorization: "guilherme-amaral-lovelace"

      }
    })

    .then ((res) => {
      this.setState({playlists: res.data.result.list})
      this.setState(this.getAllPlaylists)
    })

    .catch ((err) => {
      console.log (err.data)
    })
  } 

  deletePlaylist = (id) => {
  
    axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`, {
    
    headers: {

      Authorization: "guilherme-amaral-lovelace"

    }

  })

    .then ((res) => {
    console.log(res.data)
    this.setState(this.getAllPlaylists)
    
  })

    .catch ((err) => {
    console.log (err.data)
  })
  }

  addTrackToPlaylist = (id) => { 

    const body = {

      name: this.state.name, 
      artist: this.state.artist,
      url: this.state.url
    
    }
    
    axios.post (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, body, {

      headers: {

        Authorization: "guilherme-amaral-lovelace"

      }
    })

    .then ((res) => {
      alert('Adicionado')
      console.log (res.data)
    })

    .catch ((err) => {
      console.log (err.data)
    })
 
  }

  
  getPlaylistTracks = (id) => {

    axios.get (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`, {

      headers: {

        Authorization: "guilherme-amaral-lovelace"

      }
    })
    
    .then ((res) => {
      this.setState({music: res.data.result.tracks})
  
    })

    .catch ((err) => {
      console.log (err.data)
    })
  }

  removeTrackFromPlaylist = (trackId, playlist) => {

    axios.delete (`https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${trackId}/tracks/${trackId}`, {

      headers: {

        Authorization: "guilherme-amaral-lovelace"

      }
    })
  
    .then ((res) => {
      alert ('removido com sucesso')
      console.log (res)
  
    })

    .catch ((err) => {
      alert ('erro')
      console.log (err.data)
    })

  }

  onChangeInputName= (event) => {
    this.setState ({name: event.target.value})
  }

  onChangeInputArtist= (event) => {
    this.setState ({artist: event.target.value})
  }
  
  onChangeInputUrl= (event) => {
    this.setState ({url: event.target.value})
  }

  render () {
    
    const showPlayList = this.state.playlists.map ((playlist) => {
      
      return <CardPlayLists key={playlist.id} >
        <p>{playlist.name}</p>

        <AddMusics>
          <InputAddMusics
            value={this.state.name} 
            onChange={this.onChangeInputName}
            placeholder="Nome da música"

          />

          <InputAddMusics 
            value={this.state.artist} 
            onChange={this.onChangeInputArtist}
            placeholder="Cantor ou banda da música"
          />

          <InputAddMusics 
            value={this.state.url} 
            onChange={this.onChangeInputUrl}
            placeholder="URL da música"
          />

          <Button onClick={() => this.addTrackToPlaylist (playlist.id)}>Adicionar</Button>
        </AddMusics>

        <ButtonX onClick={() => this.deletePlaylist(playlist.id)}>X</ButtonX>
        <ButtonPlayLists onClick={ () => this.getPlaylistTracks (playlist.id)}>Músicas</ButtonPlayLists>

      </CardPlayLists>
    })

    const musicList = this.state.music.map ((music) => {
      return <div key={music.id}>
        <p>Música:  {music.name}</p>
        <p>Artista:{music.artist}</p>
        <p>URL: {music.url}</p>
        <ButtonX onClick={() => this.removeTrackFromPlaylist (music.id)}>X</ButtonX>
      </div>
    })

    return (
      <ContaninerPrincipal>

        <TituloLogo>
          <h1>LabeFY Music</h1>
          <p>high fidelity experience! 🎧</p>
        </TituloLogo>

        <h3>Adicionar PLayList</h3>

        <CardAddPlaylist>
          <input 
          value={this.inputPlaylist} 
          onChange={this.onChangeInputPlayList}
          placeholder="Adicionar Playlist" 
          />
         <Button onClick={this.createPlaylist}>Adicionar</Button >
        </CardAddPlaylist>

        <div>
          <ButtonPlayLists onClick={this.getAllPlaylists}>Visualizar PlayLists</ButtonPlayLists>
        </div>

        {showPlayList}
        {musicList}
      </ContaninerPrincipal>
    )
  }
}

export default App;



