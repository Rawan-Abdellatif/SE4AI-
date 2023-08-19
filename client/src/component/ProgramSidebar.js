import React, { useState, useEffect, useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { IoIosArrowDown, IoIosArrowForward } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
const ProgramSidebar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const [selectedLink, setSelectedLink] = useState("");
  const [activeLink, setActiveLink] = useState("");
  const { isDarkMode } = useContext(DarkModeContext);

  const toggleLinks = () => {
    if (!showLinks) {
      setSelectedLink('/training-program/objectives');
    }
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
          selected={selectedLink === "/"}
          isActive={activeLink === "/"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <NavMenu>
            <Nav isDarkMode={isDarkMode}>
              <a href="/">
                <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
              </a>
              <a href="/">CREATE SE4AI</a>
            </Nav>{" "}
          </NavMenu>
        </SidebarHeading>
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
  margin-left: 1px;
  font-family: "Open Sans", sans-serif;
  position: sticky;
  margin-top: -90px;
  top: 0;
  /* z-index: 1; */

  max-height: calc(70vh - 40px);
  cursor: pointer;
  text-decoration: none;
  /* margin-bottom: 3px; */
  margin-left: 12px;
  /* padding-left: 20px; */
  /* margin-top: -20px; */
  padding-top: 5px;
  /* margin-bottom: 15px; */
  font-weight: bold;
  background-color: ${({ selected, isDarkMode }) =>
    selected && isDarkMode ? "#282828" : selected ? "#e8e8e8" : "transparent"};

  &.active,
  a:active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#282828" : "#e8e8e8"};
    color: #bb5a7d;
  }
  @media (max-width: 995px) {
    display: none; 
  }
`;

const SidebarContent = styled.div`
  position: sticky;
  top: 0;
  width: 280px;
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
  padding-left:10px;
  /* margin-left: 10px; */
  /* padding-left: 20px; */
  /* margin-top: -20px; */
  /* padding-top: 5px; */
  /* z-index: -1; */
  /* top: -10px; */
  background-color: ${({ selected, isDarkMode }) =>
    selected && isDarkMode ? "#282828" : selected ? "#F0F0F0" : "transparent"};
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
  background-color: ${({ selected, isDarkMode }) =>
    selected && isDarkMode ? "#282828" : selected ? "#e8e8e8" : "transparent"};

  &:hover,
  &.active,
  a:active {
    background-color: ${({ isDarkMode }) =>
      isDarkMode ? "#282828" : "#e8e8e8"};
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
  margin-left: 4px;
  margin-top: 0px;
  /* padding-top: 10px; */
  position: sticky;
  list-style: none;
z-index:1 ;`;
const Nav = styled.li`
  /* margin-right: 3px; */
  display: flex;
  width: 140px;
  /* top: -90px; */

  img {
    height: 40px;
    cursor: pointer;
    margin-top: -9px;
    margin-left: -40px;
    padding-left: 5px;
    margin-right: 3px;
    /* width: 20px; */
  }
  a {
    /* margin-top: -10px; */
    align-items: vertical;

    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    padding-top:3px;
    text-decoration: none;
    font-size: 15px;
    font-weight: bolder;
    /* padding-top: -170px; */
    /* width: 80px; */
    padding-left: 4px;
    /* padding-right: -3px; */
    transition: 0.2s;
    text-align: center;
    &:hover {
      color: #db7093;
    }
  }
`;
