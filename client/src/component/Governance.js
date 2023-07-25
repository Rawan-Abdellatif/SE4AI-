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
  font-weight: bold;
  margin-top: 0;
  padding-left: 100px;
  padding-top: 45px;
  font-size: 45px;
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  padding-bottom: 50px;
  border-bottom: 2px solid
    ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "#ffffff")};
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

const Container = styled.div`
  margin-top: 0px;
  margin-left: -10px;
  margin-right: -10px;
  /* margin-left: 100px; */
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  /* width: 100%; */
`;

const Main = styled.div`
  margin-top: 0;
  padding-left: 100px;
  /* width: 100%;
  height: 100%; */
  background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};
`;
