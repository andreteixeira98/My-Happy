import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";

import { Map, Marker, TileLayer} from 'react-leaflet';

import mapIcon from '../utils/mapIcon';

import Logo from '../images/Logo.svg';

import imageMain from '../utils/images/imageMain.png';
import image1 from '../utils/images/image1.png';
import image2 from '../utils/images/image2.png';
import image3 from '../utils/images/image3.png';
import image4 from '../utils/images/image4.png';
import image5 from '../utils/images/image5.png';

import '../styles/Global.css';
import '../styles/Orphanage.css';


function Orphanage(){
    const {goBack} = useHistory();
    return(
        <div id="page-orphanage">
           <div className="container">
            <aside>
                    <img src={Logo} alt="Happy"/>

                    <a href="#" onClick={goBack}>
                        <FiArrowLeft size={32} color="#FFF" />
                    </a>
                </aside>

            <div id="orphanage-details">
                <img src={imageMain} alt="" id="image-main"/>
                <div className="images-orphanage">
                <img src={image1} alt="" />
                <img src={image2} alt="" />
                <img src={image3} alt="" />
                <img src={image4} alt="" />
                <img src={image5} alt="" />
                </div>

                <h1 id="name-orphanage">Nome do Orfanato </h1>
                <p id="about-orphanage"> sobre o orfanato texto com insformações sobre o orfanato. 
                        mljwsljfjoasjfahjAJOKKDSFLKJLKJJLKAKALKSAK</p>
                <div id="map-container">
                    <Map 
                        
                        center={[-4.9715909,-39.0248505]} 
                        zoom={16} 
                        style={{ width: '100%', height: 280 }}
                        dragging={false}
                        touchZoom={false}
                        zoomControl={false}
                        scrollWheelZoom={false}
                        doubleClickZoom={false}
                >
                    <TileLayer url="https://a.tile.openstreetmap.org/{z}/{x}/{y}.png" className="tileLayer-map" />
                    <Marker interactive={false} icon={mapIcon} position={[-4.9715909,-39.0248505]} />
                </Map>

                    <label htmlFor="" id="link-to-google-maps">
                        <a href="#"> Link para google maps</a>
                    </label>
                </div>

                <hr/>

                <div id="instructions-orphanage">
                    <h3 >Instruções para visita</h3>
                    <p>as instruções de visita</p>
                </div>
                <div>
                    Horario de visita
                </div>

                <div>
                    funcionamento nos fins de semana
                </div>

                <label htmlFor="">Entrar em Contato</label>

            </div>
           </div>
        </div>

    );
}

export default Orphanage;