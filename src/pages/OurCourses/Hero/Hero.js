
import React from 'react';
import   "../Hero/Hero.scss"
import coffee from "../../../assets/img/coffe.png"
import last from "../../../assets/img/last.png"
import left from "../../../assets/img/left.png"
import bottom from "../../../assets/img/bottom.png"
import  insiade from "../../../assets/img/insaide.png"
import {Link} from "react-router-dom";


const Hero = () => {
    return (
        <div id="hero">
            <div className="container">
                <div className="hero">
                    <div className="hero--coffee">
                        <div className="hero--coffee__cup"
                        >
                            <h1>Наши курсы</h1>
                            <p>Получайте новые знания, навыки и возможности для эффективной жизни.
                            </p>
                            <div className="hero--coffee__cup--btn">
                                <Link className="hero--coffee__cup--btn__link" to={"/learn-more"}>
                                    <button className="hero--coffee__cup--btn__link--left">Подобрать пакет</button>

                                </Link>
                                <Link className="hero--coffee__cup--btn__link2">
                                    <button className="hero--coffee__cup--btn__link2--right">Войти</button>

                                </Link>
                            </div>
                        </div>

                        <img src={coffee} alt="img"/>

                    </div>
                     <div className="hero--book">
                         <img src={bottom} className="hero--book__bottom" alt="img"/>

                         <img src={last} className="hero--book__last" alt="img"/>
                         <img src={left} className="hero--book__left" alt="img"/>
                         <div>

                         </div>
                         <img src={insiade} className="hero--book__insaide" alt="img"/>
                     </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;