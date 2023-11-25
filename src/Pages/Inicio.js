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
    const fetchMovies = async(searchKey) => {
        if (searchKey) {
            const filteredMovies = movies.filter(movie => movie.title.toLowerCase().includes(searchKey.toLowerCase()));
            setMovies(filteredMovies);
            setMovie(filteredMovies[0]);
        } else {
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
            setMovie(moviesWithCast[0]);
        }
    }
    
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
                    <Carta id={movie.id} title={movie.title} src={`${API.URL_IMAGE + movie.poster_path}`} movie={movie} cast={movie.cast} runtime={movie.runtime}/>        
                ))}

                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Inicio;