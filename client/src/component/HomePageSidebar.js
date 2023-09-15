import React, { useContext, useState,useEffect ,useRef} from "react";
import styled from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { DarkModeContext } from "./DarkModeContext";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

const HomePageSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
  const [selectedLink, setSelectedLink] = useState(""); // Track the selected link
  const [activeLink, setActiveLink] = useState(""); // Track the active link
  const sidebarRef = useRef(null);

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
    setIsOpen(false); // Close the sidebar when a link is clicked

  };
  useEffect(() => {
    const closeSidebarOnClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };

    // Add a click event listener to the entire page
    document.addEventListener("click", closeSidebarOnClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", closeSidebarOnClickOutside);
    };
  }, []);
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

        <SidebarLink
          isActive={activeLink === "/intro"}
          selected={selectedLink === "/intro"}
          isDarkMode={isDarkMode}
          onClick={() => handleLinkClick("/intro")}
         to="/intro"
         onChange={handleToggle}

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
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
 color: ${(props) => (props.isDarkMode ? "#a4a6a8" : "#a4a6a8")};
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



  }
`;

const CloseButton = styled.button`
  font-size: 24px;
  cursor: pointer;
margin-left:35px;
/* float:right; */
border:none;
color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};

background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
`;

const SidebarLink = styled(Link)`
  display: block;
  /* padding: 10px; */
/* border:2px solid orange; */
font-family:   "-apple-system", "Segoe UI", sans-serif;
font-weight:500;
/* margin-left:5px;
margin-top:-5px; */
  font-size:16px;
padding:6px 16px; 
 text-decoration:none;
  color: ${(props) =>
    props.isSelected ? "white" : props.isDarkMode ? "#DADDE1" : "gray"};
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
    
  }




`;
const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  /* border:2px solid green; */
  margin-left:-5px;
  padding-left:-5px;
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
