import React from "react";
import { useState } from "react";
// import Axios from 'axios';
import { useDispatch } from "react-redux";
import { password2User } from "../../../_actions/user_action";
import Auth from "../../../hoc/auth";
import { Link, useNavigate } from "react-router-dom";
import { Button, Checkbox, Form, Input, Badge } from "antd";
import "antd/dist/antd.min.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
function Second() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [SecondPassword, setSecondPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onSecondPasswordHandler = (event) => {
    setSecondPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    // console.log("Email", Email);
    // console.log("Password", SecondPassword);

    let body = {
      email: Email,
      secondpassword: SecondPassword,
    };

    dispatch(password2User(body)).then((response) => {
      if (response.payload.password2Success) {
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
        backgroundImage: "url(img/gh.jpg) ",
        backgroundSize: "cover",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <div className="Logo">
          Welcome
          <hr />
        </div>

        <br />
        <br />
        <label className="label"> Email</label>
        <Input
          className="input_box"
          placeholder="user@naver.com"
          type="email"
          value={Email}
          onChange={onEmailHandler}
        ></Input>
        <label className="label">Second Password</label>
        <input
          className="input_box"
          type="password"
          value={SecondPassword}
          onChange={onSecondPasswordHandler}
        />
        <br />
        <Button id="button" className="input_box" htmlType="submit">
          Login
        </Button>
        <br />
        <br />
        <Link className="link" to="/register">
          Register
        </Link>

        <FontAwesomeIcon className="heart" icon={faHeart} />
      </form>
    </div>
  );
}

export default Second;
