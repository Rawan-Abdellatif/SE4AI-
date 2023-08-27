import React, { useContext, useState } from "react";
import styled from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { DarkModeContext } from "./DarkModeContext";
import { Link, useNavigate } from "react-router-dom";
import HomePageSidebar from "./HomePageSidebar";
import { useLocation } from "react-router-dom";
import ProgramSidebarMedia from "./ProgramSidebarMedia";
import { Grid } from "@mui/material";

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
     

 
        <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1, padding: "20px" }}
    
  >     

    <Grid item xs={12} md={12} lg={12} xl={12}>
    <NavMenu  >
        <Nav isDarkMode={isDarkMode} className="logo-nav">
          <a href="/">
            <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
          </a>
          <Creat>
          <a href="/">CREATE SE4AI</a></Creat>
          </Nav>
      

        <Nav isDarkMode={isDarkMode}>
          <a href="/intro"   
               className={location.pathname === "/intro" ? "selected" : ""}>
               Program</a>
        </Nav>
    

        <Nav isDarkMode={isDarkMode}>
          <a href="/team"
          className={location.pathname === "/team" ? "selected" : ""}>Team</a>
        </Nav>
      

        <Nav isDarkMode={isDarkMode}>
          <a href="/blog" className={location.pathname === "/blog" ? "selected" : ""}>Events</a>
        </Nav>
      

        <Nav isDarkMode={isDarkMode}>
          <a href="/governance" className={location.pathname === "/governance" ? "selected" : ""}>Governance</a>
        </Nav>


        <Nav isDarkMode={isDarkMode}>
          <a href="/partners" className={location.pathname === "/partners" ? "selected" : ""}>Partners</a>
        </Nav>
        <Nav isDarkMode={isDarkMode}>
          <a href="/apply" className={location.pathname === "/apply" ? "selected" : ""}>Apply</a>
        </Nav>
     

        <Nav isDarkMode={isDarkMode} >
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
        </Nav>

 

        <Nav isDarkMode={isDarkMode} className="right-nav">
          <Contact isDarkMode={isDarkMode}>
            <a href="/contact">Contact</a>
          </Contact>
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
</Grid>
</Grid>
    </NavbarContainer>
    // </NavbarStickyContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  /* background-color: #212529; */
  color: #fff;
  /* margin-top: 0px; */
  height: 45px;
  /* display: flex; */
  /* align-items: center; */
  font-weight: bold;
  font-size: 12px;
  /* padding: 5px 0px; */
  font-family: "Open Sans", sans-serif;
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
  /* border-bottom: 1px solid #dcdcdc; */
  /* position: ${(props) => (props.scrollPosition > 20 ? "sticky" : "relative")}; */
  top: ${(props) => (props.scrollPosition > 20 ? "20px" : "0")};
  /* z-index: 1; */
  width:100%;
`;

const NavMenu = styled.ul`
  display:flex;
  flex-direction:row;
  list-style: none;
/* float:left; */
  cursor: pointer;
/* margin-left:-50px; */
padding-left:0;
/* border:2px solid yellow; */
margin-top:-65px;
/* border:4px solid yellow; */


 `

const Nav = styled.li`
 display: flex;
  cursor: pointer;
 
  /* position: relative; */
margin-right:20px; 
/* border:2px solid blue; */
padding-left:-20px;
align-items:center;
 img {
    height: 40px;
  cursor: pointer;
margin-right:10px/* margin-left:-40px; */
/* border:2px solid blue; */
  }
  a {
    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    text-decoration: none;
/* padding-left:-10px;  */
   font-size: 15px;
  /* transition: 0.2s; */
  /* margin-top: 10px;  */
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
  &.right-nav {
    margin-left: auto; /* This will push the last Nav to the right */
  }
  @media (max-width: 1000px) {
    /* Hide all Nav elements */
    
      display: none;


    /* Override display for the first Nav element (logo) */
  &.logo-nav {
      display: flex;
    }
  }
`;


const Contact = styled.div`
margin-right:20px;`;

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 50px;
  height: 20px;   @media (max-width: 768px) {
    display: none; 
  }
`;

const SwitchInput = styled.input`
   @media (max-width: 768px) {
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
    max-width: 20px;
    left: ${(props) => (props.checked ? "2px" : "2px")};
    bottom: 0px;
    background-color: ${(props) => (props.checked ? " white" : " white")};
    transition: 0.2s;
    border-radius: 50%;
    display: flex;
    /* align-items: center;
    justify-content: center; */
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
/* padding-top:17px; */
margin-left:-3px;
`
const NavMenu1 = styled.ul`
  display: flex;
  list-style: none;
  /* position: relative; */
  cursor: pointer;
/* margin-left:-50px; */


 `
 const Nav1 = styled.li`
 display: flex;
  cursor: pointer;
  /* position: relative; */
/* margin-left:5px;  */
 /* border:2px solid orange; */
 /* padding-left:0px; */
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
