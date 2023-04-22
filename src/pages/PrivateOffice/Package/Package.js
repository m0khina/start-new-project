import React from 'react';

const Package = () => {
    return (
        <div id="package">
            <div className="container">
                <div className="package">
                    <div className="package--hero">
                        <h1>Уровень пакета участия</h1>
                        <p>Пакет который вы выбрали для принятия участия в нашей школе.</p>
                    </div>
                    <div className="package--all">
                        <div className="package--all__left">
                            <div className="package--all__left--data">
                                <h6>Активация</h6>
                                <h6>05.09.22</h6>
                            </div>
                            <div className="package--all__left--pack">
                                <h6>Пакет</h6>
                                <h6>Интенсив</h6>
                            </div>
                        </div>
                        <div className="package--all__right">
                            <div className="package--all__right--status">
                                <h6>Статус</h6>
                                <h6>Активно</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Package;