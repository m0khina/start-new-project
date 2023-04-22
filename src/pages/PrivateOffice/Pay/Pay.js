import React, {useState} from 'react';
import {IoIosArrowDown} from "react-icons/io";
import {RiMastercardFill, RiVisaLine} from "react-icons/ri";

const Pay = () => {
    const [visa,setVisa] = useState(false)
    const [master,setMaster] = useState(false)
    return (
        <div id="pay">
            <div className="container">
                <div className="pay">
                    <div className="pay--hero">
                        <h1>Оплата</h1>
                        <p>Здесь вы можете добавить или изменить реквизиты для оплаты уровня участия.</p>
                    </div>
                    <div className="pay--yours">
                        <h1>Ваши способы оплаты</h1>
                        <p>Выберите способ оплаты или измените его</p>
                    </div>
                    <div className="pay--accor">
                        <details>
                            <summary>Добавить способ оплаты <IoIosArrowDown className="arrow"/></summary>
                            <div className="pay--accor__visa" style={{height: visa ? '190px' : '30px'}}>
                                <div className="pay--accor__visa--top">
                                    <input type="checkbox" name="five"  onClick={() => {setVisa(!visa)
                                    setMaster(master === false && visa === !visa)
                                    }}/>
                                    <div className="pay--accor__visa--icon">
                                        <a href="#"><RiVisaLine/></a>
                                    </div>
                                    <p>Visa</p>
                                </div>
                                <div className="pay--accor__visa--block">
                                    <div className="pay--accor__visa--block__num">
                                        <p>Номер карты</p>
                                        <input type="number" placeholder="1983 3892 8398 8281"/>
                                    </div>
                                    <div className="pay--accor__visa--block__two">
                                        <div className="pay--accor__visa--block__two--left">
                                            <p>Срок</p>
                                            <input type="text"  placeholder="12/25"/>
                                        </div>
                                        <div className="pay--accor__visa--block__two--cvv">
                                            <p>CVV</p>
                                            <input type="text" placeholder="398"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pay--accor__master" style={{
                                height: master ? '190px' : '30px'
                            }}>
                                <div className="pay--accor__master--top">
                                    <input type="checkbox" name="five" onClick={() => {
                                        setMaster(!master)
                                        setVisa(visa === true && master === !master)
                                    }}/>
                                    <a href="#"><RiMastercardFill/></a>
                                    <p>Master Card</p>
                                </div>
                                <div className="pay--accor__master--block">
                                    <div className="pay--accor__master--block__num">
                                        <p>Номер карты</p>
                                        <input type="number"/>
                                    </div>
                                    <div className="pay--accor__master--block__two">
                                        <div className="pay--accor__master--block__two--left">
                                            <p>Срок</p>
                                            <input type="text"/>
                                        </div>
                                        <div className="pay--accor__master--block__two--cvv">
                                            <p>CVV</p>
                                            <input type="text"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </details>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pay;