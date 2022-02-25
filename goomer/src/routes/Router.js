import { BrowserRouter, Routes, Route } from "react-router-dom"

import ListPage from '../pages/listPage/ListPage'
import DetailsPage from '../pages/detailsPage/DetailsPage'

export const Router = () => {

    return (

        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ListPage />} />
                <Route path="/details/:id" element={<DetailsPage />}/>
            </Routes>
        </BrowserRouter>
    )
}