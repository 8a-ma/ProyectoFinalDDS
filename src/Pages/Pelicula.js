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
                        <img src={`${API.URL_IMAGE + movie.poster_path}`} className='w-25' />
                    </div>
                    <div className='col'>
                        <div>Sinopsis</div>
                        <div>Ranking IMDB</div>
                        <div>Elenco</div>
                        <div>Duración</div>
                        <div>Género</div>
                        <div>Horario</div>
                        <div>Trailer</div>
                    </div>
                    

                </div>
                
            </div>
            
            <Footer />
        </div>
    );
}

export default Pelicula