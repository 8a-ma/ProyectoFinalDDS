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
            moviesWithCast.sort((a, b) => b.vote_average - a.vote_average);
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
            <div className='sticky-top'>
                <Header />
                <Navbar searchMovies={searchMovies} setSearchKey={setSearchKey} />
            </div>
            
            <div className="container text-center mt-1">
                <div className="row mx-auto pt-1 align-self-center">
                    <div className='bg-custom-ranking row mb-3 justify-content-center'>
                        <p className='h2 text-white'>Aclamados por la critica</p>
                        {movies.slice(0,2).map((movie)=>(
                            <Carta id={movie.id} title={movie.title} src={`${API.URL_IMAGE + movie.poster_path}`} movie={movie} cast={movie.cast} runtime={movie.runtime}/> 
                        ))}
                    </div>
                    <div className='row justify-content-center'>
                        {movies.slice(2).map((movie)=>(
                                <Carta id={movie.id} title={movie.title} src={`${API.URL_IMAGE + movie.poster_path}`} movie={movie} cast={movie.cast} runtime={movie.runtime}/> 
                            ))}
                    </div>
                </div>
            </div>
            
            <Footer />
        </div>
        
    );
}

export default Inicio;