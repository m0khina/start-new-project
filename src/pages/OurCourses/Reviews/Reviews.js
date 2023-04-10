import React from 'react';
import "./Reviews.scss"
import Slider from "react-slick"
import SliderIcon1 from "./../../../assets/img/slider-icon.png"
import SliderIcon2 from "./../../../assets/img/slider-icon2.png"


const Reviews = () => {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "60px",
        slidesToShow: 1,
        speed: 500,
        nextArrow: <img src={SliderIcon2}/>,
        prevArrow: <img src={SliderIcon1}/>
    };

    return (
        <div className="review">
            <div className="container">
                <h2 className="review--title">Отзывы</h2>
                <Slider {... settings}>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого <br/> бизнесмена!У меня есть шанс научиться на твоих ошибках.Этот опыт <br/> бесценен!
                                <a href="">  Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>
                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого <br/> бизнесмена!У меня есть шанс научиться на твоих ошибках.Этот опыт <br/> бесценен!
                                <a href="">  Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>


                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого <br/> бизнесмена!У меня есть шанс научиться на твоих ошибках.Этот опыт <br/> бесценен!
                                <a href="">  Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>


                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого <br/> бизнесмена!У меня есть шанс научиться на твоих ошибках.Этот опыт <br/> бесценен!
                                <a href="">  Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>


                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого <br/> бизнесмена!У меня есть шанс научиться на твоих ошибках.Этот опыт <br/> бесценен!
                                <a href="">  Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>


                    </div>
                    <div className="review--cards">
                        <div className="review--cards__card1">
                            <p>Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех, любого <br/> бизнесмена!У меня есть шанс научиться на твоих ошибках.Этот опыт <br/> бесценен!
                                <a href="">  Смотреть полностью</a>
                            </p>
                            <div className="review--cards__card1--info">
                                <h2>Muslim Bolot</h2>
                                <div className="review--cards__card1--info__line"></div>
                                <h2>Предпрениматель</h2>
                            </div>
                        </div>


                    </div>
                </Slider>
            </div>
        </div>

    );
};

export default Reviews;