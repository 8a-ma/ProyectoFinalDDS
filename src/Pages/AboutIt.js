import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

import benja from "../img/benja.jpg";
import munita from "../img/munita.jpg";
import mati from "../img/mati.jpg";



function AboutIt(){
    return (
        <div>
            <div>
                <Header />
                <Navbar />
            </div>
            <div className='container text-fluid text-center mt-3'>
                <div className='row align-items-start'>
                    <div className='col'>
                        <img src={benja} className='rounded-circle img-fluid'/>
                        <p className='h3'>Benjamín Wiedmaier</p>
                        <p>Gerente Gerenal</p>
                    </div>
                    <div className='col'>
                        <img src={munita} className='rounded-circle img-fluid'/>
                        <p className='h3'>Cristobal Munita</p>
                        <p>Producte Manager</p>
                    </div>
                    <div className='col'>
                        <img src={mati} className='rounded-circle img-fluid'/>
                        <p className='h3'>Matías Ochoa</p>
                        <p>Director de Operaciones</p>
                    </div>
                </div>
            </div>
            <div>
                <Footer />
            </div>
        </div>
    );
}

export default AboutIt;