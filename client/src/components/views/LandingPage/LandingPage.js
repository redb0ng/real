// import React, { useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Video } from "../../../videos/video.mp4";

// function LandingPage() {
//   const navigate = useNavigate();

//   useEffect(() => {
//     axios.get("/api/hello").then((response) => console.log(response.data));
//   }, []);

//   const onClickHandler = () => {
//     axios.get(`/api/users/logout`).then((response) => {
//       if (response.data.success) {
//         // props.history.push("/login")?
//         navigate("/login");
//       } else {
//         alert("로그아웃 하는데 실패 했습니다.");
//       }
//     });
//   };

//   const onRegisterHandler = () => {
//     navigate("/register");
//   };

//   const onSignHandler = () => {
//     navigate("/login");
//   };
//   const clickMe = () => {
//     navigate("/idcard");
//   };

//   return (
//     <div
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         width: "100%",
//         height: "100vh",
//       }}
//     >
//       <video muted autoplay loop>
//         <source src="../../../videos/video.mp4" type="video/mp4" />
//       </video>
//       <h2>시작페이지</h2>

//       <button onClick={onClickHandler}>로그아웃</button>
//       <button onClick={onSignHandler}>로그인</button>
//       <button onClick={clickMe}>등록</button>
//       <button onClick={onRegisterHandler}>회원가입</button>
//     </div>
//   );
// }

// export default LandingPage;
// import React, { useState } from "react";
// import Video from "../../../videos/video.mp4";
// import { Button } from "../ButtonElement";
// import {
//   HeroContainer,
//   HeroBg,
//   VideoBg,
//   HeroContent,
//   HeroH1,
//   HeroP,
//   HeroBtnWrapper,
//   ArrowForward,
//   ArrowRight,
// } from "./HeroElements";
// // import { Button } from "antd";

// const Hero = () => {
//   const [hover, setHover] = useState(false);

//   const onHover = () => {
//     setHover(!hover);
//   };
//   return (
//     <HeroContainer>
//       <HeroBg>
//         <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
//       </HeroBg>
//       <HeroContent>
//         <HeroH1>asdfasdfasdf</HeroH1>
//         <HeroP>Sign up dfasdfsdf</HeroP>
//         <HeroBtnWrapper>
//           <Button
//             to="/IdCard"
//             onMouserEnter={onHover}
//             onMouserLeave={onHover}
//             primary="true"
//             dark="true"
//           >
//             Get started {hover ? <ArrowForward /> : <ArrowRight />}
//           </Button>
//         </HeroBtnWrapper>
//       </HeroContent>
//     </HeroContainer>
//   );
// };

// export default Hero;

import React from "react";
import { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Auth from "../../../hoc/auth";
import { Link } from "react-router-dom";
import "../LandingPage/LandingPage.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  fa1,
  faGrin,
  faUserPlus,
  faClover,
} from "@fortawesome/free-solid-svg-icons";

import { ProSidebar, Menu, MenuItem, SubMenu } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";

import { Button, Radio } from "antd";
import {
  DownloadOutlined,
  MenuOutlined,
  MessageOutlined,
} from "@ant-design/icons";

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("/api/hello").then((response) => console.log(response.data));
  }, []);

  const onClickHandler = () => {
    axios.get(`/api/users/logout`).then((response) => {
      if (response.data.success) {
        // props.history.push("/login")
        navigate("/login");
      } else {
        alert("로그아웃 하는데 실패 했습니다.");
      }
    });
  };

  const onRegisterHandler = () => {
    axios.post(`/api/users/login`).then((response) => {
      // if (response.data.success) {
      // props.history.push("/login")
      navigate("/login");
      // } else {
      //     alert('로그아웃 하는데 실패 했습니다.')
      // }
    });
  };

  const onSignHandler = () => {
    axios.post(`/api/users/register`).then((response) => {
      // if (response.data.success) {
      //     // props.history.push("/login")
      navigate("/register");
      // } else {
      //     alert('로그아웃 하는데 실패 했습니다.')
      // }
    });
  };

  const onClickDrop = () => {
    // axios.get(`/api/users/logout`)
    //     .then(response => {
    //         if (response.data.success) {
    //             // props.history.push("/login")
    //             navigate('/login');
    //         } else {
    //             alert('로그아웃 하는데 실패 했습니다.')
    //         }
    //     })
    // navigate('/login');
    function scrollIntoView(selector) {
      const scrollTo = document.querySelector(selector);
      scrollTo.scrollIntoView({ behavior: "smooth" });
    }
    const navbarMenu = document.querySelector(".navbar__menu");
    navbarMenu.addEventListener("click", (event) => {
      const target = event.target;
      const link = target.dataset.link;
      if (link == null) {
        return;
      }
      navbarMenu.classList.remove("open");
      scrollIntoView(link);
    });
    const navbarToggleBtn = document.querySelector(".navbar__toggle-btn");
    navbarToggleBtn.addEventListener("click", () => {
      navbarMenu.classList.toggle("open");
    });
  };

  const clickMe = () => {
    navigate("/idcard");
  };

  return (
    <div
      style={
        {
          // display: 'flex', justifyContent: 'center', alignItems: 'center'
          // , width: '100%', height: '100vh'
        }
      }
    >
      {/* <div>네브바 위치</div> */}
      {/* <h2>시작페이지</h2> */}

      <nav id="navbar">
        <div className="navbar__logo">
          {/* <!-- <i class="fa-solid fa-cake-candles"></i> --> */}
          {/* <i className="fa-solid fa-star"></i> */}
          {/* <!--<i class="fa-solid fa-seedling"></i>--> */}
          {/* <a href="#">CHOU</a> */}
          {/* <Link className='link' to="/">최종장박봉</Link> */}
          최종장박봉
        </div>

        <ul className="navbar__menu">
          <li className="navbar__menu__item active" data-link="#home">
            Home
          </li>
          <li className="navbar__menu__item" data-link="#about">
            About
          </li>

          <li className="navbar__menu__item" data-link="#contact">
            Contact
          </li>
          <li button className="navbar__menu__item" onClick={onClickHandler}>
            로그아웃
          </li>
          <li button className="navbar__menu__item" onClick={onRegisterHandler}>
            로그인
          </li>
          <li button className="navbar__menu__item" onClick={onSignHandler}>
            회원가입
          </li>
        </ul>

        <FontAwesomeIcon
          type="button"
          className="navbar__toggle-btn"
          onClick={onClickDrop}
          icon={faHeart}
        />
      </nav>

      <section id="home">
        <video auto muted autoPlay loop width="100%" height="100%">
          <source src="img/video.mp4" type="video/mp4" />
        </video>
        <div class="home__container">
          {/* <img src="imgs/i.jpg" alt="me" class="home__avatar" > */}
          <h1 class="home__title">Chou_Chou</h1>
          <h3 class="home__description">Frontend Developer</h3>
        </div>
        <div class="div_button">
          <button class="aaaa" onClick={clickMe}>
            IDCARD
          </button>
          <button class="bbbb">122222IDCA</button>
        </div>
        {/* <div class="div_button2">
          <button>IDCARD2222222222</button>
          <button>IDCARD2222222222</button>
        </div> */}
      </section>
    </div>
  );
}

export default LandingPage;
