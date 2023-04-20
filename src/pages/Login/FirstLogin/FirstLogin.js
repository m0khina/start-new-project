import React, { useState } from "react";
import Book from "./../../../assets/img/logo.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { BsEyeSlash, BsEye } from "react-icons/bs";
import { useDispatch } from "react-redux";

const FirstLogin = () => {
  const dispatch = useDispatch();

  const local = () => {

    var { uname, pass } = document.forms[0];
    database.find((user) => {
      if (user.username === uname.value && user.password === pass.value) {
        nav("/")
        window.scroll(0, 0);
        dispatch({ type: "OPEN_LOGIN", payload: false });
        localStorage.setItem("login", JSON.stringify(false));
      }
      return ""
    });
  };

  //////////////////////////////////////

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [eye, setEye] = useState(false);
  const [errors, setErrors] = useState(false);

  const nav = useNavigate();


  const database = [
    {
      username: "1",
      password: "1",
    },
    {
      username: "Syrgabek",
      password: "0131",
    },
  ];



  const handleSubmit = (event) => {
    event.preventDefault();

    var { uname, pass } = document.forms[0];

    const userData = database.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrors(true);
      } else {
        setErrors(false);
      }
    } else {
      setErrors(true);
    }
  };

  const getPage = (
    <form
      action=""
      onSubmit={handleSubmit}
      className="firstLogin--block__login"
    >
      <h2>Войти в аккаунт</h2>
      <input
        style={{
          border: errors ? "1px solid red" : "",
        }}
        className="IWillForgetYou"
        type="text"
        name="uname"
        id="email"
        placeholder="Email"
        onChange={() => setErrors(false)}
      />
      <div>
        <input
          style={{
            border: errors ? "1px solid red" : "",
          }}
          className="forgetMe"
          type={!eye ? "password" : "rf"}
          name="pass"
          id="passw"
          placeholder="Password"
          onChange={() => setErrors(false)}
        />
        {eye ? (
          <BsEyeSlash
            className="firstLogin--block__login--icon"
            onClick={() => setEye(false)}
          />
        ) : (
          <BsEye
            className="firstLogin--block__login--icon"
            onClick={() => setEye(true)}
          />
        )}
      </div>
      <button onClick={local}>Войти</button>
      <h3 onClick={()=> nav("/forgot-pass")}>Забыли пароль?</h3>
    </form>
  );

  return (
    <div id="firstLogin">
      <div className="container">
        <div className="firstLogin">
          <div className="firstLogin--block">
            <NavLink to={"/"}>
              <img onClick={local} src={Book} alt="" />
            </NavLink>
            <h1>SELF DEVELOPING SCHOOL</h1>
            {isSubmitted ? "greate" : getPage}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FirstLogin;
