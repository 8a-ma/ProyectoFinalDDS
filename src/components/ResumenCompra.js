import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function ResumenCompra() {
    const location = useLocation();  
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';
    const { titulo, poster, entradasAdulto, entradasNino, hora, asientos } = location.state;
    


    return (
        <div class="container p-5">
            <div class="row align-items-start mt-3">
                <div class="col">
                    <img src={URL_IMAGE + poster} alt="" class="rounded mx-auto px-auto my-auto pt-5 w-75"></img>
                </div>
                <div class="col border border-info p-2 bg-highlight text-white mx-auto">
                    <p class="h3">Resumen de compra</p>
                    <p>Pelicula: {titulo} </p>
                    <p>Lugar: San javier 1942, Santiago</p>
                    <p>Fecha: 13 de Noviembre</p>
                    <p>Función: {hora}</p>
                    <p>Boletos: {entradasAdulto} adulto, {entradasNino} niños</p>
                    <p>Asientos: {asientos.join(', ')}</p>
                    <p class="h4">Total: $13000</p>
                    <button type="button" class="btn btn-success btn-lg">Comprar</button>
                </div>
            </div>
        </div>
    );
}

export default ResumenCompra;
