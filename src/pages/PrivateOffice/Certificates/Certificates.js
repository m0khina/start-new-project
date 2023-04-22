import React from 'react';
import {BsEye} from "react-icons/bs";
import {RiDownloadCloud2Line} from "react-icons/ri";

const Certificates = () => {
    return (
        <div id="cer">
            <div className="container">
                <div className="cer">
                    <div className="cer--hero">
                        <h1>Сертефикаты</h1>
                        <p>Здесь хроняться ваши сертификаты</p>
                    </div>
                    <div className="cer--all">
                        <div className="cer--all__left">
                            <div className="cer--all__left--data">
                                <h5>Дата получения</h5>
                                <h6>05.09.222</h6>
                                <h6>05.09.222</h6>
                                <h6>05.09.222</h6>
                            </div>
                            <div className="cer--all__left--text">
                                <h5>Сертификат за:</h5>
                                <h6>Прохождния курса по созданию команды</h6>
                                <h6>Прохождния курса по созданию команды</h6>
                                <h6>Прохождния курса по созданию команды</h6>
                            </div>
                        </div>
                        <div className="cer--all__right">
                            <div className="cer--all__right--status">
                                <h5>Статус</h5>
                                <h6>Пройден</h6>
                                <h6>Пройден</h6>
                                <h6>Пройден</h6>
                            </div>
                            <div className="cer--all__right--see">
                                <h5>Просмотреть</h5>
                                <div className="cer--all__right--see__icon">
                                    <a href="#"><BsEye/></a>
                                    <a href="#"><RiDownloadCloud2Line/></a>
                                </div>
                                <div className="cer--all__right--see__icon">
                                    <a href="#"><BsEye/></a>
                                    <a href="#"><RiDownloadCloud2Line/></a>
                                </div>
                                <div className="cer--all__right--see__icon">
                                    <a href="#"><BsEye/></a>
                                    <a href="#"><RiDownloadCloud2Line/></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Certificates;