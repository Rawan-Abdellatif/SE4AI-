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
        <Grid item xs={12} md={12} lg={12} xl={12}>

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
        <Button isDarkMode={isDarkMode}>
       
        <div >Next</div>
     
        <a href="/training-program/objectives"> 
         <div> Program Objective{" "} 
            {/* <Icon> */}
              <MdKeyboardDoubleArrowRight />
            {/* </Icon>  */}
            </div>
          </a>
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
    /* height:100%; */
      /* margin-left: 50px; */
margin:-25px -5px;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  display:flex;
  flex-wrap:wrap;
  max-width: 880px; /* Adjust the maximum width as needed */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* border:2px solid red; */@media screen and (min-width: 1700px) {
    /* align-items: center; */
    margin-left: calc(20% - 120px); 
    /* margin-top: calc(5% - 250px);  */
    /* max-width: 3000px; /* Adjust the maximum width as needed */
  }
`;
const Title = styled.h1`

  font-weight: bold;
  font-size: 47px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;
const Details = styled.div`
margin-top:-5px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* width: 1700px; */
  line-height: 1.7em;
  font-size: 16px; 
margin-bottom:15px;
`;

const Details2 = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  margin-top:5px;  
 /* max-width: 890px;  */
   line-height: 1.7em;
  font-size: 16px;
  margin-bottom: 50px;
  /* border:2px solid green; */
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

`;
const Ul = styled.ul` 
  margin-top:-40px;
  /* width: 1500px; */
  width:100%;
  list-style-type: disc;
  font-size: 16px;
  line-height: 1.9rem;
/* border:2px solid green; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Li = styled.li`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  padding-top:-20px;
  font-size: 17px;
width:100%;
`;
const Button = styled.button`
  width: 100%; /* Set the width to 100% */
  max-width: 380px; /* Adjust the maximum width as needed */
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
  border: 1px solid #606770;
  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  div{
    margin-left:100px;
padding-left:0px;    width:180px;
    /* border:2px solid yellow; */
  }

  a {
    padding-left:0px;
    /* border:3px solid yellow; */
    display: flex;
    flex-direction: row;
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
    /* margin-right:-20px; */
    /* padding-right:0; */
 }


  @media screen and (max-width: 480px) {
    max-width: 170px;  
     height: 90px;
    div{
      margin-left:-127px;
      /* padding-left:0px;  */
    }
    a {
         }}
`;

const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
const Div=styled.div` 
  /* margin-left:150px; */
  border:2px solid orange;
  /* margin-left:37px;
padding-left:100px; */
    width:20px;
`