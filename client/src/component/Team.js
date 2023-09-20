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


      <Main isDarkMode={isDarkMode}>
      <Grid item xs={6} md={6} lg={12} xl={12}>
      <Title isDarkMode={isDarkMode}>Our Team</Title>
      </Grid>
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

    </Container>
  );
};
export default Team;
//style of all of the page
const Container = styled.div`
   /* margin-top: 0px; */
   margin-left:100px; 

font-family: "Open Sans", sans-serif;
padding-bottom: 20px;
/* width: 100%; */
display: flex;
font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;

  width: 100%;
  @media screen and (max-width: 768px) {
  margin-left:0px;
  display:flex; 
  flex-wrap:wrap;

}

@media screen and (max-width: 480px) {
  margin-left:0px;
}
`;

const Title = styled.div`
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
 margin-top:-20px;
  padding-top:60px;
  font-size: 45px;
  padding-bottom: 80px;
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#242526" : "#ffffff")};
  width: 100%; /* Set the width to 100% */
  min-width:100vw;
  /* margin-right:-750px; */
  margin-left:-600px;
padding-left:600px;

`;

const Subtitles = styled.div`
display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  /* margin-left:120px; */
  font-size: 2em;  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};

;
`


const RedText = styled.span`
  color: #bb5a7d;
`;
const Main = styled.div`
  width: 100%;
  max-width: 1500px;
  padding-top: 0.7px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* margin: 0 auto; */
height:100%;
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};
`

