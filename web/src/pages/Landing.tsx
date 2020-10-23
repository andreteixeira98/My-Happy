import  React from 'react';
import LogoHappy from '../images/Logo-Happy.svg';
import Kids from '../images/kids.svg';
import '../styles/Global.css';
import '../styles/Landing.css';

function Landing(){
    return (
        <div id="Landing-Page">

            <div className="content-wrapper">

                <div id="LeftColumn">
                    <img src={LogoHappy} alt="Happy" title="Happy"/>

  
                        <h1>Leve felicidade para o mundo.</h1>

                        <h3>Visite orfanatos e mude o dia de muitas crianças.</h3>

                </div>
                
                <img src={Kids} alt="" title='Kids' id="" />

                <div id="location">
                    <strong> Quixadá</strong>
                    <span>Ceará</span>

                </div>

            </div>
        </div>
    );
}

export default Landing;