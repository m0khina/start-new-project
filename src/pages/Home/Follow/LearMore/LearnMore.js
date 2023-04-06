import React, { useEffect, useState } from 'react';
import { BsCheckLg } from "react-icons/bs"
import "./LearnMore.scss"
import { BsCheck2 } from "react-icons/bs"
import { MdClose } from "react-icons/md"
import { click } from "@testing-library/user-event/dist/click";

const LearnMore = () => {
    const [active1, setActive1] = useState(false)
    const [active2, setActive2] = useState(true)

    const getActive1 = () => {
        setActive1(!active1)
        setActive2(true)
    }
    const getActive2 = () => {
        setActive2(!active2)
        setActive1(false)
    }


    return (
        <div id="learnMore">
            <div className="container">
                <div className="learnMore">
                    <p className="learnMore--p">Пакеты / Подробнее о пакетах</p>
                    <h1 className="learnMore--titleh1">ВЫБЕРИТЕ СВОЙ ПАКЕТ УЧАСТИЯ</h1>
                    <p className="learnMore--titleP">Присоединяйтесь к нам и начните свой путь к успеху.</p>
                    <div className="learnMore--cards">
                        <div style={{
                            transform: active1 ? "scale(1.1)" : "",
                            border: " 1.2px solid rgba(223, 172, 77, 0.6);"

                        }} className="learnMore--cards__card1"
                            onClick={getActive1}>
                            <h1>Обычный</h1>
                            <div className="learnMore--cards__card1--inputMonth">
                                <input type="radio" id="radioMonth" />
                                <label htmlFor="radioMonth">Ежемесячно</label>
                            </div>
                            <div className="learnMore--cards__card1--inputYear">
                                <input type="radio" id="radioYear" />
                                <label htmlFor="radioYear">Ежегодно</label>
                            </div>
                            <div className="learnMore--cards__card1--icons" >
                                <h2><BsCheckLg /></h2>
                                <p>Все новые статьи</p>
                            </div>
                            <div className="learnMore--cards__card1--icons">
                                <h2><BsCheckLg /></h2>
                                <p>Все мастер классы по саморозвитию</p>
                            </div>
                            <h2 className="learnMore--cards__card1--prace">Цена: <b>225$</b> </h2>
                            <button className="learnMore--cards__card1--btnFollow">Подписаться</button>
                        </div>
                        <div style={{
                            transform: active2 ? "" : "scale(1.1)"
                        }}
                            className="learnMore--cards__card1"
                            onClick={getActive2}>
                            <div className="learnMore--cards__card1">
                                <h1>Интенсив</h1>
                                <div className="learnMore--cards__card1--inputMonth">
                                    <input type="radio" id="radioMonth" />
                                    <label htmlFor="radioMonth">Ежемесячно</label>
                                </div>
                                <div className="learnMore--cards__card1--inputYear">
                                    <input type="radio" id="radioYear" />
                                    <label htmlFor="radioYear">Ежегодно</label>
                                </div>
                                <div className="learnMore--cards__card1--icons" >
                                    <h2> <BsCheckLg /></h2>
                                    <p>Все новые статьи</p>
                                </div>
                                <div className="learnMore--cards__card1--icons">
                                    <h2><BsCheckLg /></h2>
                                    <p>Все мастер классы по саморозвитию</p>
                                </div>
                                <div className="learnMore--cards__card1--icons">
                                    <h2><BsCheckLg /></h2>
                                    <p>Курс по чтению языка тела</p>
                                </div>
                                <div className="learnMore--cards__card1--icons">
                                    <h2><BsCheckLg /></h2>
                                    <p>Курс по накоплению средств с выполотой долгов</p>
                                </div>
                                <div className="learnMore--cards__card1--icons">
                                    <h2><BsCheckLg /></h2>
                                    <p>Курс по быстрому карьерному росту</p>
                                </div>
                                <div className="learnMore--cards__card1--icons">
                                    <h2><BsCheckLg /></h2>
                                    <p>Курс по одолеванию страха потери</p>
                                </div>
                                <h2 className="learnMore--cards__card1--prace2">Цена: <b>750$</b> </h2>
                                <button className="learnMore--cards__card1--btnFollow">Подписаться</button>
                            </div>

                        </div>
                        <div className="learnMore--info">
                            <p>В <b>“Обычный”</b> пакет участия для само-развития включает в себя: </p>
                            <div className="learnMore--info__fraces">
                                <div className="learnMore--info__fraces--icon" >
                                    <h2><BsCheck2 /></h2>
                                    <p>Все новые статьи</p>
                                </div>
                                <div className="learnMore--info__fraces--icon" >
                                    <h2><BsCheck2 /></h2>
                                    <p>Все мастер классы по саморозвитию</p>
                                </div>
                                <div className="learnMore--info__fraces--icon" >
                                    <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
                                    <p>Курс по чтению языка тела</p>
                                </div>
                                <div className="learnMore--info__fraces--icon" >
                                    <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
                                    <p>Курс по накоплению средств с выполотой долгов</p>
                                </div>
                                <div className="learnMore--info__fraces--icon" >
                                    <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
                                    <p>Курс по быстрому карьерному росту</p>
                                </div>
                                <div className="learnMore--info__fraces--icon" >
                                    <h2>{active2 ? <MdClose /> : <BsCheck2 />}</h2>
                                    <h2><MdClose /></h2>
                                    <p>Курс по чтению языка тела</p>
                                </div>
                                <div className="learnMore--info__fraces--icon" >
                                    <h2><MdClose /></h2>
                                    <p>Курс по накоплению средств с выполотой долгов</p>
                                </div>
                                <div className="learnMore--info__fraces--icon" >
                                    <h2><MdClose /></h2>
                                    <p>Курс по быстрому карьерному росту</p>
                                </div>
                                <div className="learnMore--info__fraces--icon" >
                                    <h2><MdClose /></h2>
                                    <p>Курс по одолеванию страха потери</p>
                                </div>
                            </div>
                        </div>
                        <div className="learnMore--plusPackag">
                            <h3>Плюсы пакета</h3>
                            <p>Выбрав этот пакет вы получаете возможность получать неогранниченное количество самых эксклюзивных мастер классов, а также очень много наиполезнейших статей от самых разных успешных людей чтобы получать ежедневные уроки чтобы улучшить жизнь и не только</p>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default LearnMore;