import React from "react";
import "./Reviews.scss";
import Slider from "react-slick";
import SliderIcon1 from "./../../../assets/img/slider-icon.png";
import SliderIcon2 from "./../../../assets/img/slider-icon2.png";

const Reviews = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    nextArrow: <img src={SliderIcon2} />,
    prevArrow: <img src={SliderIcon1} />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="review">
      <div className="container">
        <h2 className="review--title">Отзывы</h2>
        <Slider {...settings}>
          <div className="review--cards">
            <div className="review--cards__card1">
              <p>
                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                любого <br /> бизнесмена!У меня есть шанс научиться на твоих
                ошибках.Этот опыт <br /> бесценен!
                <a href=""> Смотреть полностью</a>
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
              <p>
                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                любого <br /> бизнесмена!У меня есть шанс научиться на твоих
                ошибках.Этот опыт <br /> бесценен!
                <a href=""> Смотреть полностью</a>
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
              <p>
                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                любого <br /> бизнесмена!У меня есть шанс научиться на твоих
                ошибках.Этот опыт <br /> бесценен!
                <a href=""> Смотреть полностью</a>
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
              <p>
                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                любого <br /> бизнесмена!У меня есть шанс научиться на твоих
                ошибках.Этот опыт <br /> бесценен!
                <a href=""> Смотреть полностью</a>
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
              <p>
                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                любого <br /> бизнесмена!У меня есть шанс научиться на твоих
                ошибках.Этот опыт <br /> бесценен!
                <a href=""> Смотреть полностью</a>
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
              <p>
                Твой опыт бесценен!Ты бьешь в самое сердце и в этом твой успех,
                любого <br /> бизнесмена!У меня есть шанс научиться на твоих
                ошибках.Этот опыт <br /> бесценен!
                <a href=""> Смотреть полностью</a>
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
