import React, { useState } from "react";
import aboutBook from "./../../../assets/img/aboutBook.png";
import bookStuty from "./../../../assets/img/bookStuty.png";
import book from "./../../../assets/img/logo.svg";
import { NavLink } from "react-router-dom";
import { HeroBook } from "./../../../fakeBackEnd/FakeHomeBook/Index.js";

const Staty = () => {

  const   centerBlock = HeroBook.onlyBigBook


  console.log(centerBlock);

  return (
    <div id="books">
      <div className="container">
        <div className="books">
          <img src={book} className="books--img1" alt="" />
          <img src={book} className="books--img2" alt="" />
          <img src={book} className="books--img3" alt="" />
          <img src={book} className="books--img4" alt="" />
          <div className="books--tabs">
            {HeroBook.tabs.map((el) => (
              <div className="books--tabs__btn">{el.title}</div>
            ))}
          </div>

          <div className="books--block">
            {HeroBook.books.slice(0,3).map((el) => (
              <div className="books--block__aboutBook">
                <h2>{el.title}</h2>
                <div className="books--block__aboutBook--start">
                  <h4>{el.name}</h4>
                  {el.buttons.map((button) => (
                    <button>{button.title}</button>
                  ))}
                </div>
                <img src={el.image} alt="" />
                <div className="books--block__aboutBook--line" />
                <div className="books--block__aboutBook--end">
                  <h3>{el.user}</h3>
                  <h3>{el.date}</h3>
                </div>
              </div>
            ))}
          </div>

          <div className="books--startBlock">
            <div className="books--startBlock__firstBlock">
              {HeroBook.books.slice(0,2).map((el) => (
                <div className="books--startBlock__firstBlock--aboutBook">
                  <h2>{el.title}</h2>
                  <div className="books--startBlock__firstBlock--aboutBook__start">
                    <h4>{el.name}</h4>
                    {el.buttons.map((btn) => {
                      <button>{btn.title}</button>;
                    })}
                  </div>
                  <img src={el.image} alt="" />
                  <div className="books--startBlock__firstBlock--aboutBook__line" />
                  <div className="books--startBlock__firstBlock--aboutBook__end">
                    <h3>{el.user}</h3>
                    <h3>{el.date}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="firstBlockTrue">
              <div className="books--startBlock__centerBooks">
                {
                  <div className="books--startBlock__centerBooks--aboutBook">
                    <h2>{centerBlock.title}</h2>
                    <div className="books--startBlock__centerBooks--aboutBook__start">
                      <h4>{centerBlock.name}</h4>
                     {
                      centerBlock.buttons.map(btn => (
                        <button>{btn.title}</button>
                      ))
                     }
                    </div>
                    <img src={centerBlock.image} alt="" />
                    <img
                      src={centerBlock.imageTwo}
                      className="books--startBlock__centerBooks--aboutBook__img"
                      alt=""
                    />
                    <div className="books--startBlock__centerBooks--aboutBook__line" />
                    <div className="books--startBlock__centerBooks--aboutBook__end">
                      <h3>{centerBlock.user}</h3>
                      <h3>{centerBlock.date}</h3>
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className="books--startBlock__firstBlock">
              {HeroBook.books.slice(0,2).map((el) => (
                <div className="books--startBlock__firstBlock--aboutBook">
                  <h2>{el.title}</h2>
                  <div className="books--startBlock__firstBlock--aboutBook__start">
                    <h4>{el.name}</h4>
                    {
                      el.buttons.map(btn => {
                        <button>{btn.title}</button>
                      })
                    }
                  </div>
                  <img src={el.image} alt="" />
                  <div className="books--startBlock__firstBlock--aboutBook__line" />
                  <div className="books--startBlock__firstBlock--aboutBook__end">
                    <h3>{el.user}</h3>
                    <h3>{el.date}</h3>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="secondBlockFalse">
            <div className="books--startBlock__centerBooks">
              <div className="books--startBlock__centerBooks--aboutBook">
                <h2>{centerBlock.title}</h2>
                <div className="books--startBlock__centerBooks--aboutBook__start">
                  <h4>{centerBlock.name}</h4>
                  {
                    centerBlock.buttons.map(el => (
                      <button>{el.title}</button>
                    ))
                  }
                </div>
                <img src={centerBlock.image} alt="" />
                <img
                  src={centerBlock.imageTwo}
                  className="books--startBlock__centerBooks--aboutBook__img"
                  alt=""
                />
                <div className="books--startBlock__centerBooks--aboutBook__line" />
                <div className="books--startBlock__centerBooks--aboutBook__end">
                  <h3>{centerBlock.user}</h3>
                  <h3>{centerBlock.date}</h3>
                </div>
              </div>
            </div>
          </div>
          <NavLink to={"/books"}>
            <button className="books--btn">Показать болшье</button>
          </NavLink>
          <div className="books--"></div>
        </div>
      </div>
    </div>
  );
};

export default Staty;
