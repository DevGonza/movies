import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Componentes/Footer/Footer';
import Navbar from './Componentes/Navbar/Navbar';
import DetallePelicula from './Pages/DetallePelicula/DetallePelicula';
import Home from './Pages/Home/Home';
import './css/App.css';
import Favoritos from './Pages/Favoritos/Favoritos';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/detalle/:id' element= {<DetallePelicula />} />
        <Route path='/favoritos' element= {<Favoritos/>} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
