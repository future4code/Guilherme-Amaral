import React from 'react'
import useProtectedPage from '../../hooks/useProtectedPage'
import CreatePost from './CreatePost'
import { ContainerPrincipal } from './styled'
import ViewPost from './ViewPost'


const FeedPage = () => {

    useProtectedPage()

    return (

        <ContainerPrincipal>
            <CreatePost />
            <ViewPost />
        </ContainerPrincipal>
    )
}

export default FeedPage