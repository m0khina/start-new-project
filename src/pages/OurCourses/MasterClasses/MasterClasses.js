import React from 'react';
import "./MasterClasses.scss"
import MK from "./../../../assets/img/master-klass-img.png"
import Book from "./../../../assets/img/logo.svg"

const MasterClasses = () => {
    return (
        <div id="mk">
            <div className="container">
                <div className="mk">
                    <img src={Book} alt="" className="mk--book"/>
                    <h2 className="mk--title">Мастер классы</h2>
                    <div className="mk--cards">
                        <div className="mk--card">
                            <h3>Создание команды</h3>
                            <div className="mk--card__info">
                                <h4>Обучение</h4>
                                <div className="mk--card__info--btn">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={MK} alt="" className="mk--card__imgMk"/>
                            <a href="">Подробнее...</a>
                        </div>
                        <div className="mk--card">
                            <h3>Создание команды</h3>
                            <div className="mk--card__info">
                                <h4>Обучение</h4>
                                <div className="mk--card__info--btn">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={MK} alt="" className="mk--card__imgMk"/>
                            <a href="">Подробнее...</a>
                        </div>
                        <div className="mk--card">
                            <h3>Создание команды</h3>
                            <div className="mk--card__info">
                                <h4>Обучение</h4>
                                <div className="mk--card__info--btn">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={MK} alt="" className="mk--card__imgMk"/>
                            <a href="">Подробнее...</a>
                        </div>
                        <div className="mk--card">
                            <h3>Создание команды</h3>
                            <div className="mk--card__info">
                                <h4>Обучение</h4>
                                <div className="mk--card__info--btn">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={MK} alt="" className="mk--card__imgMk"/>
                            <a href="">Подробнее...</a>
                        </div>
                        <div className="mk--card">
                            <h3>Создание команды</h3>
                            <div className="mk--card__info">
                                <h4>Обучение</h4>
                                <div className="mk--card__info--btn">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={MK} alt="" className="mk--card__imgMk"/>
                            <a href="">Подробнее...</a>
                        </div>
                        <div className="mk--card">
                            <h3>Создание команды</h3>
                            <div className="mk--card__info">
                                <h4>Обучение</h4>
                                <div className="mk--card__info--btn">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={MK} alt="" className="mk--card__imgMk"/>
                            <a href="">Подробнее...</a>
                        </div>
                    </div>
                    <center>
                        <button className="mk--btnMain">Смотреть все мастер классы</button>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default MasterClasses;