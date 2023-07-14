// This is the Team Page
import React from "react";
import styled from "styled-components";

//import pictures
import ProgramLeadership from "./ProgramLeadership";
import Adminstrations from "./Adminstrations";
import Postdocs from "./Postdocs";
import Alumni from "./Alumni";
import Students from "./Students";

const Team = () => {
  return (
    <Container>
      <Title>Our Team</Title>
      <Subtitles>
        <RedText>P</RedText>rogram Leadership
      </Subtitles>
      <ProgramLeadership />
      <Subtitles>
        <RedText>A</RedText>dministration
      </Subtitles>
      <Adminstrations />
      <Subtitles>
        {" "}
        <RedText>P</RedText>ostdocs
      </Subtitles>
      <Postdocs />
      <Subtitles>
        {" "}
        <RedText>A</RedText>lumni
      </Subtitles>
      <Alumni />
      <Subtitles>
        {" "}
        <RedText>S</RedText>tudents
      </Subtitles>
      <Students />
    </Container>
  );
};
export default Team;
//style of all of the page
const Container = styled.div`
  margin-top: 10px;
  margin-left: 100px;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  padding-top: 45px;
  font-size: 45px;
  color: #484848;
  padding-bottom: 50px;
  border-bottom: 2px solid #f0f0f0;
`;

const Img = styled.img`
  width: 270px;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Subtitles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
`;

const RedText = styled.span`
  color: #bb5a7d;
`;
