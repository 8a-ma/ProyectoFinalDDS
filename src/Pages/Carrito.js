import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Carrito(){
    return (
        <div>
            <div>
                <Header />
                <Navbar />
            </div>
            <div>
                Carrito
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default Carrito;