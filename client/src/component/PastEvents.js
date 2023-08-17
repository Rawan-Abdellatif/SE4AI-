// This is the Events Page
import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
///// import all of photos
import apr252023Image from "../component/2022-09-21-past/apr252023.jpg";
import april32023Image from "../component/2022-09-21-past/april32023.jpg";
import wie1Image from "../component/2022-09-21-past/wie1.jpg";
import wie2Image from "../component/2022-09-21-past/wie2.jpg";
import wie3Image from "../component/2022-09-21-past/wie3.jpg";
import feb272023Image from "../component/2022-09-21-past/feb272023.jpg";
import feb102023Image from "../component/2022-09-21-past/feb102023.jpg";
import trainee_talk_2Image from "../component/2022-09-21-past/trainee_talk_2.jpg";
import telecom2Image from "../component/2022-09-21-past/telecom2.jpg";
import trainee_talk_1Image from "../component/2022-09-21-past/trainee_talk_1.jpg";
import retreat_groupImage from "../component/2022-09-21-past/retreat_group.jpg";
import brainstormImage from "../component/2022-09-21-past/brainstorm.jpg";
import group1Image from "../component/2022-09-21-past/group1.jpg";
import group2Image from "../component/2022-09-21-past/group2.jpg";
import group3Image from "../component/2022-09-21-past/group3.jpg";
import group4Image from "../component/2022-09-21-past/group4.jpg";
import olivierImage from "../component/2022-09-21-past/olivier.jpg";
import sumon_biswasImage from "../component/2022-09-21-past/sumon_biswas.jpg";

import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Sidebar from "./Sidebar";
import RightSidebar from "./RightSidebar";
const PastEvents = () => {
  const { isDarkMode } = useContext(DarkModeContext);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const subtitles = document.querySelectorAll(".subtitle");

      subtitles.forEach((subtitle) => {
        const rect = subtitle.getBoundingClientRect();
        const linkId = subtitle.getAttribute("id");

        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          setActiveLink(linkId);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll once on mount to initialize the active link

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleLinkClick = (id) => {
    setActiveLink(id);
  };
  return (
    <Container isDarkMode={isDarkMode}>
      <StickySidebar>
        <Sidebar />
      </StickySidebar>
      <MainContent isDarkMode={isDarkMode}>
        {" "}
        <Title isDarkMode={isDarkMode}>Past Events</Title>
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="industry-talks-webinar---april-25-2023"
        >
          Industry Talks Webinar - April 25, 2023
          <a href="#industry-talks-webinar---april-25-2023"> #</a>
          <Img src={apr252023Image} alt=" apr252023.jpg" />
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          CREATE SE4AI is pleased to present Patrick Mesana, Consultant at
          National Bank of Canada and PhD Candidate at HEC, who spoke
          <Bold isDarkMode={isDarkMode}>
            {" "}
            on Balancing Data Valorization and Privacy: Industry Challenges and
            Opportunities.
          </Bold>{" "}</Details><Details2>
          In his talk, Patrick delved into the distinct characteristics of data
          as a digital asset and examined the challenges of striking a balance
          between data valorization and privacy. Emphasizing the importance of
          data management in large organizations, such as financial
          institutions, he addressed the emerging challenges posed by privacy
          laws and the rapid growth of AI. Through a discussion of evolving
          practices like privacy-by-design, advances in privacy engineering, and
          innovative privacy technologies such as data synthesis, he offered
          valuable insights for navigating the intricate future of data privacy
          within organizations. Furthermore, he brought to light potential
          future disruptors, such as open banking in Canada, particularly
          relevant to the finance sector.
        </Details2>
        <Bold2 isDarkMode={isDarkMode}>About the Speaker:</Bold2>
        <Details isDarkMode={isDarkMode}>
          Patrick Mesana began his career as a software engineer, gaining
          experience with consulting companies and startups before transitioning
          into the field of Data Science. As a former manager in the Data Office
          of National Bank of Canada (NBC), Patrick encountered numerous data
          management challenges. He is currently pursuing a PhD in decision
          science to explore the tradeoffs between data privacy and data value.
          In addition, Patrick serves as a researcher and scientific lead on
          these topics for the AI Factory at NBC.
        </Details>
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="trainee-talks-webinar---april-3rd-2023"
        >
          Trainee Talks Webinar - April 3rd, 2023{" "}
          <a href="#trainee-talks-webinar---april-3rd-2023"> #</a>
          <Img src={april32023Image} alt=" april32023.jpg" />
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          The Spring Trainee Talks webinar was a huge success and we were
          pleased to have 27 participants join!
        </Details>
        <Details2 isDarkMode={isDarkMode}>
          In this webinar, 2 PhD students from Polytechnique Montréal under
          Prof. Foutse Khomh delivered their research topics. Vahid Majdinasab
          spoke on his topic of Mutation Testing of Deep Reinforcement Learning
          Based on Real Faults, followed by Forough Majidi, who shared her
          Empirical Study on the Usage of Automated Machine Learning Tools. A 10
          min Q&A session followed after each presentation.
        </Details2>
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="women-in-engineering-wie---march-18-2023"
        >
          Women in Engineering (WIE) - March 18, 2023
          <a href="#women-in-engineering-wie---march-18-2023"> #</a>
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          On March 18th , CREATE SE4AI took part in WIE Inspire WIE Empower, an
          annual event hosted by the
          <a href="https://www.womeninengineeringconcordia.com/ ">
            {" "}
            Women in Engineering (WIE)
          </a>{" "}
          student association at the
          <a href="https://www.concordia.ca/ginacody.html">
            {" "}
            Gina Cody School of Engineering and Computer Science at Concordia
            University.
          </a>{" "}
          Through their various outreach and mentorship activities, WIE
          encourages young women to explore engineering and computer science as
          career options.
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          This year, WIE welcomed over 80 high school girls aged 12-17 to
          Concordia for an exciting day of inspiration and exploration. After a
          welcome address by Dr. Gina Cody, students participated in 4 hands-on,
          industry-led workshops. CREATE SE4AI trainees and Master’s students
          <Bold isDarkMode={isDarkMode}> Divya Kamath</Bold> (Queen’s
          University),
          <Bold isDarkMode={isDarkMode}> Lorena Barreto </Bold>(Concordia
          University) and <Bold isDarkMode={isDarkMode}>Khaled Badran </Bold>
          (Concordia University), along with Program Coordinator{" "}
          <Bold isDarkMode={isDarkMode}>Lori Akiyama </Bold> developed and
          delivered a fun, interactive workshop on AI and Chatbots to 4 groups
          of students. The goals of the workshop were to:
        </Details2>
        <Ol isDarkMode={isDarkMode}>
          <Li isDarkMode={isDarkMode}>
            Introduce the basic concepts of AI and chatbots to the students
          </Li>
          <Li isDarkMode={isDarkMode}>
            Encourage the students to develop confidence interacting with
            technology
          </Li>
          <Li isDarkMode={isDarkMode}>
            Stimulate a discussion of ethics of AI in society through a group
            reflection exercise
          </Li>
        </Ol>
        <Details2 isDarkMode={isDarkMode}>
          At the end of the workshop, the students shared their experiences
          interacting with chatbots and reflected on the importance of creating
          responsible and ethical AI.
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          CREATE was proud to contribute to this important initiative, and we
          look forward to more opportunities to engage with youth and inspire
          them to learn more about software engineering and AI in the future.
        </Details2>
        <Image>
          <Img2 src={wie1Image} alt="wie1Image" />
          <Img2 src={wie2Image} alt="wie2Image" />
          <Img2 src={wie3Image} alt="wie3Image" />
        </Image>
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="trainee-talks-webinar---february-27-2023"
        >
          Trainee Talks Webinar - February 27, 2023
          <a href="#trainee-talks-webinar---february-27-2023"> #</a>
          <Img src={feb272023Image} alt=" feb272023.jpg" />
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          In the first Trainee Talks webinar of 2023, Pierre-Olivier Côté, a
          Master's student at Polytechnique Montréal spoke about Quality Issues
          in Machine Learning Software Systems. Immediately following,
          University of Alberta PhD student Akalanka Galappaththi presented his
          work on “A Data Set of Generalizable Python Code Change Patterns”.
        </Details2>
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="industry-talks-webinar---february-10-2023"
        >
          Industry Talks Webinar - February 10, 2023
          <a href="#industry-talks-webinar---february-10-2023">#</a>
          <Img src={feb102023Image} alt="feb102023.jpg" />
        </Subtitle>
        <Bold isDarkMode={isDarkMode}>
          Deploying Effective Machine Learning Models in Production: Two Use
          Cases
        </Bold>
        <Details2 isDarkMode={isDarkMode}>
          Dr. Gabor Melli, VP of Engineering, AI/ML at San Francisco-based
          Medable joined us for our first industry talk webinar of 2023! Gabor
          Melli is a seasoned professional with a proven track record of leading
          teams and driving positive change within organizations. His background
          includes implementing evidence-based solutions and facilitating change
          at large enterprises such as Sony PlayStation, Microsoft, AT&T,
          T-Mobile, and Wal*Mart, as well as at start-ups including Datasage,
          Meals.com, VigLink,<a href="https://opengov.com/">OpenGov.com</a>, and{" "}
          <a href="https://www.medable.com/">Medable.com</a>. Gabor has also
          presented his research at various applied AI research conferences,
          including AAAI, KDD, LREC, and ICDM.
        </Details2>
        <Bold2 isDarkMode={isDarkMode}>Abstract</Bold2>
        <Details isDarkMode={isDarkMode}>
          Predictive machine learning has the ability to automate and optimize
          workflows across a wide range of industries. In this session, we will
          explore real-life examples of how predictive machine learning is being
          used at Sony Interactive Entertainment (SIE) and Medable. At SIE, we
          will delve into their scalable, real-time, low-latency predictive
          ML-based solutions that are implemented on the cloud in order to
          personalize purchasing and playing experiences. Medable, on the other
          hand, has implemented an automated, decentralized clinical trials
          platform on the cloud in order to greatly improve efficiency and
          accuracy. Throughout this session, we will also discuss the role of
          machine learning engineering and the exciting opportunities that lie
          ahead in this field. Overall, this session aims to provide a
          comprehensive overview of the various applications and potential of
          predictive machine learning.
        </Details>
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="trainee-talks-webinar---december-13-2022"
        >
          Trainee Talks Webinar - December 13, 2022{" "}
          <a href="#trainee-talks-webinar---december-13-2022"> #</a>
          <Img src={trainee_talk_2Image} alt=" trainee_talk_2.jpg" />
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          Trainee Talks is a monthly webinar series featuring CREATE SE4AI
          trainees sharing their research topics in software engineering and AI.{" "}
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          This time, Queen's University Master's student Ernesto Lang Oreamuno
          joined us and spoke about Documentation Practices of Third-Party
          Models and Datasets.
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          Immediately following, Rached Bouchoucha, École Polytechnique Master's
          student presented his work on de-bugging Deep Reinforcement Learning
          (DLR) Frameworks.
        </Details2>
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="industry-talks-webinar---november-18-2022"
        >
          Industry Talks Webinar - November 18, 2022{" "}
          <a href="#industry-talks-webinar---november-18-2022"> #</a>
          <Img src={telecom2Image} alt=" telecom2.jpg" />
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          CREATE SE4AI is pleased to present{" "}
          <Bold isDarkMode={isDarkMode}>AI Adoption in Telecom Networks</Bold>{" "}
          as part of our Industry Talks webinar series.
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          Did you know that revenue generated from AI automation in telecom
          networks is expected to reach USD 200 billion by 2027? What are some
          of the current challenges Ericsson, a global leader in ICT solutions
          faces as they adopt new technologies in AI and ML in their products
          and services, and how are they overcoming them?
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          In his presentation, Karthikeyan Premkumar, Data Scientist at Ericsson
          used case studies to highlight several touchpoints involving the ML
          model development process, tools, data quality, ML Ops (monitoring and
          retraining) and deployment as part of model industrialization.
        </Details2>
        <Bold2 isDarkMode={isDarkMode}>About the Speaker</Bold2>
        <Details isDarkMode={isDarkMode}>
          Karthik Premkumar has 18 years of experience in the telecom industry.
          His expertise lies in industrializing AI/ML solutions, designing
          system and solution architectures in BSS, Cloud and infrastructure
          platforms for telecom networks.
        </Details>
        <Details2 isDarkMode={isDarkMode}>
          In his current role as Data Scientist at Ericsson in Montreal, QC,
          Karthik Premkumar designs knowledge models and machine reasoning
          technologies for cognitive networks. He has published over 10 patents
          and papers on telecom analytics.
        </Details2>
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="trainee-talks-webinar---november-4-2022"
        >
          Trainee Talks Webinar - November 4, 2022
          <a href="#trainee-talks-webinar---november-4-2022"> #</a>
          <Img src={trainee_talk_1Image} alt="trainee_talk_1.jpg" />
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          <Bold isDarkMode={isDarkMode}>Topics:</Bold> Dependency Management and
          Testing of AI-based Software Systems
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          Our monthly
          <Bold isDarkMode={isDarkMode}> CREATE SE4AI Trainee Talks</Bold>{" "}
          webinar series kicked off with 2 graduate Software Engineering
          students presenting their research.
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          In the first of our series of trainee-led webinars, we invited 2
          graduate students to deliver their research topics to the broader
          public.
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          <Bold isDarkMode={isDarkMode}>Ahmed Haj Yahmed,</Bold> a Master's
          student at Polytechnique Montréal presented DiverGet: a Search-based
          Software Testing Approach for Deep Neural Network Quantization
          Assessment. Immediately following, Concordia University PhD candidate{" "}
          <Bold isDarkMode={isDarkMode}>Jasmine Latendresse</Bold>
          presented her work on software production dependencies which she
          recently delivered at the IEEE/ACM 2022 Conference on Automated
          Software Engineering (ASE '22) in Michigan.
        </Details2>{" "}
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>{" "}
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="create-se4ai-retreat---june-3-2022"
        >
          CREATE SE4AI Retreat - June 3, 2022
          <a href="#create-se4ai-retreat---june-3-2022"> #</a>
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          Our 1st annual CREATE SE4AI Program Retreat is a wrap! It was an
          inspiring day of celebrating our collective accomplishments and
          exchanging ideas amongst an amazing team of students, professors and
          industry partners, live and in person at the Chateau Vaudreuil. The
          future is so bright for this group of talented trainees, they’re gonna
          need shades…
        </Details2>
        <Group>
          <HoverContainer>
            <Img3 src={retreat_groupImage} alt="retreat_group.jpg" />
            <HoverImg3 src={retreat_groupImage} alt="retreat_group.jpg" />
          </HoverContainer>
          <HoverContainer>
            <Img3 src={brainstormImage} alt=" brainstorm.jpg" />
            <HoverImg3 src={brainstormImage} alt=" brainstorm.jpg" />
          </HoverContainer>
          <HoverContainer>
            <Img3 src={group1Image} alt="  group1.jpg" />
            <HoverImg3 src={group1Image} alt="  group1.jpg" />
          </HoverContainer>

          <HoverContainer>
            <Img3 src={group2Image} alt="  group2.jpg" />
            <HoverImg3 src={group2Image} alt="  group2.jpg" />
          </HoverContainer>

          <HoverContainer>
            <Img3 src={group3Image} alt="  group3.jpg" />
            <HoverImg3 src={group3Image} alt="  group3.jpg" />
          </HoverContainer>

          <HoverContainer>
            <Img3 src={group4Image} alt="  group4.jpg" />
            <HoverImg3 src={group4Image} alt="  group4.jpg" />
          </HoverContainer>
        </Group>
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="guest-speaker-webinar---april-12-2022"
        >
          Guest Speaker Webinar - April 12, 2022{" "}
          <a href="#guest-speaker-webinar---april-12-2022"> #</a>
        </Subtitle>
        <Details isDarkMode={isDarkMode}>
          CREATE SE4AI trainees, profs and partners enjoyed a webinar presented
          by Olivier Blais, co-founder and VP of Decision Science at Moov AI in
          Montréal. Olivier spoke about "Delivering High Quality Machine
          Learning Models" including:
        </Details>
        <Group2 isDarkMode={isDarkMode}>
          <Ol isDarkMode={isDarkMode}>
            <Li isDarkMode={isDarkMode}>
              What it means to develop high quality artificial intelligence
            </Li>
            <Li isDarkMode={isDarkMode}>
              A better approach to ML model evaluation
            </Li>
            <Li>Existing and future certifications for AI systems</Li>
            <Details isDarkMode={isDarkMode}>
              Bio:{" "}
              <a href="https://moov.ai/en/olivier-blais">
                https://moov.ai/en/olivier-blais/
              </a>
            </Details>
          </Ol>
          <Img4 src={olivierImage} alt="olivier.jpg" />
        </Group2>{" "}
        <YoutubeChannel isDarkMode={isDarkMode}>
          The webinar recording is available to view on our{" "}
          <a
            href="https://www.youtube.com/watch?v=EEDTbt3Y3Lk&feature=youtu.be"
            target="_blank"
            rel="noreferrer"
          >
            CREATE SE4AI YouTube channel
          </a>
        </YoutubeChannel>{" "}
        <Subtitle
          className="subtitle"
          isDarkMode={isDarkMode}
          id="guest-speaker-webinar---february-3-2022"
        >
          Guest Speaker Webinar - February 3, 2022{" "}
          <a href="#guest-speaker-webinar---february-3-2022"> #</a>
        </Subtitle>
        <Details2 isDarkMode={isDarkMode}>
          CREATE SE4AI hosted a webinar by Sumon Biswas, PhD Candidate at Iowa
          State University on "Understanding and Reasoning Fairness of Machine
          Learning Pipeline".
        </Details2>
        <Details2 isDarkMode={isDarkMode}>
          <Bold isDarkMode={isDarkMode}>Link to presentation:</Bold>
        </Details2>
        <Details isDarkMode={isDarkMode}>
          <a href="https://www.youtube.com/channel/UCjCS6a_K301Ocg9z5Qd1GWA/videos">
            https://www.youtube.com/channel/UCjCS6a_K301Ocg9z5Qd1GWA/videos
          </a>
        </Details>
        <Details2 isDarkMode={isDarkMode}>
          <Bold isDarkMode={isDarkMode}>About the Speaker</Bold>
        </Details2>
        <Group3>
          {" "}
          <Details3 isDarkMode={isDarkMode}>
            Sumon Biswas is a Computer Science Ph.D. candidate at Iowa State
            University (ISU) and a Research Assistant in Laboratory for Software
            Design at ISU under the supervision of Professor Hridesh Rajan. His
            research interests are in the intersection of Software Engineering,
            Programming Languages, and Artificial Intelligence. He has worked on
            Machine Learning (ML) software repository mining and analysis in
            large-scale using the Boa framework. He worked on building Python
            language support for Boa to analyze ML programs and Jupyter
            Notebooks. Currently, he is working in the D4 (Dependable
            Data-Driven Discovery) initiative at ISU towards increasing the
            dependability of data-driven software. Specifically, he is
            conducting research on understanding the societal bias in ML models
            and reasoning about fairness property and its mitigation in ML
            pipelines. His research results appeared in reputed software
            engineering venues including ICSE and ESEC/FSE.
          </Details3>{" "}
          <Img5 src={sumon_biswasImage} alt="sumon_biswas.jpg" />
        </Group3>
        <Details2 isDarkMode={isDarkMode}>
          <Bold isDarkMode={isDarkMode}>Homepage:</Bold>

          <a href="https://sumonbis.github.io/">https://sumonbis.github.io/</a>
        </Details2>
        <Button isDarkMode={isDarkMode}>
          Older Post
          <a href="/blog/upcoming">
            Upcoming Events{" "}
            <Icon>
              <MdKeyboardDoubleArrowRight />
            </Icon>
          </a>
        </Button>
      </MainContent>{" "}
      <RightSidebar activeLink={activeLink} handleLinkClick={handleLinkClick} />
    </Container>
  );
};

export default PastEvents;
const StickySidebar = styled.div`
  position: sticky;
  top: 0px; /* Adjust this value if needed */
  /* margin-bottom: 0px; */
  /* margin-top: 20px; */
  width: 170px; /* Adjust this value to set the sidebar width */
  @media (min-width: 1440px) { 
/* width:50%; */
 }
`;

// This part for css part
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 50px; 
  @media (min-width: 1440px) { 
/* margin-left:500px; */
 }
`;

const MainContent = styled.div`
  /* flex: 1; */
  margin-left: 170px;
  padding-top: -40px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  width: 640px;
  margin-bottom: 30px;    @media (min-width: 1440px) { 
margin-left:500px;
width:800px;
 }

`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 60px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 
   @media (min-width: 1440px) { 
/* margin-left:5000px; */
 }
`;
const Subtitle = styled.div`
  padding-top: 20px;
  width: 560px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  margin-bottom: 20px;
  font-size: 30px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  font-weight: bold;
  a {
    color: ${(props) => (props.isDarkMode ? "#181818" : "white")};
    font-weight: bold;
  }
  a:hover {
    color: #bb5a7d;
    text-decoration: underline;
  }
`;
const Img = styled.img`
  width: 650px;
  height: 350px;
  padding-top: 20px;  @media (min-width: 1440px) { width:100%;
width:737px;
height: 415px;
 }
`;
const Details = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  /* flex: 1; */
  width: 640px;
  line-height: 1.7em;
  font-size: 15px;
  a {
    color: #bb5a7d;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
  @media (min-width: 1440px) {
  width: 737px;   

 }
`;

const Bold = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;
const Details2 = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  width: 640px;
  line-height: 2em;
  font-size: 15px;
  margin-top: 20px;

  a {
    color: #bb5a7d;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }@media (min-width: 1440px) {
  width: 737px;;   

 }
`;
const Bold2 = styled.span`
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  line-height: 5em;
`;
const YoutubeChannel = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  line-height: 5em;
  a {
    color: #bb5a7d;
    text-decoration: none;
  }
  a:hover {
    text-decoration: underline;
  }
`;
const Ol = styled.ol`
  list-style-type: decimal;
  padding-top: 5px;
  font-size: 15px;
  line-height: 1.8em;
  width: 600px;
  margin-left: 5px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;
const Li = styled.li`
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  font-size: 15px;
  margin-bottom: 20px;
  width: 580px;
`;
const Img2 = styled.img`
  width: 250px;
  height: 350px;
  margin-left: 4px;
  margin-top: 10px;
`;
const Image = styled.div`
  width: 520px; 
     @media (min-width: 1440px) { 
width:800px;
margin-bottom:40px;
 }
`;
const Group = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
const ImgContainer = styled.div`
  position: relative;
  margin: 2px;
  margin-bottom: 5px;
`;

const Img3 = styled.img`
  width: 200px;
  height: 160px;
  padding-left: 2px;
  padding-top: 4px;
  transition: transform 0.3s;
  z-index: 0;
`;

const HoverImg3 = styled(Img3)`
  position: absolute;
  top: 10;
  left: -10;
  z-index: 2;
  transform: scale(2);
  opacity: 0;
`;

const HoverContainer = styled(ImgContainer)`
  &:hover ${HoverImg3} {
    opacity: 1;
  }
`;
const Group2 = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5px;
  padding-top: 10px;

  Li {
    color: ${(props) => (props.isDarkMode ? "white" : "black")};
    font-size: 15px;
    margin-bottom: 20px;
    width: 380px;
  }
`;

const Img4 = styled.img`
  width: 200px;
  height: 180px;
  margin-left: -200px;
  /* margin-right: 10px; */
`;
const Button = styled.button`
  width: 370px;
  height: 70px;
  background-color: inherit;
  margin-bottom: 30px;
  margin-left: 270px;
  border-radius: 5px;
  padding-left: 270px;
  padding-top: -2px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.7em;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};

  border: 1px solid #e8e8e8;
  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  a {
    display: flex;
    flex-direction: row;
    width: 200px;
    margin-left: -80px;
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
const Details3 = styled.div`
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  flex: 1;
  width: 640px;
  line-height: 1.7em;
  font-size: 15px;
`;
const Group3 = styled.div`
  display: flex;
  flex-direction: row;
  margin-right: 5px;
  padding-top: 10px;
  width: 840px;
`;
const Img5 = styled.img`
  width: 200px;
  height: 180px;
  /* margin-left: -200px; */
  margin-right: 170px;
`;
