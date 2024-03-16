import React from 'react'

import { Route, Routes } from 'react-router-dom'

import Home from './pages/home/index'
import Contact from './pages/contact/index'
import Portfolio from './pages/portfolio/index'



export default function Rotas() {

    return (
        <Routes>
            <Route path="/" exact element={<Home />} />
            <Route path="/portifolio" exact element={<Portfolio />} />
            <Route path="/contact" exact element={<Contact />} />
        </Routes>
    )
}

