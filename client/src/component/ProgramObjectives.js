import React from "react";
import styled from "styled-components";
import ProgramSidebar from "./ProgramSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const ProgramObjectives = () => {
  return (
    <Container>
      <ProgramSidebar />
      <MainContent>
        <Title>Program Objectives</Title>
        <Details>
          The objective of the SE4AI CREATE program is to fill the major
          shortage in HQP that can develop, deploy and service AI-based software
          systems and equally provide the HQP with a solid background on ethical
          and social understanding of AI. Our program is driven by six key
          training objectives:
        </Details>
        <Ul>
          <Li>
            Prepare trainees that are knowledgeable in both technical and social
            aspects needed to develop, deploy and service AI-based software
            systems.
          </Li>
          <Li>
            Provide trainees with real-life experiences where they can be
            exposed to challenges and best practices involving the development
            of AI-based software systems.
          </Li>
          <Li>
            Bridge the gap between practice and academia by offering trainees
            opportunities to interact closely with practitioners and
            non-technical disciplines in order to train them on effective
            methods to communicate impactful and sustainable academic
            innovations.
          </Li>
          <Li>
            Provide trainees with opportunities to develop highly sought-after
            professional skills such as communication, collaboration,
            leadership, entrepreneurship, and mentorship.
          </Li>
          <Li>
            Expose trainees to the latest research (both technical and social
            aspects) in the development, deployment, and servicing of AI-based
            software systems and ensure that, by completing world-class research
            projects and theses, they will be prepared to play leadership roles
            in shaping the future of this very important area.
          </Li>
          <Li>
            Enable trainees to customize their training program to better suit
            their needs and aspirations.
          </Li>
        </Ul>
        <Button>
          <Button1>
            Previous
            <a href="/intro">
              {" "}
              <Icon>
                <MdKeyboardDoubleArrowLeft />
              </Icon>
              Program Overview
            </a>
          </Button1>{" "}
          <Button2>
            Next
            <a href="/training-program/components">
              Program Components
              <Icon>
                <MdKeyboardDoubleArrowRight />
              </Icon>
            </a>
          </Button2>
        </Button>
      </MainContent>
    </Container>
  );
};
export default ProgramObjectives;
// This part for css part
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
`;

const MainContent = styled.div`
  /* flex: 1; */
  margin-left: 20px;
  padding-top: -40px;
  color: #bb5a7d;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 45px;
  color: black;
`;
const Details = styled.div`
  color: black;
  width: 700px;
  line-height: 1.7em;
  font-size: 17px;
`;
const Ul = styled.ul`
  list-style-type: disc;
  padding-top: 20px;
  font-size: 15px;
  line-height: 1.7em;
  width: 700px;
`;
const Li = styled.li`
  color: black;
  font-size: 15px;
  margin-bottom: 10px;
`;
const Button2 = styled.button`
  width: 370px;
  height: 70px;
  background-color: inherit;
  margin-bottom: 30px;
  margin-left: 50px;
  border-radius: 5px;
  padding-left: 270px;
  padding-top: -2px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.7em;
  color: #585858;

  border: 1px solid #e8e8e8;
  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  a {
    display: flex;
    flex-direction: row;
    width: 200px;
    margin-left: -120px;
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
  }
`;
const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
const Button1 = styled.button`
  width: 370px;
  height: 70px;
  background-color: inherit;
  margin-bottom: 30px;
  margin-left: 2px;
  padding-right: 270px;
  border-radius: 5px;
  /* padding-left: 270px; */
  padding-top: -2px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.7em;
  border: 1px solid #e8e8e8;
  color: #585858;

  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  a {
    display: flex;
    flex-direction: row;
    width: 200px;
    margin-left: 5px;
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row;
  /* padding-left: 2px; */
`;
