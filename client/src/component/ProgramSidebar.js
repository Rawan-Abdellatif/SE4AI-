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
  const [isNavMenuVisible, setIsNavMenuVisible] = useState(false); // New state

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
  useEffect(() => {
    const handleScroll = () => {
      // Calculate the scroll position threshold where you want to show/hide the NavMenu
      const scrollThreshold = 100; // Adjust this value as needed

      if (window.scrollY > scrollThreshold) {
        setIsNavMenuVisible(false);
      } else {
        setIsNavMenuVisible(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const isProgramPage = location.pathname.startsWith("/training-program/components");

  return (
    
    <SidebarContainer isDarkMode={isDarkMode}  isProgramPage={isProgramPage}>
      <SidebarContent className="sidebar-content" isDarkMode={isDarkMode}>
        <SidebarHead
          isDarkMode={isDarkMode}
          selected={selectedLink === "/"}
          isActive={activeLink === "/"}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
        {isProgramPage && !isNavMenuVisible && (
        <NavMenu style={{ backgroundColor: isDarkMode ? 'inherit' : 'inherit' }}>
<Nav
  isDarkMode={isDarkMode}
  style={{ backgroundColor: isDarkMode ? 'inherit' : 'inherit' }}
>
              <a href="/">
                <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
              </a>
              <a href="/">CREATE SE4AI</a>
            </Nav>{" "}
          </NavMenu> )}
        </SidebarHead>
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
              isActive={activeLink === "/training-program/objectives"}

            >
              Program Objectives
            </SidebarLink>
            <SidebarLink
              isDarkMode={isDarkMode}
              to="/training-program/components"
              selected={selectedLink === "/training-program/components"}
              onClick={() => handleLinkClick("/training-program/components")}
              isActive={activeLink === "/training-program/components"}

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
  padding-top: 20px;
  cursor: pointer;
  text-decoration: none;
  margin-left: 12px;
  position: ${({ isProgramPage }) => (isProgramPage ? "sticky" : "static")};
  top: 0;
  margin-top: ${({ isProgramPage }) => (isProgramPage ? "-80px" : "-80px")};
  max-height: ${({ isProgramPage }) => (isProgramPage ? "calc(70vh - 40px)" : "95px")};
  /* border:4px solid orange; */
  font-weight: bold;
  background-color: ${({ selected, isDarkMode }) =>
    selected && isDarkMode ? "#282828" : selected ? "#e8e8e8" : "transparent"};
  &.active,
  a:active {
    background-color: ${({ isDarkMode }) => (isDarkMode ? "#282828" : "#e8e8e8")};
    color: #bb5a7d;
    z-index:10;
  }
  @media (max-width: 1000px) {
    display: none;
  }
`;

const SidebarContent = styled.div`
  position: sticky;
  top: 5px;
  width: 280px;
  /* height:100%; */

  `;

const SidebarHeading = styled.h2`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 17px;
  color: ${({ selected, isDarkMode }) =>
    selected ? "#bb5a7d" : isDarkMode ? "white" : "black"};
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
      isDarkMode ? "#383838" : "#e8e8e8"};
    color: #bb5a7d;
  }


  a {
    color: ${({ selected, isDarkMode }) =>
      selected ? "#bb5a7d" : isDarkMode ? "white" : "black"};    text-decoration: none;
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
  color: ${({ selected, isDarkMode }) =>
      selected ? "#bb5a7d" : isDarkMode ? "white" : "black"}; 
  /* color: ${(props) => (props.isDarkMode ? "white" : "black")}; */
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
  display:flex;
  flex-direction:row;
  list-style: none;
  cursor: pointer;
margin-left:-30px;
/* padding-left:40px; */
padding-bottom:-5px;
/* margin-top:10px; */
  /* padding-top: 10px; */
  position: sticky;
  list-style: none;
z-index:-1 ;
`;
const Nav = styled.li`
 display: flex;
  cursor: pointer;
 font-weight:bold;
  /* position: relative; */
margin-right:20px; 
/* border:2px solid blue; */
padding-left:-50px;
align-items:center;
  cursor: pointer;
  /* position: relative; */
margin-right:20px; 
/* border:2px solid blue; */
z-index: -1; 
img {
padding-top:1.4px;    height: 40px;
  cursor: pointer;
margin-right:3.5px;/* margin-left:-40px; */
 }
  a {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    text-decoration: none;
/* padding-left:-10px;  */
/* padding-top:1.9px; */
   font-size: 15px;
    &:hover {
      color: #db7093;
    }
  }
`;
const SidebarHead = styled.h2`
  display: flex;
  align-items: center;
  height: 40px;
  font-size: 17px;
  color: ${({ selected, isDarkMode }) =>
    selected ? "#bb5a7d" : isDarkMode ? "white" : "black"};
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

    color: #bb5a7d;
  }


  a {
    color: ${({ selected, isDarkMode }) =>
      selected ? "#bb5a7d" : isDarkMode ? "white" : "black"};    text-decoration: none;
  }


`;
