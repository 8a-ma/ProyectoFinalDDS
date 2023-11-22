import './App.css';
import './sytle.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from './Pages/Inicio';
import AboutIt from './Pages/AboutIt';
import Contacto from './Pages/Contacto';
import Carrito from './Pages/Carrito';
import Pelicula from './Pages/Pelicula';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<AboutIt />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="/pelicula" element={<Pelicula />} />
      </Routes  >
    </BrowserRouter>
  );
}

export default App;
