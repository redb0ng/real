import React, { useState } from "react";
import Hero from "../HeroSection/Hero";
import NavBar from "../NavBar/NavBar";
import Sidebar from "../Sidebar/Sidebar";

const Home = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      <NavBar toggle={toggle} />
      <Hero />
    </div>
  );
};

export default Home;
