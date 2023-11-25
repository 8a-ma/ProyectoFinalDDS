import Header from '../components/Header';
import Navbarsin from '../components/Navbarsin';
import Footer from '../components/Footer';
import ResumenCompra from '../components/ResumenCompra';
import Asientos from '../components/Asientos';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import * as API from '../const.js';
import React, { useEffect, useState } from "react";


function Carritop3(){
    const locationState = useLocation();
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

export default Carritop3;
