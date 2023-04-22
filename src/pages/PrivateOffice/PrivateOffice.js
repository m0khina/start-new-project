import React from 'react';
import {NavLink, Route, Routes} from 'react-router-dom';
import All from './All/All';
import Pay from "./Pay/Pay";
import Operations from "./Operations/Operations";
import Package from "./Package/Package";
import Security from "./Security/Security";
import Certificates from "./Certificates/Certificates";
import History from "./History/History";
import {CiUser} from "react-icons/ci";
import {AiOutlineHistory} from "react-icons/ai";
import {MdOutlinePayments} from "react-icons/md";

const PrivateOffice = () => {
    return (
        <div id="office">
            <div className="container">
                <div className='office'>
                    <div className="office--nav">
                        <NavLink to={"/private-office/much"} className="office--nav__link">
                            <div><CiUser/> Общие</div>
                        </NavLink>
                        <NavLink to={"/private-office/pay"} className="office--nav__link">
                            <div><MdOutlinePayments/> Оплата</div>
                        </NavLink>
                        <NavLink to={"/private-office/operations"} className="office--nav__link">
                            <div> Операции</div>
                        </NavLink>
                        <NavLink to={"/private-office/package"} className="office--nav__link">
                            <div> Пакет</div>
                        </NavLink>
                        <NavLink to={"/private-office/security"} className="office--nav__link">
                            <div><MdOutlinePayments/> Безопасность</div>
                        </NavLink>
                        <NavLink to={"/private-office/certificates"} className="office--nav__link">
                            <div>Сертефикаты</div>
                        </NavLink>
                        <NavLink to={"/private-office/history   "} className="office--nav__link">
                            <div><AiOutlineHistory/> История</div>
                        </NavLink>
                    </div>
                    <div className="office--routes">
                        <Routes>
                            <Route path='/private-office/much' element={<All/>}/>
                            <Route path='/private-office/pay' element={<Pay/>}/>
                            <Route path='/private-office/operations' element={<Operations/>}/>
                            <Route path='/private-office/package' element={<Package/>}/>
                            <Route path='/private-office/security' element={<Security/>}/>
                            <Route path='/private-office/certificates' element={<Certificates/>}/>
                            <Route path='/private-office/history' element={<History/>}/>
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivateOffice;