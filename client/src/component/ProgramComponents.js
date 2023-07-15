import React from "react";
import styled from "styled-components";
import ProgramSidebar from "./ProgramSidebar";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
const ProgramComponents = () => {
  return (
    <Container>
      <ProgramSidebar />
      <MainContent>
        <Title>Program components</Title>
        <Subtitle id="engineering-ai-based-software-systems">
          Engineering AI-based Software Systems​
          <a href="#engineering-ai-based-software-systems"> #</a>
        </Subtitle>
        <Details>
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
        <Details>
          Although the course will mainly focus on the engineering of AI-based
          systems, trainees will be asked to reflect on the social aspects and
          how they influenced the engineering aspects of the system.
        </Details>
        <Subtitle id="professional-development-modules">
          {" "}
          Professional Development Modules​
          <a href="#professional-development-modules"> #</a>
        </Subtitle>
        <Details>
          SE4AI CREATE trainees will be offered the opportunity to go on one or
          more internships with our industrial partners. Master’s trainees will
          typically serve a single four-month internship, typically after their
          second term in the program. PhD trainees will typically serve two
          four-month internships. Trainees will be supported by their academic
          supervisors and the relevant contact at the host partner.
        </Details>
        <Subtitle id="industry-webinars-or-seminars">
          {" "}
          Industry Webinars or Seminars​
          <a href="#industry-webinars-or-seminars"> #</a>
        </Subtitle>
        <Details>
          All trainees will have the opportunity to present at least one online
          webinar and/or an on-site seminar to one or more industrial partners.
        </Details>
        <Details>The seminars will:</Details>
        <Ul>
          <Li>
            Provide trainees with hands-on real-life presentation experience to
            an academic and non-academic audience.
          </Li>
          <Li>
            Provide trainees with an opportunity to expand their professional
            network for post-graduation hiring opportunities.
          </Li>
          <Li>
            Communicate some of the academic innovations to practitioners and
            academics,
          </Li>
        </Ul>
        <Subtitle id="specialization-courses">
          {" "}
          Specialization Courses​
          <a href="#specialization-courses"> #</a>
        </Subtitle>
        <Details>
          Trainees of the SE4AI CREATE program will take one or more
          specialization course from a curated list of courses on SE, AI, and
          Social concepts. The exact number of specialization courses depends on
          the trainee’s home institution and program.
        </Details>
        <Details>
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
        <Subtitle id="hands-on-leadership-and-mentorship-training">
          {" "}
          Hands-on Leadership and Mentorship Training​
          <a href="#hands-on-leadership-and-mentorship-training"> #</a>
        </Subtitle>
        <Details>
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
        <Button>
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
  color: #bb5a7d;
`;
const Title = styled.h1`
  font-weight: bold;
  font-size: 45px;
  color: black;
`;
const Details = styled.div`
  padding-top: 15px;
  color: black;
  width: 700px;
  line-height: 1.7em;
  font-size: 15px;
`;
const Subtitle = styled.div`
  padding-top: 30px;
  font-size: 30px;
  color: black;
  font-weight: bold;
  text-decoration: none;
  a {
    color: white;
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
`;
const Li = styled.li`
  color: black;
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
const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
