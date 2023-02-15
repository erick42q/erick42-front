// import './pages/utils/reset.css'
import './App.css';
import Rotas from './routes'
import Header from './pages/header'
import Footer from './pages/footer'


function App() {

  return (
    <div  >
      <Header />
      <div class="container text-center">
        <Rotas />
        <Footer />
      </div>
    </div>
  );
}

export default App;
