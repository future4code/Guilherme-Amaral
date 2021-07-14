import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  render() {
    return (
      <MainContainer>
        <Post
          nomeUsuario={'Paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />

        <Post
          nomeUsuario={'Guilherme'}
          fotoUsuario={'https://media-exp3.licdn.com/dms/image/C4D03AQHPq7EYc82VHw/profile-displayphoto-shrink_800_800/0/1579187529073?e=1631750400&v=beta&t=bS6Rsj_DC4-Pdk2i8HJtlDxbw2-uJyW7832zVGGakiI'}
          fotoPost={'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/12/cachoeira-de-seljalandsfoss-na-islandia.jpeg?quality=70&strip=info&resize=680,453'}
        />

        <Post
          nomeUsuario={'Guilherme Amaral'}
          fotoUsuario={'https://scontent-gig2-1.xx.fbcdn.net/v/t1.6435-9/167042312_3779981842069451_3056928240674103082_n.jpg?_nc_cat=102&ccb=1-3&_nc_sid=09cbfe&_nc_eui2=AeGGYm3FJcl1SUGDSNC1cX13F_6IGhIxwYQX_ogaEjHBhNyV2FHHIyXVszr80Vd9euoLhqqLbwmNerKE_097aDmE&_nc_ohc=H7QAlf6vGTIAX9EMH5d&tn=HtCpjZmSbeJN8MYd&_nc_ht=scontent-gig2-1.xx&oh=eb5a939e4d4af87e00162bf488504079&oe=60F3F7A8'}
          fotoPost={'https://viagemeturismo.abril.com.br/wp-content/uploads/2016/10/thinkstock-lighthouse-list-east-with-sunbeams.jpeg?quality=70&strip=info&w=928'}
        />
        </MainContainer>
        
      
    );
  }
}

export default App;
