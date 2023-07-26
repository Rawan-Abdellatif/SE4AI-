import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import ProgramSidebar from "./ProgramSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import ProgramComponentRightSidebar from "./ProgramComponentRightSidebar";
const ProgramComponents = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>
      <ProgramSidebarContainer isDarkMode={isDarkMode}>
        <ProgramSidebar />
      </ProgramSidebarContainer>
      <MainContent isDarkMode={isDarkMode}>
        <Title isDarkMode={isDarkMode}>Program components</Title>
        <Subtitle
          id="engineering-ai-based-software-systems"
          isDarkMode={isDarkMode}
        >
          Engineering AI-based Software Systems​
          <a href="#engineering-ai-based-software-systems"> #</a>
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          The main focus of the course is on the interconnection of SE+AI and
          how these topics apply for AI-based systems. For example, issues
          related to CI/CD during development while handling large training data
          and managing model evolution and tracking accuracy as the AI-based
          software systems evolve are unique aspects that will be covered in
          this course. As part of the course, trainees will conduct a hands-on
          project with our industrial partners where they will exercise the
          theory learned in the course. Trainees will have the option to either
          study an existing AI-based system or develop a new system as part of
          the project. Trainees will prepare case reports about their projects.
          The prepared cases will be used in following years to enrich our
          training and will be disseminated to the international community.
        </Details>
        <Details isDarkMode={isDarkMode}>
          Although the course will mainly focus on the engineering of AI-based
          systems, trainees will be asked to reflect on the social aspects and
          how they influenced the engineering aspects of the system.
        </Details>
        <Subtitle
          id="social-aspects-for-ai-based-software-system"
          isDarkMode={isDarkMode}
        >
          Social Aspects for AI-based Software System{" "}
          <a href="#social-aspects-for-ai-based-software-system"> #</a>
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          A newly developed course that focuses on various social criteria that
          AI-based systems need to consider, e.g., privacy, ethics, equity,
          diversity, inclusion (EDI), human rights and sustainable development
          goals (SDG). Trainees will be introduced to the fundamental theories,
          normative frameworks and ethical concepts and will learn to apply them
          on AI-based systems. To gain applied knowledge on the concepts they
          are taught, trainees will be provided with existing AI-based systems,
          or can use their projects from the Engineering AI-based Software
          Systems course, and will be asked to write a report on these systems.
          The reports will examine the various social aspects of the system
          being studied and report on how these aspects have been considered (or
          not) in the studied systems. Trainees will be asked to come up with an
          ethical assessment and concrete recommendations for such systems,
          while considering the engineering implications of their
          recommendations.
        </Details>
        <Subtitle id="professional-development-modules" isDarkMode={isDarkMode}>
          Professional Development Modules​
          <a href="#professional-development-modules"> #</a>
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          SE4AI CREATE trainees will be offered the opportunity to go on one or
          more internships with our industrial partners. Master’s trainees will
          typically serve a single four-month internship, typically after their
          second term in the program. PhD trainees will typically serve two
          four-month internships. Trainees will be supported by their academic
          supervisors and the relevant contact at the host partner.
        </Details>
        <Subtitle id="industrial-embedding" isDarkMode={isDarkMode}>
          {" "}
          Industrial Embedding​
          <a href="#industrial-embedding"> #</a>
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          SE4AI CREATE trainees will be offered the opportunity to go on one or
          more internships with our industrial partners. Master’s trainees will
          typically serve a single four-month internship, typically after their
          second term in the program. PhD trainees will typically serve two
          four-month internships. Trainees will be supported by their academic
          supervisors and the relevant contact at the host partner.
        </Details>
        <Subtitle id="industry-webinars-or-seminars" isDarkMode={isDarkMode}>
          {" "}
          Industry Webinars or Seminars​
          <a href="#industry-webinars-or-seminars"> #</a>
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          All trainees will have the opportunity to present at least one online
          webinar and/or an on-site seminar to one or more industrial partners.
        </Details>
        <Details isDarkMode={isDarkMode}>The seminars will:</Details>
        <Ul isDarkMode={isDarkMode}>
          <Li isDarkMode={isDarkMode}>
            Provide trainees with hands-on real-life presentation experience to
            an academic and non-academic audience.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Provide trainees with an opportunity to expand their professional
            network for post-graduation hiring opportunities.
          </Li>
          <Li isDarkMode={isDarkMode}>
            Communicate some of the academic innovations to practitioners and
            academics,
          </Li>
        </Ul>
        <Subtitle id="specialization-courses" isDarkMode={isDarkMode}>
          {" "}
          Specialization Courses​
          <a href="#specialization-courses"> #</a>
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          Trainees of the SE4AI CREATE program will take one or more
          specialization course from a curated list of courses on SE, AI, and
          Social concepts. The exact number of specialization courses depends on
          the trainee’s home institution and program.
        </Details>
        <Details isDarkMode={isDarkMode}>
          Specialization courses include courses in (not a complete list):
          Software Analytics, Software Quality, Software Testing, Product Lines,
          Software Re-engineering, Software Architecture, Advanced Concepts in
          Cloud Computing, Neural Network, Reinforcement Learning, Deep
          Learning, Advanced AI, Ethics, Development and Global Engineering, and
          EDI in STEM. The aforementioned list is a preliminary list that will
          change and evolve. Protocols are already in place to allow trainees to
          obtain credit for courses taken at non-home institutions to maximize
          the number of specialization courses available to our trainees. The
          exact specialization course(s) a trainee will take will be determined
          in consultation with their supervisor.
        </Details>
        <Subtitle
          id="hands-on-leadership-and-mentorship-training"
          isDarkMode={isDarkMode}
        >
          {" "}
          Hands-on Leadership and Mentorship Training​
          <a href="#hands-on-leadership-and-mentorship-training"> #</a>
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          To position trainees to be successful and socially responsible leaders
          in their field the SE4AI CREATE incorporates hands-on leadership and
          mentorship training. This training is achieved through a multitude of
          mechanisms. Trainees will serve as mentors-in-training (MIT) along
          supervisors to more junior trainees. For example, PhD students and
          postdocs can serve as MITs to undergrad and MSc, and PhD trainees,
          respectively. MITs will be trained to incorporate EDI principles in
          leadership, including equity aspects in collaboration, evaluation and
          assessment (e.g. counteracting gender, racial, cultural and language
          bias), as well as equitable modes of collaboration (e.g. monitoring
          speaking time in group meeting to give everybody the opportunity to
          participate and contribute). To ensure a comprehensive training of the
          MITs, they will be given the option to mentor trainees in all aspects,
          i.e., proposing research projects, supporting progress, as well as
          advising them on technical writing, presentation, and research
          methodology issues.
        </Details>
        <Button isDarkMode={isDarkMode}>
          {" "}
          Previous
          <a href="/training-program/objectives">
            {" "}
            <Icon>
              <MdKeyboardDoubleArrowLeft />
            </Icon>
            Program Objectives
          </a>
        </Button>
      </MainContent>
      <ProgramComponentRightSidebar />
    </Container>
  );
};
export default ProgramComponents;
// This part for css part
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
`;

const MainContent = styled.div`
  /* flex: 1; */
  margin-left: 20px;
  padding-top: -40px;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 45px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Details = styled.div`
  padding-top: 15px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  width: 700px;
  line-height: 1.7em;
  font-size: 15px;
`;
const Subtitle = styled.div`
  padding-top: 30px;
  font-size: 30px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  font-weight: bold;
  text-decoration: none;
  a {
    color: ${(props) => (props.isDarkMode ? "#181818" : "#484848")};
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: #bb5a7d;
    border-bottom: 3px solid #bb5a7d;
  }
`;
const Ul = styled.ul`
  list-style-type: disc;
  padding-top: 20px;
  font-size: 15px;
  line-height: 1.7em;
  width: 700px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Li = styled.li`
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  font-size: 15px;
  margin-bottom: 10px;
`;
const Button = styled.button`
  width: 370px;
  height: 70px;
  background-color: inherit;
  margin-top: 50px;
  margin-bottom: 50px;
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
const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
const ProgramSidebarContainer = styled.div`
  position: sticky;
  top: 10px; /* Adjust this value to set the distance from the top of the viewport */
  margin-bottom: 240px; /* Adjust this value to set the distance from the bottom of the viewport */
`;
