import { useNavigate } from "react-router-dom";



function Carta(props) {
    const navigate = useNavigate()

    function handleClick(informacion) {
        navigate('/pelicula', {
            state:{
                info:informacion
            }
        });
        
    }
    return (
        <div key={props.id} className="col-5">
            <img src={props.src} className="img-fluid w-75" alt='...' onClick={() => handleClick(props.movie)}/>
            <p className="text-center text-white"> {props.title} </p>
        </div>
    );
}

export default Carta;