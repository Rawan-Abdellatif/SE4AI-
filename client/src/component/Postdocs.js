// This is the ProgramLeaderShip part in Team  Page
import React from "react";
import styled from "styled-components";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
//import images
import DrAhmadAbdellatifImage from "../component/team/photos/Dr-Ahmad-Abdellatif.jpg";

const Postdocs = () => {
  return (
    <MiniContainer>
      <Img src={DrAhmadAbdellatifImage} alt="Dr .Ahmad Abdellatif" />{" "}
      <Name>AhmadAbdellatif</Name>
      <University>Concordia University</University>
      <Links>
        {" "}
        <SocialMedia>
          <li>
            <a
              href="https://das.encs.concordia.ca/members/ahmad-abdellatif"
              target="blank"
            >
              <SmallIcon>
                <FaArrowUpRightFromSquare />
              </SmallIcon>
              <KnowMore>Know more</KnowMore>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ahmad-abdellatif-8ab82a29"
              target="blank"
            >
              <SmallIcon>
                <AiFillLinkedin />
              </SmallIcon>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/AhmadAbdellatf" target="blank">
              <SmallIcon>
                <BsTwitter />
              </SmallIcon>
            </a>
          </li>
        </SocialMedia>
      </Links>
    </MiniContainer>
  );
};

export default Postdocs;

const Img = styled.img`
  width: 270px;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
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
  padding: 2px 4px;
  margin-left: 15px;
  width: 170px;
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
`;
