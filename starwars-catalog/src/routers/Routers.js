import HomePage from '../pages/homePage/HomePage'
import Starships from '../pages/starships/Starships'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from '../components/header/Header'
import Pilots from '../pages/pilots/Pilots'

export const Routers = () => {

    return (

        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<HomePage />}/>
                <Route path='/starships' element={<Starships />}/>
                <Route path='/pilots' element={<Pilots />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Routers