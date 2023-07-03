import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Engineering from "./svg/component_engineering.svg";
import Social from "./svg/component_social.svg";
import Courses from "./svg/component_courses.svg";
import Professional from "./svg/component_professional.svg";
import Engagement from "./svg/component_engagement.svg";
import Leadership from "./svg/component_leadership.svg";

const smallContainerData = [
  {
    imgSrc: Engineering,
    alt: "component_engineering",
    title: "Engineering AI Systems",
    mainText:
      "Provides trainees with the technical software engineering background in the context of AI-based software systems",
  },
  {
    imgSrc: Social,
    alt: "component_Social",
    title: "Social Aspects for AI Systems",
    mainText:
      "Provides trainees with knowledge on various social aspects that AI-based systems need to consider, e.g., privacy, ethics, equity, diversity, inclusion (EDI), guided by human rights and sustainable development goals (SDG)",
  },
  {
    imgSrc: Courses,
    alt: "component_courses",
    title: "Specialization Courses",
    mainText:
      "A curated set of SE, AI, and social aspects courses to strengthen the trainees's specialization. Trainees will select courses that best fit interests.",
  },
  {
    imgSrc: Professional,
    alt: "component_professional",
    title: "Professional Development",
    mainText:
      "Provides training modules on professional skills in the context of AI-Software Systems.",
  },
  {
    imgSrc: Engagement,
    alt: "component_engagement",
    title: "Industrial Engagement",
    mainText:
      "Provides trainees with special internship opportunities with our industrial partners and collaborating partners.",
  },
  {
    imgSrc: Leadership,
    alt: "component_leadership",
    title: "Leadership and Mentorship Training",
    mainText:
      "Provides trainees with specialized training on the critical evaluation of AI-based software systems and related publications.",
  },
];

const SecondContent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(
        (prevIndex) => (prevIndex + 1) % smallContainerData.length
      );
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const currentSmallContainerData = smallContainerData[currentIndex];

  return (
    <Container>
      <TextContent>
        A Unique, Comprehensive Program that Focuses on
        <RedText> Academic</RedText>, <RedText>Practical</RedText>, and
        <RedText> Professional</RedText> Skills
      </TextContent>
      <MainContainer>
        <FirstLine>
          <SmallContainer>
            <Img
              src={currentSmallContainerData.imgSrc}
              alt={currentSmallContainerData.alt}
            />
            <Text>
              <Title>{currentSmallContainerData.title}</Title>
              <Main>{currentSmallContainerData.mainText}</Main>
            </Text>
          </SmallContainer>
        </FirstLine>
      </MainContainer>
    </Container>
  );
};

export default SecondContent;

// Rest of the code...

const Container = styled.div`
  background-color: black;
  padding: 50px 0;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

const TextContent = styled.div`
  color: white;
  margin: 0 auto 40px;
  font-weight: bold;
  font-size: 30px;
  max-width: 900px;
  font-family: "Open Sans", sans-serif;
`;

const RedText = styled.span`
  color: #db7093;
`;

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 2000px;
  margin-left: 90px;
`;

const FirstLine = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  margin-bottom: 50px;
  /* max-width: 1200px; */
`;

const SecondLine = styled.div`
  display: flex;
  justify-content: center;
`;

const Img = styled.img`
  width: 200px;
  height: 200px;
`;

const SmallContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Text = styled.div`
  margin-top: 20px;
  color: white;
  padding-left: 25px;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 10px;
`;

const Main = styled.div`
  font-size: 15px;
  line-height: 1.5;
  text-align: center;
  width: 314px;
`;
