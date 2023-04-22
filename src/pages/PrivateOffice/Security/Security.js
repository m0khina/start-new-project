import React from 'react';


const Security = () => {
    return (
        <div id="security">
            <div className="container">
                <div className="security">
                    <div className="security--hero">
                        <h1>Пароли и безопасность</h1>
                        <p>Если вы думаете что кто то узнал ваш пароль то его можно изменить здесь.</p>
                    </div>
                    <div className="security--block">
                        <div className="security--block__inputs">
                            <div className="security--block__inputs--one">
                                <p>Текущий пароль</p>
                                <input type="password" placeholder="123456789"/>
                            </div>
                            <div className="security--block__inputs--two">
                                <p>Новый пароль</p>
                                <input type="password" placeholder="5674382"/>
                            </div>
                            <div className="security--block__inputs--three">
                                <p>Повторите пароль</p>
                                <input type="password" placeholder="5674382"/>
                            </div>
                            <div className="security--block__inputs--btn">
                                <button onClick="">Сохранить изменение</button>
                            </div>
                        </div>
                        <div className="security--block__text">
                            <h6>Пароль</h6>
                            <p>Новый пароль должен отличаться от 5 последних использованных паролей</p>
                            <p>В пароле должно быть как минимум 7 символов.</p>
                            <p>В пароле должна быть как минимум 1 цифра.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Security;