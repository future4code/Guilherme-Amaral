import React from "react";
import "./styles.css";

import Header from '../src/components/header/Header'
import MenuVertical from "./components/menuVertical/MenuVertical";
import CardVideo from './components/cardVideo/CardVideo'
import Footer from './components/footer/footer'

export const App = () => {

  const titulo = "Título do vídeo";

  const reproduzVideo = () => {
    alert("O vídeo está sendo reproduzido");
  }

  return (
    <>
      <div className="tela-inteira">
        <Header />

        <main>
          <MenuVertical />
          <CardVideo titulo={titulo} reproduzVideo={reproduzVideo} />
        </main>

        <Footer />
      </div>
    </>
  )
}

export default App
