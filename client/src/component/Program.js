import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import ProgramSidebar from "./ProgramSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
const Program = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>
      <ProgramSidebar />
      <MainContent isDarkMode={isDarkMode}>
        {" "}
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
          Next
          <a href="/training-program/objectives">
            Program Objective{" "}
            <Icon>
              <MdKeyboardDoubleArrowRight />
            </Icon>
          </a>
        </Button>
      </MainContent>
    </Container>
  );
};
export default Program;
// This part for css part
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  @media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:0px;  
width:320px;

}
`;

const MainContent = styled.div`
  /* flex: 1; */
  margin-left: 20px;
  padding-top: -40px;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")}; @media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:0px;  
width:380px;

}
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 45px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Details = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  width: 700px;
  line-height: 1.7em;
  font-size: 17px; @media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:0px;  
width:380px;

}
`;
const Details2 = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  width: 700px;
  line-height: 1.7em;
  font-size: 17px;
  padding-top: 23px;
  margin-bottom: 70px; @media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:0px;  
width:380px;

}
`;
const Ul = styled.ul`
  list-style-type: disc;
  padding-top: 20px;
  font-size: 17px;
  line-height: 1.7em;
  width: 700px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Li = styled.li`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  font-size: 17px;
  margin-bottom: 10px; @media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:0px;  
width:350px; 


}
`;
const Button = styled.button`
  width: 350px;
  height: 70px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  background-color: inherit;
  margin-bottom: 30px;
  margin-left: 450px;
  border-radius: 5px;
  padding-left: 270px;
  padding-top: -2px;
  font-size: 15px;
  line-height: 1.7em;
  border: 1px solid #e8e8e8;
  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  a {
    display: flex;
    flex-direction: row;
    width: 200px;
    margin-left: -100px;
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
  } @media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:0px;  



}
`;
const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
