import  React from 'react';

import {FiArrowRight } from 'react-icons/fi';

import LogoHappy from '../images/Logo-Happy.svg';
import Kids from '../images/kids.svg';
import '../styles/Global.css';
import '../styles/Landing.css';
import { Link } from 'react-router-dom';

function Landing(){
    return (
        <div id="landing-page">

            <div className="content-wrapper">

                <div id="leftColumn">
                    <img src={LogoHappy} alt="Happy" title="Happy"/>
                    <h1>Leve felicidade para o mundo</h1>
                    <h3>Visite orfanatos e mude o dia de muitas crianças :)</h3>
                </div>

                <div id="middleColumn">
                    <img src={Kids} alt="" title='Kids' />
                </div>

                <div id="rightColumn">
                    <strong> Quixadá</strong>
                    <span>Ceará</span>
                    <Link  to="/OrphanagesMap" id="linkToOrphanagesMap">
                        <FiArrowRight size={26} color="#FFF" />
                    </Link>

                </div>

            </div>
        </div>
    );
}

export default Landing;