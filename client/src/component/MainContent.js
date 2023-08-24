import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";
import styled, { keyframes } from "styled-components";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";

const MainContent = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <MainContainer>
      <HeroSection>
        <Grid container justifyContent="center" alignItems="center">
          <Grid item xs={10} md={6} lg={6} xl={12}>
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
          </Grid>
        </Grid>
      </HeroSection>
    </MainContainer>
  );
};

const MainContainer = styled.div`
  text-align: center;
  color: white;
  font-family: "Open Sans", sans-serif;
  margin-left: 0px;

  margin-right: 0px;

  /* Media Query for Mobile Devices */
  @media (max-width: 995px) {
    /* padding: 20px; */
  }
`;

const HeroSection = styled.section`
  background-color: #282e3a;
  padding: 0px 0;

  /* Media Query for Mobile Devices */
  /* @media (max-width: 995px) {
    padding: 30px 0;
  } */
`;
const Nserc = styled.div`
  font-size: 25px;
  position: relative;
  top:15%; 
  left:-5%; 
  padding: 0;
`;






const HeroText = styled.div`
  /* max-width: 600px; */
  margin: 0 auto;
  padding-bottom:70px;

  /* Media Query for Mobile Devices */
  /* @media (max-width: 995px) {
    max-width: 70%;
  } */
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
  background-color: ${(props) => (props.isDarkMode ? "#BB5A7D" : "#BB5A7D")};
  color: ${(props) => (props.isDarkMode ? "black" : "white")};
  font-weight: bold;
  padding: 12px 35px;
  font-size: 20px;
  border: none;
  border-radius: 8px;
  width: 180px;
  cursor: pointer;
  /* margin-top: 150px; */
  /* padding-bottom:-20px; */
  /* border :5px solid yellow; */
  text-decoration: none;
  animation: ${fadeInAnimation} 1s ease-in-out;

  /* Media Query for Mobile Devices */
  /* @media (max-width: 995px) {
    padding: 10px 20px;
    font-size: 18px;
    width: 160px;
    margin-top: 10px;
  } */
`;

const LogoContainer = styled.div`
  position: relative;
  width: 170px;
  height: 170px;
  /* border:4px solid orange; */
  /* padding-bottom: -10px; */
  margin: 0 auto;
  margin-top:70px;
`;

const Logo = styled.img`
  position: absolute;
  top: 10px;
  left: 0;
  /* border:4px solid yellow; */
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;

  /* @media (max-width: 995px) {
    width: 150px;
    height: 150px;
  } */
`;

const LogoOverlay = styled.img`
  position: absolute;
  top: -5px;
  left: 0;
  width: 180px;
  height: 180px;
  object-fit: cover;
  border-radius: 50%;

  /* @media (max-width: 995px) {
    width: 150px;
    height: 150px;
  } */
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
  /* margin-left:10px; */
  /* text-align: center; */
  padding-bottom: 40px;
align-items:2.5rem;
  /* Media Query for Mobile Devices */
  /* @media (max-width: 995px) {
    font-size: 18px;
    width: 100%;
    margin-left: 0;
  } */
`;

export default MainContent;
