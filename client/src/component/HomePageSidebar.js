import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { DarkModeContext } from "./DarkModeContext";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";

const HomePageSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
  const [selectedLink, setSelectedLink] = useState(""); // Track the selected link
  const [activeLink, setActiveLink] = useState(""); // Track the active link

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
  };

  return (
    <Container isDarkMode={isDarkMode}>
      <SidebarButton isDarkMode={isDarkMode} onClick={toggleSidebar}>
        ☰
      </SidebarButton>
      <SidebarContainer isDarkMode={isDarkMode} isOpen={isOpen}>
        <NavMenu isDarkMode={isDarkMode}>
          <Nav isDarkMode={isDarkMode}>
            <a href="/">
              <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />
            </a>
            <a href="/">CREATE SE4AI</a>
          </Nav>{" "}
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
            <AiOutlineClose />
          </CloseButton>
        </NavMenu>

        <SidebarLink
          isActive={activeLink === "/intro"}
          selected={selectedLink === "/intro"}
          isDarkMode={isDarkMode}
          onClick={() => handleLinkClick("/intro")}
         to="/intro"
        >
          Program
        </SidebarLink>
        <SidebarLink
          isActive={activeLink === "/team"}
          selected={selectedLink === "/team"}
          isDarkMode={isDarkMode}
          onClick={() => handleLinkClick("/team")}
         to="/team"
        >
          Team
        </SidebarLink>
        <SidebarLink
          isActive={activeLink === "/blog"}
          selected={selectedLink === "/blog"}
          isDarkMode={isDarkMode}
          onClick={() => handleLinkClick("/blog")}
          to="/blog"
        >
          Events
        </SidebarLink>
        <SidebarLink
          selected={selectedLink === "/governance"}
          isDarkMode={isDarkMode}
          isActive={activeLink === "/governance"}
          to="/governance"
          onClick={() => handleLinkClick("/governance")}

        >
          Governance
        </SidebarLink>
        <SidebarLink
          isActive={activeLink === "/partners"}
          selected={selectedLink === "/partners"}
          onClick={() => handleLinkClick("/partners")}

          isDarkMode={isDarkMode}
          to="/partners"
        >
          Partners
        </SidebarLink>
        <SidebarLink
         selected={selectedLink === "/apply"}
          isActive={activeLink === "/apply"}
          onClick={() => handleLinkClick("/apply")}

          isDarkMode={isDarkMode}
          to="/apply"
        >
          Apply
        </SidebarLink>
        <SidebarLink
         selected={selectedLink === "/contact"}
          isActive={activeLink === "/contact"}
          isDarkMode={isDarkMode}
          to="/contact"
          onClick={() => handleLinkClick("/contact")}

        >
          Contact
        </SidebarLink>


      </SidebarContainer>

    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width:100%;
  height:100%; 

`;

const SidebarButton = styled.button`
  font-size: 24px;
  cursor: pointer;
  border:none;
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};

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
  transition: 0.5s;

  @media (max-width: 995px) {
    position: absolute;
    z-index: 1;
    width: ${(props) => (props.isOpen ? "85%" : "0")};
    /* height: ${(props) => (props.isOpen ? "100%" : "0")}; */
margin-left:-5px;
padding-left:10px;



  }
`;

const CloseButton = styled.button`
  font-size: 24px;
  cursor: pointer;
margin-left:35px;
border:none;
color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};

background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
`;

const SidebarLink = styled(Link)`
  display: block;
  padding: 8px;
  /* color:gray; */
  font-size:15px;
  padding-top:15px;
  text-decoration:none;
  color: ${(props) =>
    props.isSelected ? "white" : props.isDarkMode ? "#fff" : "Gray"};
  background-color: ${(props) =>
    props.isActive ? "#BB5A7D" : props.isSelected ? "#BB5A7D" : "transparent"};
  transition: background-color 0.3s, color 0.3s;

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


const NavMenu = styled.ul`
  display: flex;
  padding-top: 10px;
  list-style: none;
border-bottom: ${(props) => (props.isDarkMode ? "1px solid #282828" : "1px solid lightGray")};
`;
const Nav = styled.li`
  /* margin-right: 3px; */
  display: flex;
  margin-left: -40px;
width:200px;
  img {
    height: 40px;
    cursor: pointer;
    margin-top: -10px;
    /* padding-left: 7px; */
    /* margin-right: 3px; */

  }
  a {
    /* margin-top: -10px; */
    align-items: vertical;
    flex-direction:row;
    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    text-decoration: none;
    font-size: 15px;
    font-weight: bolder;
    padding-top: 1px;
    width: 150px;
    
    margin-left: -40px;
    /* padding-right: -3px; */
    transition: 0.2s;
    text-align: center;
    &:hover {
      color: #BB5A7D;
    }
  }
`;
const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;
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
    left: ${(props) => (props.checked ? "8px" : "28px")};
    bottom: 0px;
  }

  &.active {
    background-color: #404040;
  }`
export default HomePageSidebar;
