import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Carta from '../components/Carta';
import Footer from '../components/Footer';

import React, { useEffect, useState } from "react";


import axios from "axios";
import * as API from '../const.js';

function Inicio(){

    //Variables de estado
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [movie, setMovie] = useState({title: "Loading Movies"}); 

    //Funcion para hacer peticion get a la api de tmdb
    const fetchMovies = async(searchKey) =>{
        const type = searchKey ? "search" : "discover"
        const {data: { results } ,} = await axios.get(`${API.API_URL}/${type}/movie`, {
            params: {
                api_key: API.API_KEY,
                query: searchKey,
            },  
        });

        setMovies(results);
        setMovie(results[0]);
    }
    // Funcion para buscar peliculas
    const searchMovies = (e)=>{
        e.preventDefault();
        fetchMovies(searchKey)
    }

    useEffect(()=>{
        fetchMovies();
    }, [])



    return (
        <div>
            <Header />
            <Navbar searchMovies={searchMovies} setSearchKey={setSearchKey} />
            <div className="container text-center p-1">
                <div className="row mx-auto pt-1">
                    {movies.map((movie)=>(
                        <Carta id={movie.id} title={movie.title} src={`${API.URL_IMAGE + movie.poster_path}`} movie={movie} />
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Inicio;