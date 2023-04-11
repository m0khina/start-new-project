import React from 'react';
import "./CourseProgramme.scss"

const CourseProgramme = () => {
    return (
        <div id="courseInfo">
            <div className="container">
                <div className="info">
                    <div className="info--titles">
                        <div className="info--titles__line"></div>
                        <h1>В этом курсе мы рассмотрим:</h1>
                    </div>
                    <ul className="info--ul">
                        <li>Что такое команда, какие бывают виды команд, для чего и как они создаются, что объединяет людей и держит в команде.</li>
                        <li>Лидерство - это врожденное качество или его можно приобрести?</li>
                        <li>Какие есть методы повышения эффективности команды.</li>
                        <li>Почему именно работа в команде в разы увеличивает результат.</li>
                        <li>Как подбирать правильных людей в команду</li>
                        <li>Как их обучать и продвигать по карьерной лестнице.</li>
                        <li>Почему люди порой не хотят меняться и причины невыполнения подчиненными ваших поручений.</li>
                        <li>Как правильно и своевременно увольнять подчиненных </li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default CourseProgramme;