import { useNavigate } from "react-router-dom";


function Carta(props) {
    const navigate = useNavigate()

    function handleClick() {
        navigate('/pelicula');
        
    }
    return (
        <div key={props.id} className="col-5">
            <img src={props.src} className="img-fluid w-75" alt='...' onClick={handleClick}/>
            <p className="text-center"> {props.name} </p>
        </div>
    );
}

export default Carta;