// This is the ProgramLeaderShip part in Team  Page
import React from "react";
import styled from "styled-components";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
//import images
import ErnestoLangOreamunoImage from "../component/team/photos/Ernesto-Lang-Oreamuno.jpg";

const Alumni = () => {
  return (
    <MiniContainer>
      <Img src={ErnestoLangOreamunoImage} alt="Ernesto Lang Oreamuno" />{" "}
      <Name>Ernesto Lang Oreamuno</Name>
      <University>Queen's University</University>
    </MiniContainer>
  );
};

export default Alumni;

const Img = styled.img`
  width: 230px;
  height: 230px;
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
