import React from 'react';

import {Map, Marker, Popup, TileLayer} from 'react-leaflet';

import {FiArrowLeft, FiArrowRight, FiPlus} from 'react-icons/fi';

import LogoHappy from '../images/Logo-Happy.svg';
import mapIcon from '../utils/mapIcon';
import '../styles/Global.css';
import '../styles/OrphanagesMap.css';

import 'leaflet/dist/leaflet.css';
import { Link, useHistory } from 'react-router-dom';


function OrphanagesMap(){

    const {goBack} = useHistory();
    return(
        <div id="Page-OrphanagesMap">
            <aside>
                <header>
                    <img src={LogoHappy} alt="" title="Happy"/>
                    <h2>Escolha um orfanato no mapa</h2>
                    <h3>Muitas crianças estão esperando a sua visita :)</h3>
                </header>
                

                <footer>
                   {/** <strong>Quixadá</strong>
                    <span>Ceará</span> */}
                    < Link to="#" onClick={goBack}>
                        <FiArrowLeft size={32} color="#FFF" />
                    </Link>
                </footer>

            </aside>

            <Map
                center={[-4.9715909,-39.0248505]}
                zoom={15}
                style={{width: '100%', height: '100%'}}
                >

                <TileLayer url = "https://a.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
                <Marker
                    
                    icon={mapIcon}
                    position={[-4.9715909,-39.0248505]}
                >

                    <Popup closeButton={false} minWidth={240} maxWidth={240} className='map-popup'>
                    <label>Orfanato felicidade</label>
                    <Link to= {`/orphanages/`}> 
                        <FiArrowRight  size={20} color="#FFF"/>
                    </Link>
                </Popup>
                </Marker>
                
            </Map>
            
            <Link to="/createOrphanage" id="create-orphanage">
                <FiPlus  size={26} color="#FFF"/>
            </Link>

        </div>
    );
}

export default OrphanagesMap;