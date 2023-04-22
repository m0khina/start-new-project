import React from 'react';

const Operations = () => {
    return (
        <div id="operation">
            <div className="container">
                <div className="operation">
                    <div className="operation--hero">
                        <h1>История покупок</h1>
                        <p>Реквизиты и детали платежей, произведенных с вашего счета.</p>
                    </div>
                    <div className="operation--all">
                        <div className="operation--all__left">
                            <div className="operation--all__left--data">
                                <h6>Дата</h6>
                                <h6>05.09.22</h6>
                            </div>
                            <div className="operation--all__left--text">
                                <h6>Описание</h6>
                                <h6>Пакет участия “Интенсив”</h6>
                            </div>
                        </div>
                        <div className="operation--all__right">
                            <div className="operation--all__right--price">
                                <h6>Цена</h6>
                                <h6>500$</h6>
                            </div>
                            <div className="operation--all__right--status">
                                <h6>Статус</h6>
                                <h6>Приобретено</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Operations;