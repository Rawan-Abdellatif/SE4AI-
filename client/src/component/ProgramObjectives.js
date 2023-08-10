import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import ProgramSidebar from "./ProgramSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const ProgramObjectives = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>
      <ProgramSidebar />
      <MainContent>
        <Title isDarkMode={isDarkMode}>Program Objectives</Title>
        <Details isDarkMode={isDarkMode}>
          The objective of the SE4AI CREATE program is to fill the major
          shortage in HQP that can develop, deploy and service AI-based software
          systems and equally provide the HQP with a solid background on ethical
          and social understanding of AI. Our program is driven by six key
          training objectives:
        </Details>
        <Ul isDarkMode={isDarkMode}>
          <Li isDarkMode={isDarkMode}>
            Prepare trainees that are knowledgeable in both technical and social
            aspects needed to develop, deploy and service AI-based software
            systems.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Provide trainees with real-life experiences where they can be
            exposed to challenges and best practices involving the development
            of AI-based software systems.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Bridge the gap between practice and academia by offering trainees
            opportunities to interact closely with practitioners and
            non-technical disciplines in order to train them on effective
            methods to communicate impactful and sustainable academic
            innovations.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Provide trainees with opportunities to develop highly sought-after
            professional skills such as communication, collaboration,
            leadership, entrepreneurship, and mentorship.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Expose trainees to the latest research (both technical and social
            aspects) in the development, deployment, and servicing of AI-based
            software systems and ensure that, by completing world-class research
            projects and theses, they will be prepared to play leadership roles
            in shaping the future of this very important area.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Enable trainees to customize their training program to better suit
            their needs and aspirations.
          </Li>
        </Ul>
        <Button isDarkMode={isDarkMode}>
          <Button1 isDarkMode={isDarkMode}>
            Previous
            <a href="/intro">
              {" "}
              <Icon>
                <MdKeyboardDoubleArrowLeft />
              </Icon>
              Program Overview
            </a>
          </Button1>{" "}
          <Button2 isDarkMode={isDarkMode}>
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
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;

const MainContent = styled.div`
  /* flex: 1; */
  margin-left: 20px;
  padding-top: -40px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")}; 
    @media (max-width: 768px) {
    flex-direction:row;
    width:50%;
margin-left:5px; 
 }
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 45px;
  /* color: black; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};   @media (max-width: 768px) {
    flex-direction:row;
    
margin-left:5px; 
 }
`;
const Details = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  width: 700px;
  line-height: 1.7em;
  font-size: 17px;   @media (max-width: 768px) {
    flex-direction:row;
    width:360px;;
margin-left:5px; 
 }
`;
const Ul = styled.ul`
  list-style-type: disc;
  padding-top: 20px;
  font-size: 15px;
  line-height: 1.7em;
  width: 700px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};   @media (max-width: 768px) {
    flex-direction:row;
    width:320px;;

margin-left:2px; 
 }
`;
const Li = styled.li`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
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
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  border: 1px solid #e8e8e8; 
  @media (max-width: 768px) {
    /* flex-direction:row; */
    width:150px;
    height:100px;
    padding-left:117px;
    margin-right:5px;
 }
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
    font-weight: bold;@media (max-width: 768px) {
    width:100px;
  padding-left:20px;}
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
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  @media (max-width: 768px) {
    /* flex-direction:row; */
    width:150px;
    height:100px;
    padding-right:120px;
    margin-left:5px;
 }
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
    font-weight: bold;@media (max-width: 768px) {
    width:100px;}
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row; 
  /* padding-left: 2px; */   
`;
