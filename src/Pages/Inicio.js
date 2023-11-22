import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Cartelera from '../components/Cartelera';
import Footer from '../components/Footer';

function Inicio(){
    return (
        <div>
            <Header />
            <Navbar />
            <Cartelera />
            <Footer />
        </div>
    );
}

export default Inicio;