import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

function Asientos() {
    // ...tu código existente...
    const navigate = useNavigate();

    const [asientos, setAsientos] = useState([]);
    const location = useLocation();
    const { pelicula, poster, entradasAdulto, entradasNino, hora } = location.state;
    const titulo = pelicula;
    

    const handleAsientoClick = (fila, columna) => {
        const asientoSeleccionado = `${fila}${columna}`;
        if (asientos.includes(asientoSeleccionado)) {
            setAsientos(asientos.filter(asiento => asiento !== asientoSeleccionado));
        } else {
            if (asientos.length < (entradasAdulto + entradasNino)/10) {
                setAsientos([...asientos, asientoSeleccionado]);
            }
        }
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (asientos.length === (entradasAdulto + entradasNino)/10) {
            navigate('/carritop3', { state: { titulo, poster, entradasAdulto, entradasNino, hora, asientos } });
        }
    };
    


    return (
        <div className="container text-fluid text-start mt-3 bg-highlight rounded">
            <div className="my-2 p-3">
                <div>
                    <p className='h3 text-white'>Seleccione sus asientos</p>
                </div>

                <div className="d-flex justify-content-center">
                    {Array.from({ length: 13 }, (_, i) => String.fromCharCode(65 + i)).map((fila) => (
                        <div key={fila}>
                            {Array.from({ length: 10 }, (_, i) => i + 1).map((columna) => (
                                <button
                                    type="button"
                                    key={`${fila}${columna}`}
                                    style={{ backgroundColor: asientos.includes(`${fila}${columna}`) ? 'red' : 'white', width: '42px' }}
                                    onClick={() => handleAsientoClick(fila, columna)}
                                >
                                    {`${fila}${columna}`}
                                </button>
                            ))}
                        </div>
                    ))}
                </div>

                <div className="mb-3">
                    <button className="btn btn-primary btn-outline-dark text-white" type="submit" onClick={handleSubmit} disabled={asientos.length !== (entradasAdulto + entradasNino)/10}>Siguiente</button>
                </div>
            </div>
        </div>
    );
}

export default Asientos;