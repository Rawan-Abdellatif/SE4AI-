import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import ProgramCommittee from "./ProgramCommiittee";
import SteeringCommittee from "./SteeringCommittee";
const Governance = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
          

      <Title isDarkMode={isDarkMode}>Governance</Title>
      <Main isDarkMode={isDarkMode}>
        <Subtitles isDarkMode={isDarkMode}>
          <RedText>P</RedText>rogram Committee
        </Subtitles>
        <ProgramCommittee isDarkMode={isDarkMode} />
        <Subtitles isDarkMode={isDarkMode}>
          <RedText>S</RedText>teering Committee
        </Subtitles>
        <SteeringCommittee isDarkMode={isDarkMode} />
      </Main>
    </Container>
  );
};

export default Governance;

const Title = styled.div`
  font-weight:800;
  /* padding-left: 100px; */
  /* margin-left:120px; */
  padding-top: 45px;
  font-size:45px;
  padding-bottom: 50px;
  border-bottom: 2px solid
    ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};@media (max-width: 768px) {
    font-size: 45px;
margin-left:5px;
  }
`;

const Subtitles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  /* margin-left:120px; */
  font-size: 30px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  @media (max-width: 768px) {
    font-size: 25px;
  }
`;

const RedText = styled.span`
  color: #bb5a7d;
`;

const Container = styled.div`
   /* margin-top: 0px; */
   margin-left:100px; 

font-family: "Open Sans", sans-serif;
padding-bottom: 20px;
/* width: 100%; */@media (max-width: 768px) {
margin-left:20px;
}
`;

const Main = styled.div`
  /* margin-top: 0;
  padding-left: 100px; */
  /* width: 100%;
  height: 100%; */
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};@media (max-width: 768px) {
    /* align-items: center; */
    /* margin-left:5px;    margin-top: -350px;
    margin-bottom: 20px; */



 }
`;
