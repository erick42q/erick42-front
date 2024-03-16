import React from 'react';
import { BrowserRouter } from 'react-router-dom'


// import './pages/utils/reset.css'

import './App.css';
import Header from './pages/header'
import Rotas from './routes'
import Apresentacao from './components/apresentacao';
import Footer from './pages/footer'

import perfilreddit from "./assets/perfil_site.png"


const user = {
  erick: {
    first_name: "Erick",
    last_name: "Queiroz",
    urlPerfil: perfilreddit
  }
}

function App() {

  return (
    <div  >
      <BrowserRouter>
        <Header />
        <div className="container text-center mt-5 mb-5">
          <Apresentacao user={user.erick} />
          <Rotas />
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
