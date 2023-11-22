import React, { useEffect, useState } from "react";
import axios from "axios";
import Carta from "./Carta";

function Cartelera(){
    const API_URL = 'https://api.themoviedb.org/3';
    const API_KEY = 'ef2c3ae3a5d5a1de391beafbfc9d5b06';
    const IMAGE_PATH = 'https://image.tmdb.org/t/p/original';
    const URL_IMAGE = 'https://image.tmdb.org/t/p/original';

    //Variables de estado
    const [movies, setMovies] = useState([]);
    const [searchKey, setSearchKey] = useState("");
    const [trailer, setTrailer] = useState(null);
    const [movie, setMovie] = useState({title: "Loading Movies"}); 
    const [playing, setPlaying] = useState(false);

    //Funcion para hacer peticion get a la api de tmdb
    const fetchMovies = async(searchKey) =>{
        const type = searchKey ? "search" : "discover"
        const {data: { results } ,} = await axios.get(`${API_URL}/${type}/movie`, {
            params: {
                api_key: API_KEY,
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
                    <Carta id={movie.id} name={movie.title} src={`${URL_IMAGE + movie.poster_path}`} />
                ))}
            </div>
        </div>
    );
}

export default Cartelera;