import logo from './logo.svg';
import './App.css';
import home from './imagens/home.png'
import exp from './imagens/exp.png'
import insc from './imagens/insc.png'
import biblio from './imagens/biblio.png'

function App() {
 
  const titulo = "Titulo do vídeo"

  function reproduzVideo() {
  alert("O vídeo está sendo reproduzido")
}
  
  
  
  return (
    <div>
      <div className="tela-inteira">
        <header>
            <h1>LabTube</h1>
            <input type="text" placeholder="Busca" id="campoDeBusca"/>
        </header>
​
        <main>
            <nav className="menu-vertical">
                <ul>
                    <li><img src={home}/></li>
                    <li><img src={exp}/></li>
                    <li><img src={insc}/></li>
                    <li><img src={biblio}/></li>
                </ul>
            </nav>
​
            <section className="painel-de-videos">
                <div className="box-pagina-principal media1" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=1 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media2" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=2 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media3" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=3 " alt=""/>
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media4" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=4 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media5" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=5 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media6" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=6 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media7" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=7 " alt="" />
                    <h4>{titulo}</h4>
                </div>
                <div className="box-pagina-principal media8" onClick={reproduzVideo}>
                    <img src="https://picsum.photos/400/400?a=8 " alt="" />
                    <h4>{titulo}</h4>
                </div>
            </section>
        </main>
​
        <footer>
            <h4>Desde 2021 © </h4>
        </footer>
    </div>
    </div>
    
  );
}

export default App;
