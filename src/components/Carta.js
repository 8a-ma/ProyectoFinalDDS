function Carta(props) {
    return (
        <div className="card">
            <img src={props.src} className="card-img-top w-50" alt='...' />
            <div className="card-body">
                <p className="card-text"> {props.name} </p>
            </div>
        </div>
    );
}

export default Carta;