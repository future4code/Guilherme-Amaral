import React, { useEffect } from 'react';
import { ContainerPrincipal, CardEstilizado } from './styled';
import useRequestData from '../../hooks/useRequestData';
import {BASE_URL} from '../../constantes/urls'
import CardViewPost from './CardViewPost';



const ViewPost = () => {
    
    const getPosts = useRequestData ([], `${BASE_URL}/posts`)
    console.log (getPosts)
    
    const mostrarPostsNaTela = getPosts.map ((post) => {
      return <div>
        <CardViewPost key={post.id} post={post} getPosts={getPosts}/>
      </div>
       
    })

  return (
    
    <ContainerPrincipal>
        {mostrarPostsNaTela}     
    </ContainerPrincipal>
    
  );
}

export default ViewPost