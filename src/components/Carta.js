function Carta(props) {
    return (
        <div key={props.id} className="col-5">
            <img src={props.src} className="img-fluid w-75" alt='...' />
            <p className="text-center"> {props.name} </p>
        </div>
    );
}

export default Carta;