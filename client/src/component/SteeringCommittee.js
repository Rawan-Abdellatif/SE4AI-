import React from "react";
import styled from "styled-components";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

import DrLimingZhuImage from "../component/member/Dr. Liming Zhu.jpg";
import DrStefanWagnerImage from "../component/member/Dr. Stefan Wagner.jpg";
import MrDerekTruongImage from "../component/member/Mr. Derek Truong.jpg";
import MrSergeOlignyImage from "../component/member/Mr. Serge Oligny.jpg";

const CommitteeData = [
  {
    name: "Mr. Derek Truong      ",
    Job: "IBM",
    img: MrDerekTruongImage,
    website: "https://se4ai.org/members/derek-truong/",
    linkedin: "https://www.linkedin.com/in/derek-truong-7233b85/",
    email: "trong@ca.ibm.com",
  },
  {
    name: "Mr. Serge Oligny      ",
    Job: "Desjardins",
    img: MrSergeOlignyImage,
    website: "https://se4ai.org/members/serge-oligny/",
    linkedin: "https://www.linkedin.com/in/serge-oligny-0778031/",
  },
  {
    name: "Dr. Stefan Wagner      ",
    Job: "University of Stuttgart",
    img: DrStefanWagnerImage,
    website: "https://www.iste.uni-stuttgart.de/institute/team/Wagner-00017/",
    email: "stefan.wagner@iste.uni-stuttgart.de; ",
  },
  {
    name: "Dr. Liming Zhu      ",
    Job: "CSIRO Data61  ",
    img: DrLimingZhuImage,
    website: "https://cgi.cse.unsw.edu.au/~limingz/home/?About_Me:Bios",
    linkedin: "https://www.linkedin.com/in/limingzhu/",
    twitter: "https://twitter.com/limingz",
    email: "liming.Zhu@data61.csiro.au",
  },
];
const SteeringCommittee = () => {
  return (
    <MiddContainer>
      {CommitteeData.map((committee, index) => (
        <MiniContainer key={index}>
          <Img src={committee.img} alt={committee.name} />
          <Name>{committee.name}</Name>
          <Job>{committee.Job}</Job>
          <Links>
            <ul>
              {" "}
              {committee.website && (
                <SocialMedia>
                  <li>
                    <a
                      href={committee.website}
                      style={{ textDecoration: "none" }}
                    >
                      <FaArrowUpRightFromSquare />
                      <SmallIcon>
                        <KnowMore>Know more</KnowMore>
                      </SmallIcon>
                    </a>
                  </li>
                </SocialMedia>
              )}
              {committee.linkedin && (
                <SocialMedia>
                  {" "}
                  <li>
                    <a
                      href={committee.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SmallIcon>
                        <AiFillLinkedin />
                      </SmallIcon>
                    </a>
                  </li>
                </SocialMedia>
              )}
              {committee.twitter && (
                <SocialMedia>
                  <li>
                    <a
                      href={committee.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SmallIcon>
                        <BsTwitter />
                      </SmallIcon>
                    </a>
                  </li>{" "}
                </SocialMedia>
              )}
              {committee.email && (
                <SocialMedia>
                  <li>
                    <a href={`mailto:${committee.email}`}>
                      <SmallIcon>
                        <MdEmail />
                      </SmallIcon>
                    </a>
                  </li>
                </SocialMedia>
              )}
            </ul>
          </Links>
        </MiniContainer>
      ))}
    </MiddContainer>
  );
};
export default SteeringCommittee;
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
`;

const MiddContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px;
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 15px;
`;

const Job = styled.div`
  margin-left: 15px;
`;

const Links = styled.div`
  color: #404040;
  font-weight: bold;
  width: 30px;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    color: #404040;
    display: flex;
    flex-direction: row;
    width: 300px;
  }
`;

const SocialMedia = styled.div`
  padding-top: 10px;
  align-items: center;
  list-style: none;
  /* height: 50px; */
  margin-left: 5px;

  a {
    text-align: center;
    text-decoration: none;
    color: #404040;
    padding: 5px 5px;
    padding-top: 10px;
    transition: background-color 0.3s;
    border-radius: 5px;
    margin-right: 6px;
  }

  a:hover {
    background-color: #e8e8e8;
    border-radius: 5px;
  }
`;

const KnowMore = styled.span`
  margin-left: 5px; /* Adjust the left margin for spacing */
  color: #585858;
  font-size: 15px;
`;

const SmallIcon = styled.span`
  font-size: 20px;
  color: #585858;
  font-weight: bold;
  /* margin-right: 9px; */
  padding-left: -70px;
`;