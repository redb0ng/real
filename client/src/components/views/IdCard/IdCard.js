import React, { useState } from "react";
import Modal from "../Modal/Modal";
import { Button, Input } from "antd";
import Icon from "@ant-design/icons";
import { useDispatch } from "react-redux";
// import { registerUser } from "../../../_actions/user_action";
import { idUser } from "../../../_actions/user_action";
import { Link, useNavigate } from "react-router-dom";
import { Add, AllInboxSharp } from "@material-ui/icons";
import "../IdCard/IdCard.css";

import Dropzone from "react-dropzone";
import { axios } from "axios";

function IdCard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  const [Name, setName] = useState("");
  const [Id, setId] = useState("");
  const [Age, setAge] = useState("");
  const [Address, setAddress] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPassword, setConfirmPassword] = useState("");

  const onNameHandler = (event) => {
    setName(event.currentTarget.value);
  };

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onAgeHandler = (event) => {
    setAge(event.currentTarget.value);
  };

  const onAddressHandler = (event) => {
    setAddress(event.currentTarget.value);
  };

  const onConfirmPasswordHandler = (event) => {
    setConfirmPassword(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      name: Name,
      id: Id,
      address: Address,
      age: Age,
    };

    dispatch(idUser(body)).then((response) => {
      if (response.payload.success) {
        alert("민증 등록");
        navigate("/upload");
      } else {
        alert("민증 등록 실패");
      }
    });
  };

  // const onSubmitHandler2 = (event) => {
  //   event.preventDefault();

  //   // console.log("Name", Name);
  //   // console.log("Id", Id);

  //   if (Password !== ConfirmPassword) {
  //     return alert("비밀번호와 비밀번호 확인은 같아야 합니다.");
  //   }

  //   let body = {
  //     password: Password,
  //     confirmPassword: ConfirmPassword,
  //   };

  //   dispatch(idUser(body)).then((response) => {
  //     if (response.payload.success) {
  //       alert("2차 확인");
  //     } else {
  //       alert("2차 확인 실패");
  //     }
  //   });
  // };

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
          {/* <FontAwesomeIcon icon={faHeart} /> */} Welcome
          <hr />
        </div>
        {/* <div><img alt="iPhone_01" src="img/e.jpg" alignItems= 'center'   height="400px"  width="500px"/></div> */}
        <br />
        <br />

        <label className="label"> 이름</label>
        <Input
          className="input_box"
          //placeholder="user@naver.com"
          type="text"
          value={Name}
          onChange={onNameHandler}
        ></Input>
        {/* <input className='input_box' type="email" value={Email} onChange={onEmailHandler}   /> */}
        <label className="label">주민번호</label>
        <input
          className="input_box"
          type="text"
          value={Id}
          onChange={onIdHandler}
        />
        <label className="label">나이</label>
        <input
          className="input_box"
          type="number"
          value={Age}
          onChange={onAgeHandler}
        />
        <label className="label">주소</label>
        <input
          className="input_box"
          type="text"
          value={Address}
          onChange={onAddressHandler}
        />

        <button id="button" type="submit">
          등록
        </button>
        {/* <Button id="button" htmlType="submit">
          Login
        </Button>
        <br /> */}

        <React.Fragment>
          <button onClick={openModal}>인증하기</button>
          <Modal open={modalOpen} close={closeModal} header="비밀번호 입력">
            <div>
              <label className="label">Password</label>
              <Input
                type="password"
                value={Password}
                onChange={onPasswordHandler}
              />
              {/* <Input
                type="password"
                value={ConfirmPassword}
                onChange={onConfirmPasswordHandler}
              /> */}
              <Button id="button" htmlType="submit">
                확인
              </Button>
            </div>
          </Modal>
        </React.Fragment>
        <Link className="link" to="/">
          Home
        </Link>
      </form>
    </div>
  );
}

export default IdCard;
