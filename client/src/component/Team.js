// This is the Team Page
import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";

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
      <Title isDarkMode={isDarkMode}>Our Team</Title>
      <Main isDarkMode={isDarkMode}>
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
    </Container>
  );
};
export default Team;
//style of all of the page
const Container = styled.div`
  margin-top: 0px;
  margin-left: -10px;
  margin-right: -10px;
  /* margin-left: 100px; */
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  /* width: 100%; */@media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:-120px;  }
`;

const Title = styled.div`
  font-weight: bold;
  padding-left: 100px;
  padding-top: 45px;
  font-size: 45px;
  padding-bottom: 50px;
  border-bottom: 2px solid
    ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};@media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:20px;  }
`;



const Subtitles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
`;

const RedText = styled.span`
  color: #bb5a7d;
`;
const Main = styled.div`
  margin-top: 0;
  padding-left: 100px;
  /* width: 100%;
  height: 100%; */
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};
`;
