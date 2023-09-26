import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import Engineering from "./svg/component_engineering.svg";
import Social from "./svg/component_social.svg";
import Courses from "./svg/component_courses.svg";
import Professional from "./svg/component_professional.svg";
import Engagement from "./svg/component_engagement.svg";
import Leadership from "./svg/component_leadership.svg";

const SecondContent = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
      <TextContent isDarkMode={isDarkMode}>
        A Unique, Comprehensive Program that Focuses on
        <RedText className="red-text"> Academic</RedText>,{" "}
        <RedText className="red-text">Practical</RedText>, and
        <RedText className="red-text"> Professional</RedText> Skills
      </TextContent>
      <MainContainer>
        <FirstLine>
          <SmallContainer>
            <Img src={Engineering} alt="component_engineering" />
            <Text>
              <Title className="title" isDarkMode={isDarkMode}>
                Engineering AI Systems
              </Title>
              <Main className="main" isDarkMode={isDarkMode}>
                Provides trainees with the technical software engineering
                background in the context of AI-based software systems
              </Main>
            </Text>
          </SmallContainer>
          <SmallContainer>
            <Img src={Social} alt="component_Social" />
            <Text>
              <Title className="title" isDarkMode={isDarkMode}>
                Social Aspects for AI Systems
              </Title>
              <Main className="main" isDarkMode={isDarkMode}>
                Provides trainees with knowledge on various social aspects that
                AI-based systems need to consider, e.g., privacy, ethics,
                equity, diversity, inclusion (EDI), guided by human rights and
                sustainable development goals (SDG)
              </Main>
            </Text>
          </SmallContainer>
          <SmallContainer>
            <Img src={Courses} alt="component_courses" />
            <Text>
              <Title className="title" isDarkMode={isDarkMode}>
                Specialization Courses
              </Title>
              <Main className="main" isDarkMode={isDarkMode}>
                A curated set of SE, AI, and social aspects courses to
                strengthen the trainees's specialization. Trainees will select
                courses that best fit interests.
              </Main>
            </Text>
          </SmallContainer>
        </FirstLine>
        <SecondLine>
          <SmallContainer>
            <Img src={Professional} alt="component_professional" />
            <Text>
              <Title className="title" isDarkMode={isDarkMode}>
                Professional Development
              </Title>
              <Main className="main" isDarkMode={isDarkMode}>
                Provides training modules on professional skills in the context
                of AI-Software Systems.
              </Main>
            </Text>
          </SmallContainer>
          <SmallContainer>
            <Img src={Engagement} alt="component_engagement" />
            <Text>
              <Title className="title" isDarkMode={isDarkMode}>
                Industrial Engagement
              </Title>
              <Main className="main" isDarkMode={isDarkMode}>
                Provides trainees with special internship opportunities with our
                industrial partners and collaborating partners.
              </Main>
            </Text>
          </SmallContainer>
          <SmallContainer>
            <Img src={Leadership} alt="component_leadership" />
            <Text isDarkMode={isDarkMode}>
              <Title className="title" isDarkMode={isDarkMode}>
                Leadership and Mentorship Training
              </Title>
              <Main className="main" isDarkMode={isDarkMode}>
                Provides trainees with specialized training on the critical
                evaluation of AI-based software systems and related
                publications.
              </Main>
            </Text>
          </SmallContainer>
        </SecondLine>
      </MainContainer>
    </Container>
  );
};

export default SecondContent;

const Container = styled.div`
  /* background-color: black; */
  padding: 20px 0;
  text-align: center;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  @media (max-width: 995px) {
    flex-direction: column; /* Display items in a column on mobile */
    align-items: center;
margin-left:0px;  }
`;

const TextContent = styled.h2`

  font-weight: 800;  
  display: inline-block;
  align-items:0.05rem;
    font-size: 2rem;
    margin-bottom:1rem;
    max-width: 855px;
    text-align: center;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 
  @media (max-width: 995px) {
width:350px;  
/* margin-left:-30px; \ */
} 
`;

const RedText = styled.span`
  color: #BB5A7D;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  /* max-width: 2000px; */
  /* margin-left: 90px; */
  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
`;

const FirstLine = styled.div`
  display: flex;
  margin-top:23px;
  justify-content: center;
  gap: 80px;
  /* border:2px solid green; */
  margin-bottom: 50px;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};

  @media (max-width: 995px) {
    flex-direction: column; /* Display items in a column on mobile */
    align-items: center;
    gap: 20px;
    margin-bottom: 30px;
  }`;

const SecondLine = styled.div`
  display: flex;
  gap:80px;
  /* border:2px solid green; */
  justify-content: center;
  @media (max-width: 995px) {
    flex-direction: column; /* Display items in a column on mobile */
    align-items: center;
 }
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
  align-items: center;
text-align:center;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
width:360px; 
/* border:2px solid yellow; */
/* padding-right:40px; */
/* padding-left:40px; */
 color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
  @media (max-width: 995px) {
    align-items: center;
    /* padding-right:0px; */

}
`;


const Text = styled.div`
  margin-top: 10px;
  color: black;
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
/* font-size:40px; */
/* border:2px solid orange; */
  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 15px;
  text-align: center;

  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
`;

const Main = styled.div`
  font-size: 15px;
/* margin-left:15px;  */
display: block;
    /* margin-block-start: 1em;
    margin-block-end: 1em;
    margin-inline-start: 0px; */
    /* margin-inline-end: 0px; */
      line-height: 1.8;
  text-align: center;
width:357px;/* margin-right:40px; */
  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
  @media (max-width: 995px) {
    flex-direction: column; /* Display items in a column on mobile */
    align-items: center;
margin-left:0px;  }
`;
