import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { DarkModeContext } from "./DarkModeContext";
import { Link, useNavigate } from "react-router-dom";
import HomePageSidebar from "./HomePageSidebar";
import { useLocation } from "react-router-dom";
import ProgramSidebarMedia from "./ProgramSidebarMedia";


const Navbar = () => {
  const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);
  const [showDropdown, setShowDropdown] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectedLink, setSelectedLink] = useState(null);

  const navigate = useNavigate();
  const location = useLocation();
  const shouldShowSidebar =
  location.pathname !== "/intro" &&
  location.pathname !== "/training-program/objectives" &&
  location.pathname !== "/training-program/components";



  const shouldShowProgramSidebar =
  location.pathname === "/intro" ||
  location.pathname === "/training-program/objectives" ||
  location.pathname === "/training-program/components";

  const handleLoginToggle = () => {
    setShowDropdown(!showDropdown); // Toggle the visibility of the dropdown
  };

  const handleDropdownOptionClick = (option) => {
    setSelectedOption(option);
    setShowDropdown(false); // Close the dropdown when an option is selected
  };
  const handleToggle = () => {
    toggleDarkMode(); // Toggle the dark mode state in the context
  };

  const handleAdminClick = () => {
    // Use navigate to redirect to the /adminlogin route
    navigate("/adminlogin");
  };
  return (
    // <NavbarStickyContainer>
    <NavbarContainer isDarkMode={isDarkMode}>  
    {shouldShowProgramSidebar &&<ProgramSidebarMedia/>}    
        {shouldShowSidebar && <HomePageSidebar />}
      
  <NavMenu1>
        <Nav1 isDarkMode={isDarkMode}>
          <a href="/">
            <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
          </a>
          <Creat>
          <a href="/">CREATE SE4AI</a></Creat>
          </Nav1>
          </NavMenu1>
<NavMenu>
        <Nav isDarkMode={isDarkMode}>
          <a href="/intro"   
               className={location.pathname === "/intro" ? "selected" : ""}>
               Program</a>
        </Nav></NavMenu>
        <NavMenu>

        <Nav isDarkMode={isDarkMode}>
          <a href="/team"
          className={location.pathname === "/team" ? "selected" : ""}>Team</a>
        </Nav></NavMenu>
        <NavMenu>

        <Nav isDarkMode={isDarkMode}>
          <a href="/blog" className={location.pathname === "/blog" ? "selected" : ""}>Events</a>
        </Nav></NavMenu>
        <NavMenu>

        <Nav isDarkMode={isDarkMode}>
          <a href="/governance" className={location.pathname === "/governance" ? "selected" : ""}>Governance</a>
        </Nav></NavMenu>
        <NavMenu>

        <Nav isDarkMode={isDarkMode}>
          <a href="/partners" className={location.pathname === "/partners" ? "selected" : ""}>Partners</a>
        </Nav></NavMenu>
        <NavMenu>

        <Nav isDarkMode={isDarkMode}>
          <a href="/apply" className={location.pathname === "/apply" ? "selected" : ""}>Apply</a>
        </Nav></NavMenu>
        <NavMenu>

        <Nav isDarkMode={isDarkMode}>
          {/* Click event for "Login" */}
          <LoginLink onClick={handleLoginToggle}>Login</LoginLink>

          {/* Dropdown menu */}
          {showDropdown && (
            <DropdownMenuWrapper isDarkMode={isDarkMode}>
              <DropdownMenu isDarkMode={isDarkMode}>
                <DropdownItem onClick={handleAdminClick}>Admin</DropdownItem>

                <DropdownItem
                  onClick={() => handleDropdownOptionClick("member")}
                >
                  Member
                </DropdownItem>
              </DropdownMenu>
            </DropdownMenuWrapper>
          )}
        </Nav></NavMenu>

        <NavMenu>

        <Nav isDarkMode={isDarkMode}>
          <Contact isDarkMode={isDarkMode}>
            <a href="/contact">Contact</a>
          </Contact>
        </Nav>
        </NavMenu>
        <NavMenu>

        <Nav>
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
        </Nav>
        </NavMenu>
    </NavbarContainer>
    // </NavbarStickyContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  /* background-color: #212529; */
  color: #fff;
  margin-top: 0px;
  height: 45px;
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 12px;
  padding: 5px 0px;
  font-family: "Open Sans", sans-serif;
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
  /* border-bottom: 1px solid #dcdcdc; */
  position: ${(props) => (props.scrollPosition > 20 ? "sticky" : "relative")};
  top: ${(props) => (props.scrollPosition > 20 ? "20px" : "0")};
  z-index: 1;
  transition: top 0.3s ease; /* Add a transition for smooth movement */
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  position: relative;
  cursor: pointer;
/* margin-left:-50px; */
/* border:2px solid yellow; */
margin-left:-17px;

 `

const Nav = styled.li`
 display: flex;
  cursor: pointer;
  /* position: relative; */
/* margin-left:5px;  */
 /* border:2px solid orange; */
padding-left:-10px;
/* width:115px;  */
 img {
    height: 40px;
  cursor: pointer;
  margin-top: -10px;
margin-left:-40px;
/* border:2px solid blue; */
  }
  a {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    text-decoration: none;
/* padding-left:-10px;  */
   font-size: 15px;
  transition: 0.2s;
  margin-top: 10px; 
  /* padding-left:-20px; */
padding-left:-10px;
/* width:80px; */
 &.selected {
  color: #BB5A7D;
    }
  &:hover {
      color: #BB5A7D;
    }
    @media (max-width: 768px) {
     display: none; 
   }
    
  }
 
`;

// const NavMenuItem = styled.li`
//   /* margin-right: 10px; */
//   /* text-align: center; */
//   margin-left:70px;
//   border:2px solid red;
// /* padding-left:4px;  display: flex; */
//   a {
//     /* margin-left:5px; */
//     /* padding-left:10px; */
//     text-decoration: none;
//     font-size: 16px;
//     padding-right: 2px;
//     border:2px solid blue;

//     transition: 0.2s;
//     /* align-items: center; */
//     padding-bottom: 6px;
//     color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};

//     &:hover {
//       color: #BB5A7D;
//     } 
//     @media (max-width: 768px) {
//     display: none; 
//   }
//   }
// `;

const Contact = styled.div`
margin-left: 650px;
/* padding-right:3px; */

`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;   @media (max-width: 768px) {
    display: none; 
  }
`;

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;   @media (max-width: 768px) {
    display: none; 
  }

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
  border-radius: 34px;   @media (max-width: 768px) {
    display: none; 
  }

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
  }

  &.active:before {
    transform: translateX(26px);
  }
`;
const LoginLink = styled.a`
  cursor: pointer;

  // Add any additional styling for the login link here if needed
`;

const DropdownMenuWrapper = styled.div`
  position: relative;
  display: inline-block;
  margin-left: -70px;
`;

const DropdownMenu = styled.div`
  position: absolute;
  top: 100%;
  left: 0;
  /* border: 1px solid #dcdcdc; */
  border-radius: 4px;
  padding: 8px;
  z-index: 1; /* Ensure the dropdown menu appears above other elements */
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
`;

const DropdownItem = styled.div`
  cursor: pointer;
  font-size: 16px;

  padding: 6px 12px;
  /* color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")}; */
  /* transition: background-color 0.2s; */

  &:hover {
    background-color: #f0f0f0;
    color: #BB5A7D;
  }
`;
const Creat=styled.div`
width:120px;
padding-top:17px;
margin-left:-3px;
`
const NavMenu1 = styled.ul`
  display: flex;
  list-style: none;
  position: relative;
  cursor: pointer;
/* margin-left:-50px; */
/* border:2px solid yellow; */

 `
 const Nav1 = styled.li`
 display: flex;
  cursor: pointer;
  /* position: relative; */
/* margin-left:5px;  */
 /* border:2px solid orange; */
 padding-left:0px;
/* width:115px;  */
 img {
    height: 35px;
  cursor: pointer;
  margin-top: 0px;
margin-left:-40px;
/* border:2px solid blue; */
  }
  a {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    text-decoration: none;
/* padding-left:-10px;  */
   font-size: 15px;
  transition: 0.2s;
  margin-top: 10px; 
  /* padding-left:-20px; */
margin-left:2px;
/* width:80px; */
  /* border:2px solid green; */
  &:hover {
      color: #BB5A7D;
    }
  
    
  }
 
`;
