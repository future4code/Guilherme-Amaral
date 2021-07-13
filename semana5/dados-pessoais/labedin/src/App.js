import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://media-exp3.licdn.com/dms/image/C4D03AQHPq7EYc82VHw/profile-displayphoto-shrink_800_800/0/1579187529073?e=1631750400&v=beta&t=bS6Rsj_DC4-Pdk2i8HJtlDxbw2-uJyW7832zVGGakiI" 
          nome="Guilherme Augusto de Almeida Amaral" 
          descricao="Oi, eu sou o Guilherme Amaral, tenho 29 anos, sou solteiro, natural de Barra Mansa, interior do Rio de Janeiro, desenvolvedor Full Stack, advogado e entusiasta de tecnologia de forma geral."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://png.pngtree.com/png-vector/20190927/ourlarge/pngtree-email-icon-png-image_1757854.jpg"
          palavra="Email:"
          textoDoEmail="gui_lhermeaugusto@live.com"
          
        />
      </div>

      <div className="page-section-container">
        <CardPequeno 
          imagem="https://cdn.icon-icons.com/icons2/2460/PNG/512/location_pin_place_map_address_placeholder_icon_149107.png"
          palavra="Endereço:"
          textoDoEmail="Barra Mansa, Rio de Janeiro, Brasil" 
        />
      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://media-exp3.licdn.com/dms/image/C4E0BAQHN68osUoFKGA/company-logo_200_200/0/1625764040369?e=1634169600&v=beta&t=WKcTZ-qlAdpEa7P5bB80s8vnB8Xe1FtnW7VQsejubn0" 
          nome="Desenvolvedor Web" 
          descricao="HTML, CSS, Javascript e React" 
        />
        
        <CardGrande 
          imagem="https://exatovisual.com.br/imagens/impressos/logomarca-advocacia.png" 
          nome="Advogado e consultor jurídico" 
          descricao="Atendimento, captação, fidelização e venda de serviços para pessoas físicas e jurídicas
          Elaboração e análise de contratos em geral
          Elaboração de todas as peças processuais
          Atividades forense audiências e despachos." 
        />

        <CardGrande 
          imagem="https://media-exp3.licdn.com/dms/image/C4D0BAQGlyvbh3LAM7w/company-logo_200_200/0/1541101919629?e=1634169600&v=beta&t=ONLmRYqd5Zp8mutaukrZb0GCwEihekVmjhaP94qOric" 
          nome="Promotor de produtos e serviços digitais" 
          descricao="Divulgação digital de produtos e serviços como consórcio, seguros,
          cartões de credito, serviços por assinatura e outros do seguimento, atendimento
          e prospecção de clientes." 
        />  
      </div>

      

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
