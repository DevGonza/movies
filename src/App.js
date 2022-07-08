import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Footer from './Componentes/Footer/Footer';
import Navbar from './Componentes/Navbar/Navbar';

import './css/App.css';
import Home from './Pages/Home/Home';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='/' element= {<Home />} />
      </Routes>
      <Footer />
    </Router>
    
  );
}

export default App;
