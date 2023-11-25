import Header from '../components/Header';
import Navbarsin from '../components/Navbarsin';
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';

function Contacto(){
    return (
        <div>
            <div>
                <Header />
                <Navbarsin />
            </div>
            <div>
                <Formulario />
            </div>
            <div className='fixed-bottom'>
                <Footer />
            </div>
        </div>
    );
}

export default Contacto;