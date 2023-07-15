import React, { useState } from "react";
import styled from "styled-components";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";

// import { BsChevronRight } from "react-icons/bs";

const ProgramSidebar = () => {
  const [showLinks, setShowLinks] = useState(true);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <SidebarContainer>
      <SidebarContent className="sidebar-content">
        <SidebarHeading>
          <a href="/intro">Program Overview</a>
        </SidebarHeading>
        <SidebarHeading onClick={toggleLinks}>
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
            <SidebarLink href="/training-program/objectives">
              Program Objectives
            </SidebarLink>
            <SidebarLink href="/training-program/components">
              Program Components
            </SidebarLink>
          </>
        )}
      </SidebarContent>
    </SidebarContainer>
  );
};

export default ProgramSidebar;

const SidebarContainer = styled.div`
  width: 350px;
  margin-left: 0px;
  font-family: "Open Sans", sans-serif;
  position: sticky;
  border-right: 1px solid #e8e8e8;
`;

const SidebarContent = styled.div`
  position: relative;
`;

const SidebarHeading = styled.h2`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 17px;
  color: #585858;
  cursor: pointer;
  text-decoration: none;
  background-color: #e8e8e8;
  margin-bottom: 3px;
  margin-left: 5px;
  padding-left: 20px;
  a {
    color: #bb5a7d;
    text-decoration: none;
  }
  a:hover {
    color: #bb5a7d;
    text-decoration: none;
  }
`;

const SidebarLink = styled.a`
  display: flex;
  color: #585858;
  font-size: 17px;
  align-items: center;
  text-decoration: none;
  height: 40px;
  margin-left: 5px;
  padding-left: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  &:hover {
    /* color: #bb5a7d; */
    background-color: #e8e8e8;
  }
`;

const Icon = styled.span`
  margin-left: 90px;
  font-size: 20px;
  font-weight: bold;
`;
const Nav = styled.div`
  /* margin-right: 3px; */
  display: flex;
  width: 120px;
`;
