import React, { useState } from "react";
import styled from "styled-components";
import { SlArrowUp, SlArrowDown } from "react-icons/sl";

const ProgramComponentDropDownMedia = ({
    activeLink,
    isDropdownOpen,
    toggleDropdown,
  }) => {
    return (
      <SidebarContainer>
        <DropdownHeader onClick={toggleDropdown}>
          On this page{" "}
          <DropdownIcon>
  {isDropdownOpen ? <SlArrowUp /> : <SlArrowDown />}
</DropdownIcon>
        </DropdownHeader>
        {isDropdownOpen && (
          <SidebarContent>
          {/* Content for the dropdown */}
          <SidebarLink
          isActive={activeLink === "engineering-ai-based-software-systems"}
      
          href="#engineering-ai-based-software-systems"
        >
          Engineering AI-based Software Systems
        </SidebarLink>

        <SidebarLink
          isActive={
            activeLink === "social-aspects-for-ai-based-software-system"
          }
       
          href="#social-aspects-for-ai-based-software-system"
        >
          Social Aspects for AI-based Software System
        </SidebarLink>
        <SidebarLink
          isActive={activeLink === "professional-development-modules"}
          href="#professional-development-modules"
        >
          Professional Development Modules
        </SidebarLink>
        <SidebarLink
          isActive={activeLink === "industrial-embedding"}
         
          href="#industrial-embedding"
        >
          Industrial Embedding
        </SidebarLink>
        <SidebarLink
          isActive={activeLink === "industry-webinars-or-seminars"}
        
          href="#industry-webinars-or-seminars"
        >
          Industry Webinars or Seminars
        </SidebarLink>
        <SidebarLink
          isActive={activeLink === "specialization-courses"}
          href="#specialization-courses"
        >
          Specialization Courses
        </SidebarLink>
        <SidebarLink
          isActive={
            activeLink === "hands-on-leadership-and-mentorship-training"
          }
          href="#hands-on-leadership-and-mentorship-training"
        >
          Hands-on Leadership and Mentorship Training
        </SidebarLink>
        </SidebarContent>
      )}
    </SidebarContainer>
  );
};

export default ProgramComponentDropDownMedia;

const SidebarContainer = styled.div`
margin-left:25px;
  height: 40px;
  width: 300px;
   `
  
  const DropdownHeader = styled.div`
  width: 335px;
  padding-left:10px;
  height: 30px;
padding-top:10px; 
 border-bottom: 1px solid #e8e8e8;
  cursor: pointer;
  top: 0; /* Stick the header to the top of its container */
  background-color: #f0f0f0;
  z-index: 10; /* Ensure the header is above the content */
`;


const SidebarContent = styled.div`  
  font-size: 16px;
  padding-left:5px;
  background-color:#F0F0F0;

  /* height: 40px; */
  width: 335px;
  /* left: 5; */
  z-index: 10; /* Ensure the dropdown is above the main content */
`;

const SidebarLink = styled.a`
  width: 300px;
  display: block;
margin-left:5px;  font-size: 16px;
  padding: 6px 5px;
  text-decoration: none;
  color:black;
  cursor: pointer;
  &:hover {
    color: #bb5a7d;
  }
`;
const DropdownIcon = styled.div`
  margin-top: -20px; // You can adjust this value as needed
  margin-left: 300px; // Adjust this value as needed
  font-weight: border;
`;

