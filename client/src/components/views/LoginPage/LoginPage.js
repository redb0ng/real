import React from "react";
import { useState } from "react";
// import Axios from 'axios';
import { useDispatch } from "react-redux";
import { loginUser } from "../../../_actions/user_action";
import Auth from "../../../hoc/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Badge } from "antd";
import "antd/dist/antd.min.css";
// import { PlayCircleOutlined,CheckCircleOutlined  } from "@ant-design/icons";
// import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

import "../LoginPage/LoginPage.css";
function LoginPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);

    let body = {
      email: Email,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        navigate("/");
      } else {
        alert("Error");
      }
    });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",

        backgroundSize: "cover",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <div className="Logo">
          {/* <FontAwesomeIcon icon={faHeart} /> */} Welcome
          <hr className="hr" />
        </div>
        {/* <div><img alt="iPhone_01" src="img/e.jpg" alignItems= 'center'   height="400px"  width="500px"/></div> */}
        <br />
        <br />
        <div
          className="form"
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onSubmitHandler}
        >
          <label className="label"> Email</label>
          <input
            className="input_box"
            placeholder="user@naver.com"
            type="email"
            value={Email}
            onChange={onEmailHandler}
          ></input>
          {/* <input className='input_box' type="email" value={Email} onChange={onEmailHandler}   /> */}
          <label className="label">Password</label>
          <input
            className="input_box"
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />
          <br />
          <button id="button" className="input_box" htmlType="submit">
            Login
          </button>
          <br />
          <br />
          <Link className="link" to="/register">
            Register
          </Link>
          <FontAwesomeIcon className="heart" icon={faHeart} />
        </div>
      </form>
    </div>
  );
}

export default LoginPage;
