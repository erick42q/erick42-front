import { BrowserRouter } from 'react-router-dom'


// import './pages/utils/reset.css'

import './App.css';
import Rotas from './routes'
import Footer from './pages/footer'
import Header from './pages/header'



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
