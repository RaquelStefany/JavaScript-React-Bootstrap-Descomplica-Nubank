import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/header/Header'
import Carrossel from './components/carrossel/Carrossel';
import Destaques from './components/destaques/Destaques';
import Ultimos from './components/ultimos/Ultimos';
import Sobre from './components/sobre/Sobre';
import Contato from './components/contato/Contato';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Header/>
      <Carrossel/>
      <Destaques/>
      <Ultimos/>
      <Sobre/>
      <Contato/>
      <Footer/>
    </>
  )
}

export default App
