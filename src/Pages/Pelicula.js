import Header from '../components/Header';
import Navbarsin from '../components/Navbarsin';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

import * as API from '../const.js';
import React, { useEffect, useState } from "react";
import axios from "axios";

function Pelicula() {

    const location = useLocation();
    const movie = location.state.info;
    const [genres, setGenres] = useState([]);
    const [trailer, setTrailer] = useState("");
    const [runtime, setRuntime] = useState(0); // Agrega esta línea


    useEffect(() => {
        const fetchMovieDetails = async () => {
            const { data: movieData } = await axios.get(`${API.API_URL}/movie/${movie.id}`, {
                params: {
                    api_key: API.API_KEY,
                },
            });
    
            setGenres(movieData.genres.map(genre => genre.name));
            setRuntime(movieData.runtime); // Agrega esta línea
    
            const { data: { results: videos } } = await axios.get(`${API.API_URL}/movie/${movie.id}/videos`, {
                params: {
                    api_key: API.API_KEY,
                },
            });
    
            const trailerVideo = videos.find(video => video.type === 'Trailer');
    
            if (trailerVideo) {
                setTrailer(trailerVideo.key);
            }
        };
    
        fetchMovieDetails();
    }, [movie.id]);
    
    

    return(
        <div>
            <Header />
            <Navbarsin />
            <div className='container mt-3 bg-highlight rounded p-5'>
                <div className='my-2 row'>
                    <div className='col text-center'>
                        <p className='h1 text-white fw-light'>{movie.title}</p>
                        <img src={`${API.URL_IMAGE + movie.poster_path}`} className='w-50' />
                    </div>
                    <div className='col text-white fw-light'>
                        <div>
                            <p className="h4">Sinopsis</p>
                            <p>{movie.overview}</p>
                        </div>
                        <div>
                            <p className="h4">Ranking IMDB</p>
                            <p>{movie.vote_average}</p>
                        </div>
                        <div>
                            <p className='h4'>Elenco</p>
                            <p>{movie.cast.slice(0, 3).map(actor => actor.name).join(', ')}</p>
                        </div>
                        <div>
                            <p className='h4'>Duración</p>
                            <p>{runtime} minutos</p>
                        </div>
                        <div>
                            <p className='h4'>Género/s</p>
                            <p>{genres.join(', ')}</p>
                        </div>
                        <div>
                            <p className='h4'>Horarios</p>
                            <p>13:00, 15:30, 19:20, 22:00</p>
                        </div>
                        <div>
                            <p className='h4'>Trailer</p>
                            <p>{trailer && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer}`} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>}</p>
                        </div>
                    </div>
                    

                </div>
                
            </div>
            
            <Footer />
        </div>
    );
}

export default Pelicula;