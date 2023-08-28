// This is the Adminstration part in Team  Page
import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
//import images
import LoriAkiyamaImage from "../component/team/photos/Lori-Akiyama.jpg";

const Adminstrations = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <MiniContainer isDarkMode={isDarkMode}>
      <Img src={LoriAkiyamaImage} alt="Lori Akiyama" />{" "}
      <Name>Lori Akiyama</Name>
      <Job>Program Coordinator</Job>
      <University>Concordia University</University>
      <Links>
        {" "}
        <SocialMedia isDarkMode={isDarkMode}>
          <li>
            <a href="https://www.linkedin.com/in/loriakiyama" target="blank">
              <SmallIcon isDarkMode={isDarkMode}>
                <AiFillLinkedin />
              </SmallIcon>
            </a>
          </li>
          <li>
            <a href="mailto:lori.akiyama@concordia.ca ">
              <SmallIcon isDarkMode={isDarkMode}>
                <MdEmail />
              </SmallIcon>
            </a>
          </li>
        </SocialMedia>
      </Links>
    </MiniContainer>
  );
};

export default Adminstrations;

const Img = styled.img`
       width: 100%;
  height: 300px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px; 
  @media (max-width: 995px) {

    height: 350px;
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
width:320px;  /* width:100vw; */
/* border:5px solid orange;  */
@media (max-width: 995px) {
    flex-direction:column;
width:90vw;
margin-left:1px; 

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
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};

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

