import React, { useEffect } from "react";
import { FaBars } from "react-icons/fa";
import {
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavBtn,
  NavBtnLink,
} from "./NavBarElements";
import { useNavigate } from "react-router-dom";
import { Button } from "react-scroll";
import axios from "axios";

function NavBar({ toggle }) {
  const navigate = useNavigate();

  const onSignHandler = () => {
    navigate("/login");
  };
  const clickMe = () => {
    navigate("/qr_generator");
  };
  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">최종장박봉</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks to="about">About</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="bbb">bbb</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ccc">ccc</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="ddd">ddd</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/login">LOGIN</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
        <button onClick={onSignHandler}>로그인</button>
        <button onClick={clickMe}>등록</button>
      </Nav>
    </>
  );
}

export default NavBar;
// import React from 'react'

// const NavBar = () => {
//   return (
//     <div>NavBar</div>
//   )
// }

// export default NavBar
