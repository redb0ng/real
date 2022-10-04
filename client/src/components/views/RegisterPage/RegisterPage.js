import React from "react";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/user_action";
import { useNavigate } from "react-router-dom";
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

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };
  const onSubmitHandler = (event) => {
    event.preventDefault();

    console.log("Email", Email);
    console.log("Password", Password);

    if (Password !== ConfirmPassword) {
      return alert("비밀번호화 비밀번호 확인이 같아야 합니다");
    }

    let body = {
      email: Email,
      password: Password,
      name: Name,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        // console.log(props.history)
        navigate("/login");
        // props.history.push('/login')
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
        className="formstyle"
      >
        <div className="Logo22">
          {/* <FontAwesomeIcon icon={faHeart} /> */} Register
          <hr className="hr" />
        </div>
        <br />
        <br />
        <form
          style={{ display: "flex", flexDirection: "column" }}
          onSubmit={onSubmitHandler}
          className="form"
        >
          <label className="label22">Email</label>
          <input
            className="input_box22"
            type="email"
            value={Email}
            onChange={onEmailHandler}
          />

          <label className="label22">Name</label>
          <input
            className="input_box22"
            type="text"
            value={Name}
            onChange={onNameHandler}
          />

          <label className="label22">Password</label>
          <input
            className="input_box22"
            type="password"
            value={Password}
            onChange={onPasswordHandler}
          />

          <label className="label22">Confirm Password</label>
          <input
            className="input_box22"
            type="password"
            value={ConfirmPassword}
            onChange={onConfirmPasswordHandler}
          />
          <br />
          <Button id="button11" className="input_box22" htmlType="submit">
            Register
          </Button>
        </form>
      </form>
    </div>
  );
}

export default RegisterPage;
