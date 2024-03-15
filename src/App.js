import React from 'react';
import { BrowserRouter } from 'react-router-dom'


// import './pages/utils/reset.css'

import './App.css';
import Header from './pages/header'
import Rotas from './routes'
import Footer from './pages/footer'



function App() {

  return (
    <div  >
      <BrowserRouter>
        <Header />
        <div className="container text-center">
          <Rotas />
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
