import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";

const Reviews = () => {
  const [fly, setFly] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

  return (
    <div id="reviewCourse">
      <div className="container">
        <h1 className="reviewCourse--title">Отзывы</h1>
        <div className="reviewCourse">
          <div className="reviewCourse--block">
            <div className="reviewCourse--block__about">
              <div className="reviewCourse--block__about--user">B</div>
              <div className="reviewCourse--block__about--name">
                <h2>Muslim Bolot</h2>
                <h4>09.09.22</h4>
                <div className="reviewCourse--block__about--name__fly">
                  {fly.map((el) => (
                    <div
                      className="reviewCourse--block__about--name__fly__item"
                      key={el}
                    >
                      <AiFillStar className="reviewCourse--block__about--name__fly__item--icon" />
                    </div>
                  ))}
                  <span>10/10</span>
                </div>
              </div>
            </div>
            <p>
              Oрганизованность сайта направление и навигация по материалам. А
              так же актуальность материалов
            </p>
          </div>
          <div className="reviewCourse--block">
            <div className="reviewCourse--block__about">
              <div className="reviewCourse--block__about--user">C</div>
              <div className="reviewCourse--block__about--name">
                <h2>Muslim Bolot</h2>
                <h4>09.09.22</h4>
                <div className="reviewCourse--block__about--name__fly">
                  {fly.map((el) => (
                    <div
                      className="reviewCourse--block__about--name__fly__item"
                      key={el}
                    >
                      <AiFillStar className="reviewCourse--block__about--name__fly__item--icon" />
                    </div>
                  ))}
                  <span>10/10</span>
                </div>
              </div>
            </div>
            <p>
              Oрганизованность сайта направление и навигация по материалам. А
              так же актуальность материалов
            </p>
          </div>
          <div className="reviewCourse--block">
            <div className="reviewCourse--block__about">
              <div className="reviewCourse--block__about--user">M</div>
              <div className="reviewCourse--block__about--name">
                <h2>Muslim Bolot</h2>
                <h4>09.09.22</h4>
                <div className="reviewCourse--block__about--name__fly">
                  {fly.map((el) => (
                    <div
                      className="reviewCourse--block__about--name__fly__item"
                      key={el}
                    >
                      <AiFillStar className="reviewCourse--block__about--name__fly__item--icon" />
                    </div>
                  ))}
                  <span>10/10</span>
                </div>
              </div>
            </div>
            <p>
              Oрганизованность сайта направление и навигация по материалам. А
              так же актуальность материалов
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
