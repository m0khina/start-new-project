import React from 'react';
import "./HeroTeam.scss"
import Book from "./../../../assets/img/logo.svg"

const HeroTeam = () => {
    return (
        <div id="heroTeam">
            <div className="container">
                <div className="hero">
                    <img src={Book} alt="" className="hero--bgBook"/>
                    <p className="hero--pTitle">Наши курсы / Курсы по созданию команды</p>
                    <div className="hero--titles">
                        <img src={Book} alt="" className="hero--titles__book1"/>
                        <div className="hero--titles__greatTeam">
                            <h1>Создание команды</h1>
                            <p>Как правильно строить команду и эффективно ею управлять, чтобы достигать все поставленные цели.</p>
                        </div>
                        <div className="hero--titles__insayt">
                            <h3>В курс входит</h3>
                            <p>43 материала</p>
                            <p>100% эксклюзив</p>
                        </div>
                    </div>
                    <button className="hero--btn">Получить доступ за 500,00 $</button>
                </div>
            </div>
        </div>
    );
};

export default HeroTeam;