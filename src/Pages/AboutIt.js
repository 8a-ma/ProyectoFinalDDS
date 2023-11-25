import Header from '../components/Header';
import Navbarsin from '../components/Navbarsin';
import Footer from '../components/Footer';

import benja from "../img/benja.jpg";
import munita from "../img/munita.jpg";
import mati from "../img/mati.jpg";



function AboutIt(){
    return (
        <div>
            <div>
                <Header />
                <Navbarsin />
            </div>
            <div className='container text-fluid text-center mt-3'>
                <div className='row align-items-start'>
                    <div className='col'>
                        <img src={benja} className='rounded-circle img-fluid'/>
                        <p className='h3 text-white'>Benjamín Wiedmaier</p>
                        <p className='text-white'>Gerente Gerenal</p>
                    </div>
                    <div className='col'>
                        <img src={munita} className='rounded-circle img-fluid'/>
                        <p className='h3 text-white'>Cristobal Munita</p>
                        <p className='text-white'>Producte Manager</p>
                    </div>
                    <div className='col'>
                        <img src={mati} className='rounded-circle img-fluid'/>
                        <p className='h3 text-white'>Matías Ochoa</p>
                        <p className='text-white'>Director de Operaciones</p>
                    </div>
                </div>
            </div>
            <div className='fixed-bottom'>
                <Footer />
            </div>
        </div>
    );
}

export default AboutIt;