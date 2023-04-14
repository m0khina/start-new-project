
import React from 'react';
import   "../Hero/Hero.scss"
import coffee from "../../../assets/img/coffe.png"
import Book from "./../../../assets/img/logo.svg"

const Hero = () => {
    return (
        <div id="heroOur">
            <div className="container">
                <div className="hero">
                    <img src={Book} alt="" className="hero--book1"/>
                    <img src={Book} alt="" className="hero--book2"/>
                    <img src={Book} alt="" className="hero--book3"/>
                    <div className="hero--block">
                        <div className="hero--block__title">
                            <h1>Наши курсы</h1>
                            <p className="hero--block__title--info">Получайте новые знания, навыки и возможности для эффективной жизни.</p>
                            <div className="hero--block__title--btns">
                                <button className="hero--block__title--btns__b1">Подобрать пакет</button>
                                <button className="hero--block__title--btns__b2">Войти</button>
                            </div>
                        </div>
                        <img src={coffee} alt=""/>
                    </div>
                </div>
                <img src={Book} alt="" className="hero--book4"/>
            </div>

        </div>
    );
};

export default Hero;


// <div className="hero">
//     <div className="hero--coffee">
//         <div className="hero--coffee__cup">
//             <h1>Наши курсы</h1>
//             <p>Получайте новые знания, навыки и возможности для эффективной жизни.
//             </p>
//             <div className="hero--coffee__cup--btn">
//                 <Link className="hero--coffee__cup--btn__link" to={"/learn-more"}>
//                     <button className="hero--coffee__cup--btn__link--left">Подобрать пакет</button>
//
//                 </Link>
//                 <Link className="hero--coffee__cup--btn__link2">
//                     <button className="hero--coffee__cup--btn__link2--right">Войти</button>
//
//                 </Link>
//             </div>
//         </div>
//         <img src={coffee} alt="img"/>
//     </div>
//     <div className="hero--book">
//         <img src={bottom} className="hero--book__bottom" alt="img"/>
//
//         <img src={last} className="hero--book__last" alt="img"/>
//         <img src={left} className="hero--book__left" alt="img"/>
//         <div>
//
//         </div>
//         <img src={insiade} className="hero--book__insaide" alt="img"/>
{/*    </div>*/}
{/*</div>*/}