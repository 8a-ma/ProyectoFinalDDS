import Carta from "./Carta";

function Cartelera(){
    return (
        <div className="container text-center p-1">
            <div className="row align-item-center grid p-1">
                <div className="col">
                    <Carta name="1" src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg" />
                </div>
                <div className="col">
                    <Carta name="2" />
                </div>
            </div>
            <div className="row align-item-center grid p-1">
                <div className="col">
                    <Carta name="3" />
                </div>
                <div className="col">
                    <Carta name="4" />
                </div>
            </div>
            <div className="row align-item-center grid p-1">
                <div className="col">
                    <Carta name="5" />
                </div>
                <div className="col">
                    <Carta name="6" />
                </div>
            </div>
            <div className="row align-item-center grid p-1">
                <div className="col">
                    <Carta name="7" />
                </div>
                <div className="col">
                    <Carta name="8" />
                </div>
            </div>
            <div className="row align-item-center grid p-1">
                <div className="col">
                    <Carta name="9" />
                </div>
                <div className="col">
                    <Carta name="10" />
                </div>
            </div>
        </div>
        
    );
}

export default Cartelera;