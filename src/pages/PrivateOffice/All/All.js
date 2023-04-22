import React from 'react';

const All = () => {
    return (
        <div>
            <div id="all">
                <div className="container">
                    <div className="all">
                        <div className="all--common">
                            <h1>Общие</h1>
                            <p>Управляйте данными учетной записи, которые вы предоставили Self Developing school, включая ваше имя, контактные данные и прочую информацию</p>
                        </div>
                        <h1>Личные данные</h1>
                        <div className="all--per">
                            <div className="all--per__name">
                                <p>ФИО</p>
                                <input type="text" placeholder="Muslim Bolot Joodarovich"/>
                            </div>
                            <div className="all--per__email">
                                <p>Електронная почта</p>
                                <input type="email" placeholder="Muslim.Bolotoffical@gmail.com"/>
                            </div>
                            <div className="all--per__number">
                                <p>Номер телефона</p>
                                <input type="number" placeholder="+996 770 55 74 47"/>
                            </div>
                        </div>
                        <div className="all--save">
                            <button className="all--save__one">Сбросить изменения</button>
                            <button className="all--save__two">Сохранить изменения</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default All;