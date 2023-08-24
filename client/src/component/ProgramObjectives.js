import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import ProgramSidebar from "./ProgramSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import {Grid} from "@mui/material"

const ProgramObjectives = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>
      <ProgramSidebar />
      <MainContent>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flex: 1, padding: "20px" }}
      >
        <Grid item xs={10} md={6} lg={6} xl={12}>

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
        </Grid>
      </Grid>
      </MainContent>
      
    </Container>
  );
};
export default ProgramObjectives;
// This part for css part
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;

const MainContent = styled.div`
  /* border-left: ${(props) =>
    props.isDarkMode ? "1px solid #D0D0D0" : "1px solid #D0D0D0"}; */
  /* padding-left: -20px; */
  width: 100%; /* Set the width to 90% of the available space */
  max-width: 1000px; /* Adjust the maximum width as needed */
  padding-left:-20px;
  margin: -20px auto; /* Center the content horizontally */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
height:100%;
`;



const Title = styled.h1`
  font-weight: bold;
  font-size: 45px;
  /* color: black; */
  color: ${(props) => (props.isDarkMode ? "white" : "black")};  

`;
const Details = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
width:100%;
  line-height: 1.7em;
  font-size: 17px;  

`;
const Ul = styled.ul`
  list-style-type: disc;
  padding-top: 20px;
  font-size: 15px;
  line-height: 1.7em;
width:100%;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};   

`;
const Li = styled.li`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  font-size: 15px;
  margin-bottom: 10px;
`;
const Button2 = styled.button`
  width: 100%;
  height: 70px;
  background-color: inherit;
  margin-bottom: 30px;
  margin-left: 50px;
  border-radius: 5px;
  justify-content: flex-end; /* Align the content to the right */
  align-items: center; /* Center the content vertically */
  /* padding-left: 270px; */
  align-items: center; /* Center the content vertically */
  padding-right: 20px;
  padding-top: -2px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.7em;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  border: 1px solid #e8e8e8; 


  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  a {
    display: flex;
    flex-direction: row;
    width: 100%; /* Set the width to 100% */
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
    justify-content: center; /* Center the content horizontally */

  }
`;

const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
const Button1 = styled.button`
  width: 100%;
  height: 70px;
  background-color: inherit;
  margin-bottom: 30px;
  margin-left: 2px;
  justify-content: flex-end; /* Align the content to the right */
  align-items: center; /* Center the content vertically */
  padding-right: 20px; /* Add some right padding to the button */
  border-radius: 5px;
  /* padding-left: 270px; */
  padding-top: -2px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.7em;
  border: 1px solid #e8e8e8;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};


  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  a {
    display: flex;
    flex-direction: row;
    width: 100%; /* Set the width to 100% */
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
    justify-content: center; /* Center the content horizontally */
  }
`;
const Button = styled.div`
  display: flex;
  flex-direction: row; 
  /* padding-left: 2px; */   
`;
