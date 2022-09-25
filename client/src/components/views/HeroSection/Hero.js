import React, { useState } from "react";
import Video from "../../../videos/video.mp4";
import { Button } from "../ButtonElement";
import {
  HeroContainer,
  HeroBg,
  VideoBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroBtnWrapper,
  ArrowForward,
  ArrowRight,
} from "../LandingPage/HeroElements";
import { useNavigate } from "react-router-dom";
// import { Button } from "antd";

const Hero = () => {
  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover(!hover);
  };

  const navigate = useNavigate();

  const clickMe = () => {
    navigate("/qr_generator");
  };
  return (
    <HeroContainer>
      <HeroBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </HeroBg>
      <HeroContent>
        <HeroH1>asdfasdfasdf</HeroH1>
        <HeroP>Sign up dfasdfsdf</HeroP>
        <HeroBtnWrapper>
          <Button
            // to="signup"
            onClick={clickMe}
            onMouserEnter={onHover}
            onMouserLeave={onHover}
            primary="true"
            dark="true"
          >
            Get started {hover ? <ArrowForward /> : <ArrowRight />}
          </Button>
        </HeroBtnWrapper>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
