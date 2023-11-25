function ResumenCompra() {
    return (
        <div class="container p-5">
        <div class="row align-items-start mt-3">
            <div class="col">
                <img src="https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@.V1.jpg" alt="" class="rounded mx-auto px-auto my-auto pt-5 w-75"></img>
                </div>
                    <div class="col border border-info p-2 bg-highlight text-white mx-auto">
                        <p class="h3">Resumen de compra</p>
                        <img src="" alt=""></img>
                        <p>Pelicula: Interestelar </p>
                        <p>Lugar: San javier 1942, Santiago</p>
                        <p>Fecha: 13 de Noviembre</p>
                        <p>Función: 19:20</p>
                        <p>Boletos: 1 adulto, 2 niños</p>
                        <p>Asientos: A2, A3, A4</p>
                        <p class="h4">Total: $13000</p>
                        <button type="button" class="btn btn-success btn-lg">Comprar</button>
                    </div>
                </div>
            </div>
    );
}

export default ResumenCompra;