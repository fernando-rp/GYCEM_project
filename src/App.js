
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import './App.css';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import ProyectosDestacados from './components/ProyectosDestacados';
import Navbar from './components/Navbar';

function App() {

 
  return (
    <BrowserRouter>
    <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/proyectos_destacados" element={<ProyectosDestacados/>} />
        <Route path="/contacto" element={<Contacto/>} />
      </Routes>
        
      
    </BrowserRouter>

  )
}

export default App;
