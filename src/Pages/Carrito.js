import Header from '../components/Header';
import Navbarsin from '../components/Navbarsin';
import Footer from '../components/Footer';
import ResumenCompra from '../components/ResumenCompra';
import Compra from '../components/Compra';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import * as API from '../const.js';
import React, { useEffect, useState } from "react";

function Carrito(){
    const location = useLocation();
    const [movies, setMovies] = useState([]);

    const fetchMovies = async() => {
        const {data: { results } ,} = await axios.get(`${API.API_URL}/discover/movie`, {
            params: {
                api_key: API.API_KEY,
            },  
        });

        // Obtén el elenco para cada película
        const moviesWithCast = await Promise.all(results.map(async movie => {
            const {data: { cast } ,} = await axios.get(`${API.API_URL}/movie/${movie.id}/credits`, {
                params: {
                    api_key: API.API_KEY,
                },  
            });

            return {...movie, cast};
        }));

        setMovies(moviesWithCast);
    }

    useEffect(()=>{
        fetchMovies();
    }, [])

    return (
        <div>
            <div>
                <Header />
                <Navbarsin />
            </div>
            <div>
                <Compra movies={movies} />
            </div>
            <div className='fixed-bottom'>
                <Footer />
            </div>
        </div>
    );
}

export default Carrito;
