import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        // props.history.push("/login")?
        navigate("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  const onRegisterHandler = () => {
    navigate("/register");
  };

  const onSignHandler = () => {
    navigate("/login");
  };
  const clickMe = () => {
    navigate("/qr_generator");
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
        height: "100vh",
      }}
    >
      <h2>시작페이지</h2>

      <button onClick={onClickHandler}>로그아웃</button>
      <button onClick={onSignHandler}>로그인</button>
      <button onClick={clickMe}>등록</button>
      <button onClick={onRegisterHandler}>회원가입</button>
    </div>
  );
}

export default LandingPage;
