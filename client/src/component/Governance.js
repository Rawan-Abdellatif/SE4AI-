import React from "react";
import styled from "styled-components";

import ProgramCommittee from "./ProgramCommiittee";
import SteeringCommittee from "./SteeringCommittee";
const Governance = () => {
  return (
    <Container>
      <Title>Governance</Title>
      <Subtitles>
        <RedText>P</RedText>rogram Committee
      </Subtitles>
      <ProgramCommittee />
      <Subtitles>
        <RedText>S</RedText>teering Committee
      </Subtitles>
      <SteeringCommittee />
    </Container>
  );
};

export default Governance;

// CSS styles

const Title = styled.div`
  font-weight: bold;
  padding-top: 45px;
  font-size: 45px;
  color: #484848;
  padding-bottom: 50px;
  border-bottom: 2px solid #f0f0f0;
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
const Img = styled.img`
  width: 270px;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;
const Container = styled.div`
  margin-top: 10px;
  margin-left: 100px;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  width: 100%;
`;

const MiniContainer = styled.div`
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 10px;
  border: 2px solid #f4f0ec;
  padding-top: 0px;
  width: 270px;
  height: 400px;
  &.emadContainer {
    height: 450px;
  }
`;

const MiddContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px;
`;
const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 15px;
`;

const Job = styled.div`
  margin-left: 15px;
`;

const Links = styled.div`
  color: #404040;
  font-weight: bold;
  padding-right: 40px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #404040;
  }
  /* li {
    width: 80px;
  } */
`;

const SocialMedia = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  height: 50px;
  margin-left: 15px;

  a {
    display: flex;
    /* align-items: center; */
    text-align: center;
    text-decoration: none;
    color: #404040;
    padding: 5px 5px;
    transition: background-color 0.3s;
    border-radius: 5px;
    /* margin-right: 5px; */
  }

  a:hover {
    background-color: #e8e8e8;
  }
`;

const SmallIcon = styled.span`
  font-size: 20px;
  color: #585858;
  font-weight: bold;
  margin-right: 7px;
`;

const KnowMore = styled.span`
  margin-right: 3px;
  color: #585858;
  font-size: 15px;
`;
