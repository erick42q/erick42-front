import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/index'
import About from './pages/about/index'
import Portfolio from './pages/portfolio/index'

import perfilreddit from "./assets/perfilreddit.png"

export default function Rotas() {
    const user = {
        erick: {
            first_name: "Erick",
            last_name: "Queiroz",
            urlPerfil: perfilreddit
        }
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home user={user.erick} />} />
                <Route path="/sobre" exact element={<About user={user.erick} />} />
                <Route path="/portifolio" exact element={<Portfolio />} />
            </Routes>
        </BrowserRouter>
    )
}

