import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Swal from "sweetalert2";


function ResumenCompra() {
    const location = useLocation();  
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
    const { titulo, poster, entradasAdulto, entradasNino, hora, asientos } = location.state;
    
    const mostrarAlerta = () => {
        Swal.fire({
          title: "¡Listo!",
          text: "La compra fue exitosa",
          icon: "success",
          confirmButtonText: "Aceptar"
        })
      }

    return (
        <div class="container-fluid my-3">
            <div class="row align-items-start">
                <div class="col mt-0">
                    <img src={URL_IMAGE + poster} alt="" class="rounded p-2 w-50"></img>
                </div>
                <div class="col border border-info p-2 bg-highlight text-white mx-auto">
                    <p class="h3">Resumen de compra</p>
                    <p>Pelicula: {titulo} </p>
                    <p>Lugar: San javier 1942, Santiago</p>
                    <p>Fecha: 13 de Noviembre</p>
                    <p>Función: {hora}</p>
                    <p>Boletos: {entradasAdulto} adulto, {entradasNino} niños</p>
                    <p>Asientos: {asientos.join(', ')}</p>
                    <p class="h4">Total: ${7500*entradasAdulto + 6000*entradasNino}</p>
                    <button type="button" class="btn btn-success btn-lg" onClick={(e) => { e.preventDefault(); mostrarAlerta(); }}>Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default ResumenCompra;
