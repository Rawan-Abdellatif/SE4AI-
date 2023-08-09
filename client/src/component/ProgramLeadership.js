// This is the ProgramLeaderShip part in Team  Page
import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
//import images
import DrEmadShihabImage from "../component/team/photos/Dr-Emad-Shihab.jpg";
import DrAhmedEHassanImage from "../component/team/photos/Dr-Ahmed-E-Hassan.jpg";
import DrBramAdamsImage from "../component/team/photos/Dr-Bram-Adams.jpg";
import DrDiegoCostaImage from "../component/team/photos/Dr-Diego-Costa.jpg";
import DrFoutseKhomhImage from "../component/team/photos/Dr-Foutse-Khomh.jpg";
import DrTanjaTajmelImage from "../component/team/photos/Dr-Tanja-Tajmel.jpg";
import DrYingJennyZouImage from "../component/team/photos/Dr-Ying-Jenny-Zou.jpg";
import DrJinqiuYangImage from "../component/team/photos/Dr-Jinqiu-Yang.jpg";
import DrSarahNadiImage from "../component/team/photos/Dr-Sarah-Nadi.jpg";

const ProgramLeaderShip = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <MiddContainer isDarkMode={isDarkMode}>
      {/* Dr.Emad part */}
      <MiniContainer className="emadContainer " isDarkMode={isDarkMode}>
        <Img src={DrEmadShihabImage} alt="Dr. Emad Shihab" />
        <Name>Dr. Emad Shihab</Name>
        <Job>Director</Job>
        <University>Concordia University</University>
        <Links>
          {" "}
          <SocialMedia>
            <li>
              <a
                href="https://das.encs.concordia.ca/members/emad-shihab/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/emad-shihab-8099523/"
                target="blank"
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <AiFillLinkedin isDarkMode={isDarkMode} />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EmadShihab" target="blank">
                <SmallIcon isDarkMode={isDarkMode}>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="mailto:emad.shihab@concordia.ca">
                <SmallIcon isDarkMode={isDarkMode}>
                  <MdEmail />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/* Dr. Foutse Khomh*/}
      <MiniContainer isDarkMode={isDarkMode}>
        <Img src={DrFoutseKhomhImage} alt=" Dr. Foutse Khomh" />{" "}
        <Name>Dr. Foutse Khomh</Name>
        <University>Polytechnique Montréal</University>
        <Links>
          {" "}
          <SocialMedia>
            <li>
              <a
                href="http://swat.polymtl.ca/~foutsekh/about/index.html"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <FaArrowUpRightFromSquare isDarkMode={isDarkMode} />
                </SmallIcon>
                <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/khomh/" target="blank">
                <SmallIcon isDarkMode={isDarkMode}>
                  <AiFillLinkedin isDarkMode={isDarkMode} />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/SWATLab" target="blank">
                <SmallIcon isDarkMode={isDarkMode}>
                  <BsTwitter isDarkMode={isDarkMode} />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Tanja Tajmel */}
      <MiniContainer isDarkMode={isDarkMode}>
        <Img
          src={DrTanjaTajmelImage}
          alt="Dr. Tanja Tajmel
"
        />{" "}
        <Name>Dr. Tanja Tajmel</Name>
        <University>Concordia University</University>
        <Links>
          {" "}
          <SocialMedia>
            <li>
              <a
                href="https://www.concordia.ca/faculty/tanja-tajmel.html"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Jinqiu Yang */}
      <MiniContainer isDarkMode={isDarkMode}>
        <Img
          src={DrJinqiuYangImage}
          alt="Dr. Jinqiu Yang
"
        />
        <Name>Dr. Jinqiu Yang</Name>
        <University>Concordia University</University>
        <Links>
          <SocialMedia>
            <li>
              <a
                href="https://jinqiuyang.github.io/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/jinqiu-yang-69767220"
                target="blank"
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/JinqiuYang" target="blank">
                <SmallIcon isDarkMode={isDarkMode}>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Ying (Jenny) Zou
       */}{" "}
      <MiniContainer isDarkMode={isDarkMode}>
        <Img src={DrYingJennyZouImage} alt="Dr. Ying (Jenny) Zou" />
        <Name>Dr. Ying (Jenny) Zou</Name>
        <University>Queen’s University</University>
        <Links>
          <SocialMedia isDarkMode={isDarkMode}>
            <li>
              <a
                href="https://engineering.queensu.ca/ece/people/Y-Zou/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ying-zou-624501159/"
                target="blank"
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/YingZou8" target="blank">
                <SmallIcon isDarkMode={isDarkMode}>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Sarah Nadi
       */}
      <MiniContainer isDarkMode={isDarkMode}>
        {" "}
        <Img
          src={DrSarahNadiImage}
          alt="Dr. Sarah Nadi
"
        />
        <Name>Dr. Sarah Nadi</Name>
        <University>University of Alberta</University>
        <Links>
          <SocialMedia>
            <li>
              <a
                href="https://sarahnadi.org/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/sarah-nadi-b312b665/"
                target="blank"
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sarahnadi" target="blank">
                <SmallIcon isDarkMode={isDarkMode}>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Ahmed E. Hassan
       */}
      <MiniContainer isDarkMode={isDarkMode}>
        <Img src={DrAhmedEHassanImage} alt="Dr. Ahmed E. Hassan" />
        <Name>Dr. Ahmed E. Hassan</Name>
        <University>Queen’s University</University>
        <Links>
          <SocialMedia>
            <li>
              <a
                href="https://research.cs.queensu.ca/home/ahmed/home/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ahmed-e-hassan/"
                target="blank"
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sail_lab" target="blank">
                <SmallIcon isDarkMode={isDarkMode}>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/* Dr. Bram Adams
       */}
      <MiniContainer isDarkMode={isDarkMode}>
        {" "}
        <Img
          src={DrBramAdamsImage}
          alt="Dr. Bram Adams
"
        />
        <Name>Dr. Bram Adams</Name>
        <University>Queen’s University</University>
        <Links>
          {" "}
          <SocialMedia>
            <li>
              <a
                href="https://mcis.cs.queensu.ca/bram.html"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/mcis_lab" target="blank">
                <SmallIcon isDarkMode={isDarkMode}>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="mailto:bram.adams@queensu.ca; ">
                <SmallIcon isDarkMode={isDarkMode}>
                  <MdEmail />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/* Dr. Diego Costa
       */}
      <MiniContainer isDarkMode={isDarkMode}>
        {" "}
        <Img
          src={DrDiegoCostaImage}
          alt="Dr. Diego Costa
"
        />
        <Name>Dr. Diego Costa</Name>
        <University>Université du Québec à Montréal</University>
        <Links>
          {" "}
          <SocialMedia>
            <li>
              <a
                href="https://latece.uqam.ca/membre/diego-elias/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/diego-elias-costa/"
                target="blank"
              >
                <SmallIcon isDarkMode={isDarkMode}>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/DiegoEliasCosta" target="blank">
                <SmallIcon isDarkMode={isDarkMode}>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
    </MiddContainer>
  );
};

export default ProgramLeaderShip;
//style of all of the page
const Container = styled.div`
  margin-top: 10px;
  margin-left: 100px;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  width: 100%;@media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:-120px;  }
`;
const MiddContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px;@media (max-width: 768px) {}
`;

// const Title = styled.div`
//   font-weight: bold;
//   padding-top: 45px;
//   font-size: 45px;
//   color: #484848;
//   padding-bottom: 50px;
//   border-bottom: 2px solid #f0f0f0;
// `;

const Img = styled.img`
  width: 270px;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;@media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:-0px;   width: 350px;  height: 320px;

 }
`;

// const Program = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   margin-top: 40px;
//   margin-left: 20px;
//   font-size: 35px;
//   font-weight: bold;
// `;

const RedText = styled.span`
  color: #bb5a7d;
`;

const MiniContainer = styled.div`
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 10px;
  border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"};
  background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  padding-top: 0px;
  width: 270px;
  height: 400px;
  &.emadContainer {
    height: 450px;
  }@media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
;   width:350px;   height: 430px;


 }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 15px;
`;

const Job = styled.div`
  background-color: #bb5a7d;
  color: white;
  border-radius: 5px;
  width: 80px;
  text-align: center;
  font-weight: bold;
  padding: 2px 2px;
  margin-left: 15px;
`;

const University = styled.div`
  margin-left: 15px;
`;

const Links = styled.div`
  color: #404040;
  font-weight: bold;
  padding-right: 40px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #404040;
  }
  /* li {
    width: 80px;
  } */
`;

const SocialMedia = styled.div`
  padding-top: 10px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  list-style: none;
  height: 50px;
  margin-left: 15px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  a {
    display: flex;
    /* align-items: center; */
    text-align: center;
    text-decoration: none;
    color: #404040;
    padding: 5px 5px;
    transition: background-color 0.3s;
    border-radius: 5px;
    /* margin-right: 5px; */
  }

  a:hover {
    background-color: #e8e8e8;
  }
`;

const SmallIcon = styled.span`
  font-size: 20px;
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
  font-weight: bold;
  margin-right: 7px;
`;

const KnowMore = styled.span`
  margin-right: 3px;
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
  font-size: 15px;
  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;
