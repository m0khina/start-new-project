import React, {useState} from 'react';
import login from '../../../assets/img/login.png'
import loginBook from "../../../assets/img/login_book.png"
import loginBook2 from "../../../assets/img/login_book2.png"
import loginBook3 from "../../../assets/img/login_book3.png"
import loginBook4 from "../../../assets/img/login_book4.png"
import uniqid from "uniqid"
import {useNavigate} from "react-router-dom";
import Footer from "../../../components/Footer/Footer";
import Header from "../../../components/Header/Header";



const ForgotPass = () => {
    const [task,setTask] = useState([])
    const [value,setValue] = useState("")
    const [put,setPut] = useState(false)
    const nav = useNavigate()
      const  holdChange  =(e)=> {
          setValue(e.target.value)
    }

    const holdClick = ()=> {
       if (value!== ''){
           const newTask = {
               id:uniqid(),
               title:value
           }
           setTask([...task,newTask])
           setPut(false)



       } else {
           setPut(true)
       }

    }




    return (
        <>
            <div id="forgotPass">
                <div className="container">
                    <div className="forgotPass">
                        <div className="forgotPass--login">
                            <div className="forgotPass--login__block">
                                <div className="forgotPass--login__block--self">
                                    <img src={login}   alt="img"/>
                                    <h1>SELF DEVELOPING SCHOOL</h1>
                                </div>
                            </div>
                            <div className="forgotPass--login__blocksTwo">
                                <h1>Востановить пароль</h1>


                                <p>Введите адрес электронной почты, который вы использовали для регистрации. Вам будет отправлено письмо с инструкциями по сбросу пароля.
                                </p>


                                <div className="forgotPass--login__blocksTwo--task">

                                    <input type="text" style={{border:put    ? "2px solid red" : "1px solid #ffff"}} id="message" name="message"  value={value}   onChange={holdChange}  placeholder="Email" aria-placeholder="tr"  />
                                    <button onClick={holdClick|| setPut}>Отправить инструкцию</button>
                                </div>
                                <h3 onClick={()=> {
                                    nav(`/login`)
                                }}>Уже есть аккаунт. Войти</h3>

                            </div>
                        </div>

                    </div>
                    <div className="forgetImage">
                        <img src={loginBook} className="forgetImage--books" alt="img"/>
                        <img src={loginBook2} className="forgetImage--books2" alt="img"/>
                        <img src={loginBook3} className="forgetImage--books3" alt="img"/>
                        <img src={loginBook4} className="forgetImage--books4" alt="img"/>
                    </div>
                </div>

            </div>
        </>
    );
};

export default ForgotPass;