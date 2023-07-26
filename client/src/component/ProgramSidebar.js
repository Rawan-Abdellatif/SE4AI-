import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const ProgramSidebar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const [selectedLink, setSelectedLink] = useState("");
  const [activeLink, setActiveLink] = useState("");
  const { isDarkMode } = useContext(DarkModeContext);

  const toggleLinks = () => {
    setShowLinks(!showLinks);
  };

  const location = useLocation();

  useEffect(() => {
    setSelectedLink(location.pathname);
  }, [location]);

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setActiveLink(link);
  };

  const handleMouseEnter = () => {
    setActiveLink("/intro");
  };

  const handleMouseLeave = () => {
    setActiveLink("");
  };

  return (
    <SidebarContainer isDarkMode={isDarkMode}>
      <SidebarContent className="sidebar-content" isDarkMode={isDarkMode}>
        <SidebarHeading
          isDarkMode={isDarkMode}
          selected={selectedLink === "/intro"}
          isActive={activeLink === "/intro"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
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
      </SidebarContent>
    </SidebarContainer>
  );
};

export default ProgramSidebar;

const SidebarContainer = styled.div`
  width: 290px;
  margin-left: 0px;
  font-family: "Open Sans", sans-serif;
  position: sticky;
  top: 0;
  border-right: ${(props) =>
    props.isDarkMode ? "1px solid #e8e8e8" : "1px solid #e8e8e8"};
  max-height: calc(100vh - 200px);
  overflow-y: auto;
  /* background-color: ${(props) =>
    props.isDarkMode ? "#282828" : "white"}; */
`;

const SidebarContent = styled.div`
  position: sticky;
  top: 0;
  z-index: 1;
`;

const SidebarHeading = styled.h2`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 17px;
  color: ${({ selected }) => (selected ? "#bb5a7d" : "#585858")};
  cursor: pointer;
  text-decoration: none;
  margin-bottom: 3px;
  margin-left: 5px;
  padding-left: 20px;

  &:hover,
  &:active,
  &.active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#282828" : "#e8e8e8"};
    color: #bb5a7d;
  }

  a {
    color: ${({ selected }) => (selected ? "#bb5a7d" : "#585858")};
    text-decoration: none;
  }

  a:hover,
  &.active {
    color: #bb5a7d;
    ${({ selected }) =>
      selected &&
      selected !== "/training-program" &&
      "background-color: #e8e8e8;"}
  }
`;

const SidebarLink = styled(Link)`
  display: flex;
  color: ${({ selected }) => (selected ? "#bb5a7d" : "#585858")};
  font-size: 15px;
  align-items: center;
  text-decoration: none;
  height: 40px;
  margin-left: 5px;
  padding-left: 20px;
  margin-bottom: 5px;
  font-weight: bold;
  background-color: ${({ selected }) =>
    selected && selected !== "/training-program" ? "#e8e8e8" : "transparent"};

  &:hover,
  &.active,
  a:active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#282828" : "#e8e8e8"};
    color: #bb5a7d;
  }
`;

const Icon = styled.span`
  margin-left: 70px;
  font-size: 20px;
  font-weight: bold;
`;
