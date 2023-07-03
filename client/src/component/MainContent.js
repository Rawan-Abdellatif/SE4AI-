import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";

const MainContent = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <MainContainer>
      <HeroSection>
        <HeroText>
          <LogoContainer>
            <Logo src={logo} alt="CREATE SE4AI" />
            <LogoOverlay src={logoDark} alt="CREATE SE4AI" />
          </LogoContainer>
          <Nserc>NSERC</Nserc>
          <CustomText>
            CREATE{" "}
            <RedText>
              SE<WhiteText>4</WhiteText>AI
            </RedText>
          </CustomText>
          <P>
            A Training Program on the Development, Deployment and Servicing of
            Artificial Intelligence-based Software Systems
          </P>
          <Button isDarkMode={isDarkMode}>Apply Now</Button>
        </HeroText>
      </HeroSection>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  text-align: center;
  align-content: center;
  color: white;
  font-family: "Open Sans", sans-serif;
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282e3a;
  padding: 50px 0;
`;

const Nserc = styled.div`
  font-size: 25px;
  /* position: absolute; */
  bottom: -20px;
  left: 90%;
  transform: translateX(-20%);
`;

const HeroText = styled.div`
  max-width: 600px;
`;
const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;
const Button = styled.button`
  background-color: ${(props) => (props.isDarkMode ? "white" : "#db7093")};
  color: ${(props) => (props.isDarkMode ? "#212529" : "black")};
  font-weight: bold;
  padding: 12px 24px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  width: 180px;
  cursor: pointer;
  margin-left: 100px;
  animation: ${fadeInAnimation} 1s ease-in-out;
`;

const LogoContainer = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  padding-top: 5px;
  margin: 0 auto;
`;

const Logo = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const LogoOverlay = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 200px;
  height: 200px;
  object-fit: cover;
  border-radius: 50%;
`;

const CustomText = styled.div`
  font-size: 50px;
  padding-top: 5px;
  margin-bottom: 10px;
  font-weight: bold;
`;

const WhiteText = styled.span`
  color: white;
`;

const RedText = styled.span`
  color: #db7093;
`;

const P = styled.p`
  font-size: 23px;
  width: 1100px;
  margin-left: -200px;
  text-align: center;
`;

export default MainContent;
