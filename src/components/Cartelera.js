import React, { useEffect, useState } from "react";
import axios from "axios";
import Carta from "./Carta";
import * as API from '../const.js';

function Cartelera(){

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

    useEffect(()=>{
        fetchMovies();
    }, [])

    return (
        <div className="container text-center p-1">
            <div className="row mx-auto pt-1">
                {movies.map((movie)=>(
                    <Carta id={movie.id} name={movie.title} src={`${API.URL_IMAGE + movie.poster_path}`} />
                ))}
            </div>
        </div>
    );
}

export default Cartelera;