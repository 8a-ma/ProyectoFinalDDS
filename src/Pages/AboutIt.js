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
                        <p className='text-white h5'>Cinemagic, tu oasis cinematográfico único en Santiago. Desde nuestro inicio en 1993, hemos revolucionado la experiencia del cine en la capital chilena. Estratégicamente ubicados, ofrecemos proyección 100% digital de última generación en nuestras salas, garantizando funciones en ultra alta definición. Somos el referente cinematográfico de la ciudad, comprometidos con la diversidad de películas y servicios para todos los amantes del séptimo arte. ¡Bienvenidos a Cinemagic, donde la magia del cine cobra vida en la única sede de Santiago!</p>
                    </div>
                </div>
                <div className='row align-items-center mt-2'>
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
            <Footer />
        </div>
    );
}

export default AboutIt;