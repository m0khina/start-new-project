import React from 'react';
import "./Courses.scss"
import Book from "../../../assets/img/logo.svg";
import MK from "../../../assets/img/master-klass-img.png";
import {NavLink} from "react-router-dom";

const Courses = () => {
    return (
        <div>
            <div id="courses">
                <div className="container">
                    <div className="courses">
                        <h2 className="courses--title">Курсы</h2>
                        <div className="courses--cards">
                            <div className="courses--card">
                                <h3>Создание команды</h3>
                                <div className="courses--card__info">
                                    <h4>Обучение</h4>
                                    <div className="courses--card__info--btn">
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={MK} alt="" className="courses--card__imgCourse"/>
                                <a href="">Подробнее...</a>
                            </div>
                            <div className="courses--card">
                                <h3>Создание команды</h3>
                                <div className="courses--card__info">
                                    <h4>Обучение</h4>
                                    <div className="courses--card__info--btn">
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <img src={MK} alt="" className="courses--card__imgCourse"/>
                                <a href="">Подробнее...</a>
                            </div>
                            <div className="courses--card">
                            <h3>Создание команды</h3>
                            <div className="courses--card__info">
                                <h4>Обучение</h4>
                                <div className="courses--card__info--btn">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <img src={MK} alt="" className="courses--card__imgCourse"/>
                            <a href="">Подробнее...</a>
                        </div>
                        </div>
                        <img src={Book} alt="" className="courses--book"/>
                        <center>
                            <NavLink to={"/team-building"}>
                                <button className="courses--btnMain">Смотреть все курсы</button>
                            </NavLink>
                        </center>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default Courses;