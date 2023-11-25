import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';



function Compra({ movies }) {
    // ...tu código existente...
    const navigate = useNavigate();

    const location = useLocation();
    let selectedMovie;
    if (location.state) {
        selectedMovie = location.state.selectedMovie;
    } else {
        selectedMovie = null; // o cualquier valor por defecto que quieras asignar
    }
    const [pelicula, setPelicula] = useState(selectedMovie ? selectedMovie.title : "");

    const [hora, setHora] = useState('');
    const [entradasAdulto, setEntradasAdulto] = useState(0);
    const [entradasNino, setEntradasNino] = useState(0);
    const [poster, setPoster] = useState(selectedMovie ? selectedMovie.poster_path : "");

    
    const horarios = ['13:00', '15:30', '19:20', '22:00']; // Reemplaza esto con tus horarios

    const handleSubmit = (event) => {
        event.preventDefault();
        if (pelicula && hora && Number(entradasAdulto) + Number(entradasNino) >= 1 || Number(entradasAdulto) + Number(entradasNino) <= 4*12)  {
            const selectedMovie = movies.find(movie => movie.title === pelicula);
            const poster = selectedMovie.poster_path;
            navigate('/carritop2', { state: { pelicula, poster, entradasAdulto, entradasNino, hora } });

        }
    };
    
    


    return (
        <div className="container text-fluid text-start mt-3 bg-highlight rounded">
            <div className="my-2 p-3">
                <div className="mb-3">
                    <label htmlFor="pelicula" className="form-label text-white">Selecciona una película</label>
                    <select id="pelicula" value={pelicula} onChange={(e) => setPelicula(e.target.value)} className="form-control">
                        <option value="">Selecciona una película</option>
                        {movies.map((movie, index) => (
                            <option key={index} value={movie.title}>{movie.title}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="hora" className="form-label text-white">Selecciona un horario</label>
                    <select id="hora" value={hora} onChange={(e) => setHora(e.target.value)} className="form-control">
                        <option value="">Selecciona un horario</option>
                        {horarios.map((hora, index) => (
                            <option key={index} value={hora}>{hora}</option>
                        ))}
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="entradasAdulto" className="form-label text-white">Entradas de adulto</label>
                    <input type="number" id="entradasAdulto" value={entradasAdulto} onChange={(e) => setEntradasAdulto(e.target.value)} placeholder="Entradas de adulto" className="form-control" />
                </div>

                <div className="mb-3">
                    <label htmlFor="entradasNino" className="form-label text-white">Entradas de niños/adulto mayor</label>
                    <input type="number" id="entradasNino" value={entradasNino} onChange={(e) => setEntradasNino(e.target.value)} placeholder="Entradas de niños/adulto mayor" className="form-control" />
                </div>

                <div className="mb-3">
                    <button className="btn btn-primary btn-outline-dark text-white" type="submit" onClick={handleSubmit} disabled={!pelicula || !hora || (Number(entradasAdulto) + Number(entradasNino) < 1) || (Number(entradasAdulto) + Number(entradasNino) > 4*12)}>Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default Compra;