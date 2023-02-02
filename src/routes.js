import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Home from './pages/home/index'
import About from './pages/about/index'

export default function Rotas() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" exact element={<Home />} />
                <Route path="/sobre" exact element={<About />} />

            </Routes>
        </BrowserRouter>
    )
}

