import React from 'react';
import "./AboutCourse.scss"
import Book from "./../../../assets/img/logo.svg"

const AboutCourse = () => {
    return (
        <div id="aboutCourse">
            <div className="container">
                <div className="about">
                    <h1>О КУРСЕ</h1>
                    <img src={Book} alt="" className="about--book1"/>
                    <p>Как правильно строить команду и эффективно ею управлять, чтобы достигать все поставленные цели.</p>
                    <p>И если вы хотите достичь успеха в карьере, бизнесе, своих проектах, значит, время переходить от прокачивания личной эффективности к изучению организации и работы эффективной команды.</p>
                    <p>Курс “Командообразование” поможет вам освоить и внедрить методы создания и работы таких команд, которые приносят результат, потому что достижение успеха - это командный вид спорта.</p>
                    <p>И в работе, и в жизни выдающихся результатов достигает только тот, кто умеет окружать себя выдающимися людьми. Ваши достижения будут настолько же выдающимися, насколько выдающейся будет ваша команда. А команда будет настолько же выдающейся, насколько выдающимся будет её лидер.</p>
                    <p>Команда - это самая эффективная форма организации коллективного труда. Не бывает команды без эффективности. Если то, что вы называете командой, неэффективна, то скорее всего, это не команда, а группа людей, которым чего-то не хватает для того, чтобы стать командой. Сама природа создания и функционирования команды, подразумевает ее эффективность.</p>
                    <img src={Book} alt="" className="about--book2"/>
                </div>
            </div>

        </div>
    );
};

export default AboutCourse;