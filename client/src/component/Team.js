// This is the Team Page
import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import {Grid} from "@mui/material";

//import pictures
import ProgramLeadership from "./ProgramLeadership";
import Adminstrations from "./Adminstrations";
import Postdocs from "./Postdocs";
import Alumni from "./Alumni";
import Students from "./Students";

const Team = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>       
   
      <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1, padding: "20px" }}
    
  >     

    <Grid item xs={12} md={12} lg={6} xl={12}>
      <Main isDarkMode={isDarkMode}>
  <Title isDarkMode={isDarkMode}>Our Team</Title>
        <Subtitles isDarkMode={isDarkMode}>
          <RedText>P</RedText>rogram Leadership
        </Subtitles>
        <ProgramLeadership />
        <Subtitles isDarkMode={isDarkMode}>
          <RedText>A</RedText>dministration
        </Subtitles>
        <Adminstrations />
        <Subtitles isDarkMode={isDarkMode}>
          {" "}
          <RedText>P</RedText>ostdocs
        </Subtitles>
        <Postdocs />
        <Subtitles isDarkMode={isDarkMode}>
          {" "}
          <RedText>A</RedText>lumni
        </Subtitles>
        <Alumni />
        <Subtitles isDarkMode={isDarkMode}>
          {" "}
          <RedText>S</RedText>tudents
        </Subtitles>
        <Students />
      </Main>
          
      </Grid>
      </Grid>
    </Container>
  );
};
export default Team;
//style of all of the page
const Container = styled.div`
   display: flex;
  font-family: "Open Sans", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;

  /* width: 100%; */
  /* @media (max-width: 995px) {
margin-left:20px;
}   */

`;

const Title = styled.div`
  font-weight: bolder;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
  padding-top: 45px;
  font-size: 45px;
  padding-bottom: 50px;
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
  /* width: 300vw; */
  /* margin-left:-1200px;
  padding-left:1210px; */
`;




const Subtitles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  /* margin-left:120px; */
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};

`;


const RedText = styled.span`
  color: #bb5a7d;
`;
const Main = styled.div`
  /* border-left: ${(props) =>
    props.isDarkMode ? "1px solid #D0D0D0" : "1px solid #D0D0D0"}; */
    /* padding-left:0px; */
  /* margin-left: 5px; */
  width: 100%; /* Set the width to 100% */
  max-width: 1500px; /* Adjust the maximum width as needed */
  padding-top: -40px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  margin: 0 auto; /* Center the content horizontally */
`;


