import './App.css';
import './sytle.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import Inicio from './Pages/Inicio';
import AboutIt from './Pages/AboutIt';
import Contacto from './Pages/Contacto';
import Carrito from './Pages/Carrito';
import Pelicula from './Pages/Pelicula';
import Carritop2 from './Pages/Carritop2';
import Carritop3 from './Pages/Carritop3';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Inicio />} />
        <Route path="nosotros" element={<AboutIt />} />
        <Route path="contacto" element={<Contacto />} />
        <Route path="carrito" element={<Carrito />} />
        <Route path="/pelicula" element={<Pelicula />} />
        <Route path="carritop2" element={<Carritop2 />} />
        <Route path="carritop3" element={<Carritop3 />} />
      </Routes  >
    </BrowserRouter>
  );
}


export default App;
