import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";

import { Link, useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";
import "../RegisterPage/RegisterPage.css";
import { Button, Checkbox, Form, Input, Badge } from "antd";

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const [Name, setName] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onEmailHandler = (event) => {
    setEmail(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);

    if (Password !== ConfirmPassword) {
      return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        navigate("/login");
      } else {
        alert("Failed to sign up");
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
        backgroundImage: "url(img/lp.jpg) ",
        backgroundSize: "cover",
      }}
    >
      <form
        style={{ display: "flex", flexDirection: "column" }}
        onSubmit={onSubmitHandler}
      >
        <div className="logo">
          {/* <FontAwesomeIcon icon={faHeart} /> */} Register
          <hr />
        </div>
        <label className="label">Email</label>
        <Input
          className="input_box"
          type="email"
          value={Email}
          onChange={onEmailHandler}
        />

        <label className="label">Name</label>
        <Input
          className="input_box"
          type="text"
          value={Name}
          onChange={onNameHandler}
        />

        <label className="label">Password</label>
        <Input
          className="input_box"
          type="password"
          value={Password}
          onChange={onPasswordHandler}
        />

        <label className="label">Confirm Password</label>
        <Input
          className="input_box"
          type="password"
          value={ConfirmPassword}
          onChange={onConfirmPasswordHandler}
        />
        <br />
        <Button id="button" className="input_box" htmlType="submit">
          Register
        </Button>
        <Link className="link" to="/">
          Home
        </Link>
      </form>
    </div>
  );
}

export default RegisterPage;
