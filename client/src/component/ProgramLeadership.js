// This is the ProgramLeaderShip part in Team  Page
import React from "react";
import styled from "styled-components";
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
  return (
    <MiddContainer>
      {/* Dr.Emad part */}
      <MiniContainer className="emadContainer ">
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
                <SmallIcon>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/emad-shihab-8099523/"
                target="blank"
              >
                <SmallIcon>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/EmadShihab" target="blank">
                <SmallIcon>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="mailto:emad.shihab@concordia.ca">
                <SmallIcon>
                  <MdEmail />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/* Dr. Foutse Khomh*/}
      <MiniContainer>
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
                <SmallIcon>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a href="https://www.linkedin.com/in/khomh/" target="blank">
                <SmallIcon>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/SWATLab" target="blank">
                <SmallIcon>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Tanja Tajmel */}
      <MiniContainer>
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
                <SmallIcon>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore>Know more</KnowMore>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Jinqiu Yang */}
      <MiniContainer>
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
                <SmallIcon>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/jinqiu-yang-69767220"
                target="blank"
              >
                <SmallIcon>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/JinqiuYang" target="blank">
                <SmallIcon>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Ying (Jenny) Zou
       */}{" "}
      <MiniContainer>
        <Img src={DrYingJennyZouImage} alt="Dr. Ying (Jenny) Zou" />
        <Name>Dr. Ying (Jenny) Zou</Name>
        <University>Queen’s University</University>
        <Links>
          <SocialMedia>
            <li>
              <a
                href="https://engineering.queensu.ca/ece/people/Y-Zou/"
                target="_blank"
                style={{ textDecoration: "none" }}
              >
                <SmallIcon>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ying-zou-624501159/"
                target="blank"
              >
                <SmallIcon>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/YingZou8" target="blank">
                <SmallIcon>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Sarah Nadi
       */}
      <MiniContainer>
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
                <SmallIcon>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/sarah-nadi-b312b665/"
                target="blank"
              >
                <SmallIcon>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sarahnadi" target="blank">
                <SmallIcon>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/*Dr. Ahmed E. Hassan
       */}
      <MiniContainer>
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
                <SmallIcon>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/ahmed-e-hassan/"
                target="blank"
              >
                <SmallIcon>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/sail_lab" target="blank">
                <SmallIcon>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/* Dr. Bram Adams
       */}
      <MiniContainer>
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
                <SmallIcon>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a href="https://twitter.com/mcis_lab" target="blank">
                <SmallIcon>
                  <BsTwitter />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="mailto:bram.adams@queensu.ca; ">
                <SmallIcon>
                  <MdEmail />
                </SmallIcon>
              </a>
            </li>
          </SocialMedia>
        </Links>
      </MiniContainer>
      {/* Dr. Diego Costa
       */}
      <MiniContainer>
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
                <SmallIcon>
                  <FaArrowUpRightFromSquare />
                </SmallIcon>
                <KnowMore>Know more</KnowMore>
              </a>
            </li>

            <li>
              <a
                href="https://www.linkedin.com/in/diego-elias-costa/"
                target="blank"
              >
                <SmallIcon>
                  <AiFillLinkedin />
                </SmallIcon>
              </a>
            </li>
            <li>
              <a href="https://twitter.com/DiegoEliasCosta" target="blank">
                <SmallIcon>
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
  width: 100%;
`;
const MiddContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px;
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
  border-top-right-radius: 10px;
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
  border: 2px solid #f4f0ec;
  padding-top: 0px;
  width: 270px;
  height: 400px;
  &.emadContainer {
    height: 450px;
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
  color: #585858;
  font-weight: bold;
  margin-right: 7px;
`;

const KnowMore = styled.span`
  margin-right: 3px;
  color: #585858;
  font-size: 15px;

  /* white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis; */
`;
