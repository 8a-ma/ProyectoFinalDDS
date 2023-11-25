import Swal from "sweetalert2";

function Formulario(){
    const mostrarAlerta = () => {
        Swal.fire({
          title: "¡Listo!",
          text: "El mensaje ha sido enviado",
          icon: "success",
          confirmButtonText: "Aceptar"
        })
      }

    const validarEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    }

    const EnviarFormulario = () => {
        const name = document.getElementById("exampleFormControlInpu12").value;
        const mail = document.getElementById("exampleFormControlInput2");
        const text = document.getElementById("exampleFormControlTextarea1").value;

        if (name && validarEmail(mail.value) && text ){
            mostrarAlerta();
        }
        
    }
      
    return (
        <div className="container text-fluid text-start mt-3 bg-highlight rounded">
            <div className="my-2 p-3">
                <div className="mb-3">
                    <label for="exampleFormControlInput1" class="form-label text-white">Nombre Completo</label>
                    <input type="nombre" class="form-control" id="exampleFormControlInpu12" placeholder="nombre completo"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlInput2" class="form-label text-white">Mail</label>
                    <input type="email" class="form-control" id="exampleFormControlInput2" placeholder="nombre@example.com"></input>
                </div>
                <div className="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label text-white">Mensaje</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div className="mb-3">
                    <button class="btn btn-primary btn-outline-dark text-white" type="submit" onClick={(e) => { e.preventDefault(); EnviarFormulario(); }}>Enviar</button>
                </div>
            </div>
        </div>
    );
}
export default Formulario;