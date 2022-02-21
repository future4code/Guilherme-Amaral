import { BrowserRouter, Routes, Route } from "react-router-dom"

import CharacterListPage from '../pages/characterListPage/CharacterListPage'
import CharacterDetailPage from '../pages/characterDetailPage/CharacterDetailPage'


export const Router = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<CharacterListPage/>}/>
                <Route path="/detail/:id" element={<CharacterDetailPage />}/>         
            </Routes>
        </BrowserRouter>
    )
}

export default Router