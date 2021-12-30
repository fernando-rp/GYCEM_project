import React from 'react';

import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';



import './App.css';
import Home from './components/Home';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import ProyectosDestacados from './components/ProyectosDestacados';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import NotFound from './components/NotFound';

function App() {

 
  return (
    <BrowserRouter>
    <Navbar></Navbar>
  
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/nosotros" element={<Nosotros/>} />
        <Route path="/proyectos_destacados" element={<ProyectosDestacados/>} />
        <Route path="/contacto" element={<Contacto/>} />
        <Route path='/404' element={<NotFound/>}/>
        <Route
        path="*"
        element={<Navigate to="/404" />}
        />
        
      </Routes>
 
      
    <Footer/>
      
    </BrowserRouter>

  )
}

export default App;
