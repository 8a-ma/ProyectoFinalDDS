function Formulario(){
    return (
        <div class="container text-fluid text-start mt-3 bg-highlight rounded">
            <div class="my-2 p-3">
                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Nombre Completo</label>
                    <input type="nombre" class="form-control" id="exampleFormControlInpu12" placeholder="nombre completo"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlInput2" class="form-label text-white">Mail</label>
                    <input type="mail" class="form-control" id="exampleFormControlInput2" placeholder="nombre@example.com"></input>
                </div>
                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label text-white">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="mb-3">
                    <button class="btn btn-primary btn-outline-dark text-white" type="submit">Enviar</button>
                </div>
            </div>
        </div>
    );
}
export default Formulario;