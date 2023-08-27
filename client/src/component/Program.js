import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import ProgramSidebar from "./ProgramSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import {Grid} from "@mui/material";
const Program = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>
      <ProgramSidebar />
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{ flex: 1, padding: "20px" }}
      >
        <Grid item xs={10} md={6} lg={6} xl={12}>

      <MainContent isDarkMode={isDarkMode}>

        <Title isDarkMode={isDarkMode}>Program Overview</Title>
        <Details isDarkMode={isDarkMode}>
          The field of Artificial Intelligence (AI) has seen significant demand
          and growth due to the recent explosion in datasets and breakthroughs
          in Machine Learning (ML) such as deep learning and reinforcement
          learning. Many organizations are leveraging the benefits of AI in
          real-world applications across numerous domains such as healthcare,
          finance, retail, security, and education. While AI-based systems are
          ultimately software systems, current Software Engineering (SE)
          research/training rarely considers the intricacies (both technical and
          social) of building AI-based software systems.
        </Details>
        <Details2 isDarkMode={isDarkMode}>
          The SE4AI CREATE is a unique training program that fills the major
          shortage in highly qualified personnel (HQP) that can develop, deploy
          and service AI-based software systems and equally provide the HQP with
          a solid background on ethical and social understanding of AI. The
          SE4AI CREATE will be delivered by a team of world-renowned experts,
          working closely with leading international and Canadian industrial
          partners. SE4AI CREATE achieves a number of novel and original
          training components:
        </Details2>
        <Ul isDarkMode={isDarkMode}>
          <Li isDarkMode={isDarkMode}>
            A specialized, newly developed course on Engineering AI-based
            Software Systems.
          </Li>
          <Li isDarkMode={isDarkMode}>
            A specialized, newly developed course on Social Aspects for AI-based
            Software System.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Professional Development for AI-based Software System Practitioners
            modules.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Industrial embedding where trainees will be offered the opportunity
            to serve one or more internships with our industrial partners.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Industry webinar and/or on-site seminars.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Carefully selected specialization courses on SE, AI, and social
            concepts.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Hands-on leadership and mentorship training where trainees will be
            coached on how to critically evaluate AI-based software systems,
            related projects and publications.
          </Li>
        </Ul>
        <Details2 isDarkMode={isDarkMode}>
          The SE4AI CREATE will prepare our next generation of trainees to take
          on leadership roles such as, team leads, entrepreneurs, policy makers,
          and professors.
        </Details2>    
        <Button isDarkMode={isDarkMode}> <div>
            Next
 
        <a href="/training-program/objectives">
         <div> Program Objective{" "}  </div>
            <Icon>
              <MdKeyboardDoubleArrowRight />
            </Icon>
          </a></div>
        </Button>
      </MainContent>
    
      </Grid>
      </Grid>
    </Container>
  );
};
export default Program;
// This part for css part
const Container = styled.div`
   display: flex;
  font-family: "Open Sans", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;

  width: 100%;
    /* height:100%; */

`;


const MainContent = styled.div`
  /* border-left: ${(props) =>
    props.isDarkMode ? "1px solid #D0D0D0" : "1px solid #D0D0D0"}; */
  /* margin-left: 5px; */
  display:flex;
  flex-wrap:wrap;
  max-width: 1000px; /* Adjust the maximum width as needed */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Title = styled.h1`

  font-weight: bold;
  font-size: 45px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;
const Details = styled.div`

  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* width: 800px; */
  line-height: 1.7em;
  font-size: 15px; 

`;

const Details2 = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};  
  /* width: 800px; */
  line-height: 1.7em;
  font-size: 15px;
  margin-bottom: 70px;

`;
const Ul = styled.ul` 
  margin-top:-40px;

  list-style-type: disc;
  font-size: 15px;
  line-height: 1.7em;
  /* width: 800px; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Li = styled.li`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  padding-top:-20px;
  font-size: 17px;
  /* margin-bottom: 10px;  */

`;
const Button = styled.button`
  width: 100%; /* Set the width to 100% */
  max-width: 370px; /* Adjust the maximum width as needed */
  height: 70px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  background-color: inherit;
  margin-bottom: 30px;
  /* padding-right:2px; */
  margin-left: auto; 
  border-radius: 5px;
  padding-left: 150px; /* Reset padding */
  /* padding-right: 150px; */
  padding-top: -2px;
  font-size: 15px;
  /* line-height: 1.7em; */
  border: 1px solid #e8e8e8;
  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  div{
    margin-right:0;
    padding-right:0;
  }
  a {
    padding-left:30px;
    /* border:3px solid yellow; */
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
    margin-right:0;
    padding-right:0;
 }
`;

const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
