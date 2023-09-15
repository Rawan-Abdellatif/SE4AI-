import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link} from "react-router-dom";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { AiOutlineClose } from "react-icons/ai";
import { TfiClose } from "react-icons/tfi";

import {IoIosArrowRoundBack}from "react-icons/io"
const ProgramSidebarMedia = () => {
  const [showLinks, setShowLinks] = useState(true);
  const [selectedLink, setSelectedLink] = useState("");
  const [activeLink, setActiveLink] = useState("");
  const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
  const [isOpen, setIsOpen] = useState(false);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };


  const toggleSidebar = () => {
    toggleDarkMode();
    setIsOpen(!isOpen);
  };

  const handleToggle = () => {
    toggleDarkMode();
  };

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setActiveLink(link);
    toggleSidebar(); // Close the sidebar when a link is clicked
  };
  


  return (
<Container isDarkMode={isDarkMode}>
<SidebarButton isDarkMode={isDarkMode} onClick={toggleSidebar}>
      <svg width="30" height="30" viewBox="0 0 30 30"
       aria-hidden="true">
        <path stroke="currentColor"
         stroke-linecap="round"
         stroke-miterlimit="10" 
      stroke-width="2"
       d="M4 7h22M4 15h22M4 23h22">
        </path></svg>
      </SidebarButton>
      <SidebarContainer isDarkMode={isDarkMode} isOpen={isOpen}>
        <NavMenu >
        <Nav isDarkMode={isDarkMode} className="logo-nav">
          <a href="/">
            <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
          </a>
          <Creat>
          <a href="/">CREATE SE4AI</a></Creat>
          </Nav>
          <SwitchLabel>
            <SwitchInput
              type="checkbox"
              checked={isDarkMode}
              onChange={handleToggle}
            />
            <Slider
              className={isDarkMode ? "slider round active" : "slider round"}
              checked={isDarkMode}
            />
          </SwitchLabel>
          <CloseButton
            isDarkMode={isDarkMode}
            onClick={toggleSidebar}
          >
            <TfiClose />
          </CloseButton>
        </NavMenu>
        <SidebarHeading
          isDarkMode={isDarkMode}
          selected={selectedLink === "/"}
          isActive={activeLink === "/"}
     
        >
          <Link
            to="/"
            onClick={() => handleLinkClick("/")}
            isDarkMode={isDarkMode}
          >
            <IoIosArrowRoundBack/>Back to main menue
          </Link>
        </SidebarHeading>
         <SidebarHeading
          isDarkMode={isDarkMode}
          selected={selectedLink === "/intro"}
          isActive={activeLink === "/intro"}
     
        >
          <Link
            to="/intro"
            onClick={() => handleLinkClick("/intro")}
            isDarkMode={isDarkMode}
            
          >
            Program Overview
          </Link>
        </SidebarHeading>
        <SidebarHeading
          isDarkMode={isDarkMode}
          onClick={toggleLinks}
          selected={selectedLink.includes("/training-program")}
        >
          Training Program
          {showLinks ? (
            <Icon>
              <IoIosArrowDown />
            </Icon>
          ) : (
            <Icon>
              <IoIosArrowForward />
            </Icon>
          )}
        </SidebarHeading>
        {showLinks && (
          <>
            <SidebarLink
              isDarkMode={isDarkMode}
              to="/training-program/objectives"
              selected={selectedLink === "/training-program/objectives"}
              onClick={() => handleLinkClick("/training-program/objectives")}
            >
              Program Objectives
            </SidebarLink>
            <SidebarLink
              isDarkMode={isDarkMode}
              to="/training-program/components"
              selected={selectedLink === "/training-program/components"}
              onClick={() => handleLinkClick("/training-program/components")}
            >
              Program Components
            </SidebarLink>
          </>
        )}
 </SidebarContainer>

</Container>
  );
};

export default ProgramSidebarMedia;

const Container = styled.div`
  display: flex;
  width:100%;
  height:100%; 

`;
const Creat=styled.div`
/* border:2px solid yellow; */
width:110px;
    font-weight: bold;/* margin-left:10px; */
font-size:16px ; 
text-overflow:ellipsis;
margin-right:-5px;
`

const SidebarButton = styled.button`
  font-size: 15px;
  cursor: pointer;
  border:none;
  /* background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")}; */
  /* color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")}; */
margin-left:10px;
  @media (min-width: 995px) {
    display: none;
    border:none;
 margin-right:15px;
padding-right:20px;
  }
`;


const SidebarContainer = styled.div`
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
 padding-bottom:100%;
  width: ${(props) => (props.isOpen ? "99%" : "0")}; 
  display: ${(props) => (props.isOpen ? "block" : "none")};
  overflow-x: hidden;
  transition: 0.5s;  height:100%; 


  @media (max-width: 995px) {
    position: absolute;
    z-index: 1;
    width: ${(props) => (props.isOpen ? "85%" : "0")};
    /* height: ${(props) => (props.isOpen ? "100%" : "0")}; */
margin-left:-5px;
padding-left:10px;



  }`

const CloseButton = styled.button`
  font-size: 24px;
  cursor: pointer;
margin-left:35px;
/* float:right; */
border:none;
color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};

background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
`;

const SidebarHeading = styled.h2`
   color: ${(props) =>
    props.isSelected ? "white" : props.isDarkMode ? "#DADDE1" : "gray"};  font-size: 15px;
  display: flex;
  align-items: center;
  height: 20px;
  font-size: 16px;
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 3px;
  margin-left: 12px;
  padding-top: -10px;
  z-index: -1;
  top: -12px;

  &:hover,
  &:active,
  &.active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#383838" : "#e8e8e8"};
    color: #bb5a7d;
  }

  a {
    color: ${({ selected, isDarkMode }) =>
      selected ? "#bb5a7d" : isDarkMode ? "white" : "black"};
    text-decoration: none;
  }

  a:hover,
  &.active {
    color: #bb5a7d;
    &:hover,
  &.active,
  a:active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#383838" : "#e8e8e8"};
    color: #bb5a7d;
  }}
`;



const SidebarLink = styled(Link)`
  display: flex;
  /* color: ${({ selected }) => (selected ? "black" : "white")}; */
  color: ${(props) =>
    props.isSelected ? "white" : props.isDarkMode ? "#DADDE1" : "gray"};  font-size: 15px;
  align-items: center;
  text-decoration: none;
  height: 40px;
  margin-left: 5px;
  padding-left: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  background-color: ${({ selected, isDarkMode }) =>
    selected && isDarkMode ? "#282828" : selected ? "#e8e8e8" : "transparent"};

  &:hover,
  &.active,
  a:active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#383838" : "#e8e8e8"};
    color: #bb5a7d;
  }
`;

const Icon = styled.span`
  /* margin-top: 50px; */
  /* padding-top: 1px; */
  margin-left: 80px;
  font-size: 20px;
  font-weight: bold;
`;
const NavMenu = styled.ul`
  display: flex;
  padding-top: 5px;
  display:flex;
  list-style: none;
margin-left:-25px;  
/* border:2px solid red; */
cursor: pointer;
padding-left:-20px;
/* border:2px solid yellow; */
`;
const Nav = styled.li`
 display: flex;
  cursor: pointer;
 /* border:4px solid blue; */
margin-top: -5px ; 
margin-right:23px; 
font-weight:500; 
align-items:center;
 img {
padding-top:0px;    height: 32px;
  cursor: pointer;
margin-right:10px;
/* margin-left:-40px; */
width:32px; 
  }
  a {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    text-decoration: none;
    font-family:   "-apple-system", "Segoe UI", sans-serif;
   font-size: 16px;
  margin-top: -2px; 
  /* padding-left:-20px; */
/* padding-left:-10px; */
/* width:80px; */
 &.selected {
  color: #BB5A7D;
    }
  &:hover {
      color: #BB5A7D;
    }
    /* @media (max-width: 995px) {
     display: none; 
   } */
    
  }`

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  /* border:2px solid green; */
  margin-left:-5px;
  padding-left:-5px;
  width: 50px;
  height: 23px;
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + .slider {
    background-color: #404040;
  }

  &:checked + .slider:before {
    transform: translateX(26px);
  }
`;

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #404040;
  transition: 0.2s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "${(props) => (props.checked ? "" : "")}";
    height: 20px;
    width: 20px;
    left: ${(props) => (props.checked ? "2px" : "2px")};
    bottom: 0px;
    background-color: ${(props) => (props.checked ? " white" : " white")};
    transition: 0.2s;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: ${(props) => (props.checked ? "white" : "black")};
  }

  &:after {
    position: absolute;
    content: "${(props) => (props.checked ? "🌜" : "🌞")}";
    color: ${(props) => (props.isDarkMode ? "white" : "black")};
    font-size: 15px;
    left: ${(props) => (props.checked ? "2px" : "25px")};
    bottom: 0px;
  }

  &.active {
    background-color: #404040;
  }`