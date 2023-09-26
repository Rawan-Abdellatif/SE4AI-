import React, { useState,useContext } from "react";
import styled from "styled-components";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";
import { DarkModeContext } from "./DarkModeContext";
import { Link } from "react-router-dom";
import { Grid } from "@mui/material";
const ProgramComponentDropDownMedia = ({

    isDropdownOpen,
    toggleDropdown,
    activeLink, handleLinkClick
}) => {
  
    
    const { isDarkMode } = useContext(DarkModeContext);
    console.log("handleLinkClick in DropDown",handleLinkClick)

    return (
      <SidebarContainer>
            <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1, padding: "20px" }}
    
  >        <Grid item xs={12} md={12} lg={12} xl={12}>

        <DropdownHeader onClick={toggleDropdown}  isDarkMode={isDarkMode}>
          On this page{" "}
          <DropdownIcon>
          {isDropdownOpen ? <SlArrowUp style={{ fontWeight: "bloder" }} /> : <SlArrowDown style={{ fontWeight:"bolder" }} />}
</DropdownIcon>
        </DropdownHeader>
        {isDropdownOpen && (
          <SidebarContent           isDarkMode={isDarkMode}
          >
          {/* Content for the dropdown */}
          <SidebarLink
          isDarkMode={isDarkMode}
                 href="#engineering-ai-based-software-systems"
          id="#engineering-ai-based-software-systems"
          isActive={activeLink === "engineering-ai-based-software-systems"}
          onClick={() =>
            handleLinkClick("engineering-ai-based-software-systems")
          }
   
        >
          Engineering AI-based Software Systems
        </SidebarLink>

        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={
            activeLink === "social-aspects-for-ai-based-software-system"
          }
          onClick={() =>
            handleLinkClick(
              "#social-aspects-for-ai-based-software-system"
            )
          }
          href="#social-aspects-for-ai-based-software-system"
          id="#social-aspects-for-ai-based-software-system"
          >
          Social Aspects for AI-based Software System
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "professional-development-modules"}
          onClick={() =>
            handleLinkClick("professional-development-modules")
          }
          href="#professional-development-modules"
        id="#professional-development-modules">
          Professional Development Modules
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "industrial-embedding"}
          onClick={() => handleLinkClick("industrial-embedding")}
          href="#industrial-embedding"
          id="#industrial-embedding"
        >
          Industrial Embedding
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "industry-webinars-or-seminars"}
          onClick={() =>
            handleLinkClick("industry-webinars-or-seminars")
          }
          href="#industry-webinars-or-seminars"
          id="#industry-webinars-or-seminars"
        >
          Industry Webinars or Seminars
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "specialization-courses"}
          onClick={() => handleLinkClick("specialization-courses")}
          href="#specialization-courses"
          id="#specialization-courses"
        >
          Specialization Courses
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={
            activeLink === "hands-on-leadership-and-mentorship-training"
          }
          onClick={() =>
            handleLinkClick(
              "hands-on-leadership-and-mentorship-training"
            )
          }
          href="#hands-on-leadership-and-mentorship-training"
          id="#hands-on-leadership-and-mentorship-training"
        >
          Hands-on Leadership and Mentorship Training
        </SidebarLink>
        </SidebarContent>
      )}</Grid></Grid>
    </SidebarContainer>
  );
};

export default ProgramComponentDropDownMedia;

const SidebarContainer = styled.div`
margin-left:-20px;
  height: 45px;
  width:388.4px;
  margin-top:-10px;
  
   `
  
  const DropdownHeader = styled.div`
  max-width: 1000px;
  width:100%;

  padding-left:10px;
  height: 20px;
padding-top:5px;
padding-bottom:8px; 
border-radius:5px;
 /* border-bottom: 1px solid #e8e8e8; */
  cursor: pointer;
  top: 0; /* Stick the header to the top of its container */
  background-color: ${(props) => (props.isDarkMode ? "#303030":"#F0F0F0" )};
  color: ${(props) => (props.isDarkMode ? "white" : "#282828")};



`;


const SidebarContent = styled.div`  
  font-size: 16px;
  max-width: 1000px;
  width:100%;   
  /* background-color:#F0F0F0; */
padding-top:5px;
padding-left:5px;
position: relative;
background-color: ${(props) => (props.isDarkMode ? "#303030" : "#F0F0F0")};

`;
const SidebarLink = styled.a`
display: block;
/* background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")}; */

  color: ${(props) =>
    props.isActive ? "#bb5a7d" : props.isDarkMode ? "white" : "#484848"};
  font-size: 13px;
  padding-top: 5px;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #bb5a7d;
  }
`;


const DropdownIcon = styled.div`
  margin-top: -2px; // You can adjust this value as needed
  font-weight: border;
  float:right;
  padding-right:5px;
`;

