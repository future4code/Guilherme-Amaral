import { BrowserRouter, Routes, Route } from "react-router-dom"

import Simulation from '../pages/simulation/Simulation'
import ResultSimulation from '../pages/resultSimulation/ResultSimulation'

export const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Simulation />}/>
                <Route path="/result" element={<ResultSimulation />} />
            </Routes>
        </BrowserRouter>
    )
}