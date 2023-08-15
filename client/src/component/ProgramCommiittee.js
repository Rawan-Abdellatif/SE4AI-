import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { MdEmail } from "react-icons/md";

import DrJulienCroweImage from "../component/member/Dr-Julien-Crowe.jpg";
import DrLataNarayananImage from "../component/member/Dr. Lata Narayanan.jpg";

import DrMariePierreHabasGerardImage from "../component/member/Dr. Marie-Pierre Habas Gerard.jpg";

import MrJesseVincentHerscoviciImage from "../component/member/Mr. Jesse Vincent-Herscovici.jpg";
import MrPierreDumouchelImage from "../component/member/Mr. Pierre Dumouchel.jpg";

const memberData = [
  {
    name: "Dr. Julien Crowe",
    Job: "National Bank of Canada",
    img: DrJulienCroweImage,
    website: "https://se4ai.org/members/julien-crowe/",
    linkedin: "https://www.linkedin.com/in/juliencrowe/",
    email: "julien.crowe@bnc.ca",
  },
  {
    name: "Dr. Marie-Pierre Habas Gerard",
    Job: "CGI",
    img: DrMariePierreHabasGerardImage,
    website: "https://se4ai.org/members/marie-pierre-habas-gerard/",
    linkedin:
      "https://www.linkedin.com/in/marie-pierre-habas-gerard-ph-d-92316111/",
    email: "marie-pierre.gerard@cgi.com",
  },
  {
    name: "Mr. Pierre Dumouchel",
    Job: "Ivado",
    img: MrPierreDumouchelImage,
    website: "https://ivado.ca/en/persons/pierre-dumouchel/",
    linkedin: "https://www.linkedin.com/in/pierre-dumouchel-472110/",
    email: "pierre.dumouchel@ivado.ca",
  },
  {
    name: "Mr. Jesse Vincent-Herscovici",
    Job: "Mitacs",
    img: MrJesseVincentHerscoviciImage,
    website: "https://se4ai.org/members/jesse-vincent-herscovici/",
    linkedin: "https://www.linkedin.com/in/jesse-vincent-herscovici-8b15538/",
    email: "jvh@mitacs.ca",
  },
  {
    name: "Dr. Lata Narayanan ",
    Job: "Concordia University",
    img: DrLataNarayananImage,
    website: "https://explore.concordia.ca/index.php/lata-narayanan",

    email: "https://explore.concordia.ca/index.php/lata-narayanan",
  },
];

const ProgramCommittee = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <MiddContainer isDarkMode={isDarkMode}>
      {memberData.map((member, index) => (
        <MiniContainer key={index} isDarkMode={isDarkMode}>
          <Img src={member.img} alt={member.name} />
          <Name>{member.name}</Name>
          <Job>{member.Job}</Job>
          <Links>
            <ul>
              {" "}
              {member.website && (
                <SocialMedia isDarkMode={isDarkMode}>
                  <li>
                    <a href={member.website} style={{ textDecoration: "none" }}>
                      <FaArrowUpRightFromSquare isDarkMode={isDarkMode} />
                      <SmallIcon isDarkMode={isDarkMode}>
                        <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
                      </SmallIcon>
                    </a>
                  </li>
                </SocialMedia>
              )}
              {member.linkedin && (
                <SocialMedia isDarkMode={isDarkMode}>
                  {" "}
                  <li>
                    <a
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SmallIcon isDarkMode={isDarkMode}>
                        <AiFillLinkedin isDarkMode={isDarkMode} />
                      </SmallIcon>
                    </a>
                  </li>
                </SocialMedia>
              )}
              {member.email && (
                <SocialMedia isDarkMode={isDarkMode}>
                  <li>
                    <a href={`mailto:${member.email}`}>
                      <SmallIcon isDarkMode={isDarkMode}>
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

export default ProgramCommittee;
const Img = styled.img`
    width: 100%;
  height: 300px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;@media (max-width: 768px) {
    /* flex-direction: column;  */
    /* Display items in a column on mobile */
    /* align-items: center; */
/* margin-left:-0px;   width: 350px;  height: 320px; */

 }
`;

const MiniContainer = styled.div`
 margin-top: 20px; /* Change this value to decrease the margin */
  border-radius: 10px;
  border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"};
  background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* ... other styles ... */
  /* margin-left: -5px;  */
width:290px;  /* width:100vw; */
/* border:5px solid orange;   */
@media (max-width: 768px) {
  width:340px;
 };`

const MiddContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 5px 5px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
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
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

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
  margin-left: 5px;
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
  font-size: 15px;
`;

const SmallIcon = styled.span`
  font-size: 20px;
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
  font-weight: bold;
`;
