import Header from '../components/Header';
import Navbarsin from '../components/Navbarsin';
import Footer from '../components/Footer';
import ResumenCompra from '../components/ResumenCompra';

function Carrito(){
    return (
        <div>
            <div>
                <Header />
                <Navbarsin />
            </div>
            <div>
                <ResumenCompra />
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Carrito;