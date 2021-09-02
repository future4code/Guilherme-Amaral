import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import { ContainerPrincipal } from '../FeedPage/styled';
import { useParams } from 'react-router';
import useRequestData from '../../hooks/useRequestData';
import { BASE_URL } from '../../constantes/urls';
import CardPostPage from './CardPostPage';
import CardPostComentarios from './CardPostComentarios';

const PostPage = () => {

    useProtectedPage()
    
    const params = useParams()
    console.log (params)

    const getcoments = useRequestData([], `${BASE_URL}/posts/${params.id}/comments`)
    console.log ('aqui', getcoments)

    const comentariosNaTela = getcoments.map ((coment) => {
        return <CardPostPage key={coment.id} coment={coment}/>
    })

    return (
        <ContainerPrincipal>
            {comentariosNaTela}
            <CardPostComentarios/>
        </ContainerPrincipal>
    )
}

export default PostPage