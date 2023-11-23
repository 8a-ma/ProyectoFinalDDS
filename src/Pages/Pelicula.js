import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useLocation } from 'react-router-dom';

import * as API from '../const.js';

function Pelicula() {

    const location = useLocation();
    const movie = location.state.info;

    return(
        <div>
            <Header />
            <Navbar />
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
                            <p>POR AGREGAR</p>
                        </div>
                        <div>
                            <p className='h4'>Duración</p>
                            <p>POR AGREGAR</p>
                        </div>
                        <div>
                            <p className='h4'>Género/s</p>
                            <p>POR AGREGAR</p>
                        </div>
                        <div>
                            <p className='h4'>Horarios</p>
                            <p>13:00, 15:30, 19:20, 22:00</p>
                        </div>
                        <div>
                            <p className='h4'>Trailer</p>
                            <p>POR AGREGAR</p>
                        </div>
                    </div>
                    

                </div>
                
            </div>
            
            <Footer />
        </div>
    );
}

export default Pelicula