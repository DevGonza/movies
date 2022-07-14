import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Componentes/Footer/Footer';
import Navbar from './Componentes/Navbar/Navbar';
import DetallePelicula from './Pages/DetallePelicula/DetallePelicula';
import Home from './Pages/Home/Home';
import './css/App.css';
import Favoritos from './Pages/Favoritos/Favoritos';
import PeliculasDestacadas from './Pages/PeliculasDestacadas/PeliculasDestacadas';
import Peliculas from './Pages/Peliculas/Peliculas';
import Error from './Pages/Error/Error';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
        <Route path='/peliculasdestacadas' element= {<PeliculasDestacadas />} />
        <Route path='/detalle/:id' element= {<DetallePelicula />} />
        <Route path='/favoritos' element= {<Favoritos />} />
        <Route path='/peliculas' element={<Peliculas />} />
        <Route path='*' element={<Error />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
