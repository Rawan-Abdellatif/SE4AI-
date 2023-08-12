import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import styled, { keyframes } from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { Link } from "react-router-dom";

const MainContent = () => {
  const { isDarkMode } = useContext(DarkModeContext);

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
          <ButtonLink to="/apply" isDarkMode={isDarkMode}>
            Apply Now
          </ButtonLink>
        </HeroText>
      </HeroSection>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  text-align: center;
  color: white;
  font-family: "Open Sans", sans-serif;
  margin-left: -10px;
  margin-right: -10px;

  /* Media Query for Mobile Devices */
  @media (max-width: 768px) {
    /* padding: 20px; */
  }
`;

const HeroSection = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #282e3a;
  padding: 50px 0;

  /* Media Query for Mobile Devices */
  @media (max-width: 768px) {
    padding: 30px 0;
  }
`;

const Nserc = styled.div`
  font-size: 25px;
  /* position: absolute; */
  bottom: -5px;
  /* left: 70%; */
  transform: translateX(-10%);
/* right:90%; */
  /* Media Query for Mobile Devices */
  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const HeroText = styled.div`
  /* max-width: 600px; */
  margin: 0 auto;

  /* Media Query for Mobile Devices */
  @media (max-width: 768px) {
    max-width: 70%;
  }
`;

const fadeInAnimation = keyframes`
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
`;

const ButtonLink = styled(Link)`
  background-color: ${(props) => (props.isDarkMode ? "#bb5a7d" : "#bb5a7d")};
  color: ${(props) => (props.isDarkMode ? "black" : "white")};
  font-weight: bold;
  padding: 12px 35px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  width: 180px;
  cursor: pointer;
  /* margin-top: 50px; */
  text-decoration: none;
  animation: ${fadeInAnimation} 1s ease-in-out;

  /* Media Query for Mobile Devices */
  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 18px;
    width: 160px;
    margin-top: 10px;
  }@media (min-width: 768px) and (max-width: 1024px) {
  }
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
  top: -5;
  left: 0;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;
  @media (max-width: 768px) {
   width: 150px;  height: 150px;

  }@media (min-width: 768px) and (max-width: 1024px) {
  }
`;

const LogoOverlay = styled.img`
  position: absolute;
  top: -5;
  left: 0;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;@media (max-width: 768px) {
   width: 150px;  height: 150px;

  }
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
  color: #bb5a7d;
`;

const P = styled.p`
  font-size: 23px;
  /* width: 1100px; */
  margin-left: -200px;
  text-align: center;
padding-bottom:20px;

  /* Media Query for Mobile Devices */
  @media (max-width: 768px) {
    font-size: 18px;
    width: 100%;
    margin-left: 0;
  }
`;

export default MainContent;
