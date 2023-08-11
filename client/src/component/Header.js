import React, { useContext } from "react";
import styled from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { DarkModeContext } from "./DarkModeContext";

 const Header= ()=>{  
    const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);

    
    const handleToggle = () => {
    toggleDarkMode(); // Toggle the dark mode state in the context
  };
    return ( <NavbarContainer isDarkMode={isDarkMode}>
        <NavMenu>
          <Nav isDarkMode={isDarkMode}>
            <a href="/">
              <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
            </a>
            <a href="/">CREATE SE4AI</a>
          </Nav>{" "}
        </NavMenu>
       </NavbarContainer>)

 }
 export default Header; 
 const NavbarContainer = styled.nav`
  /* background-color: #212529; */
  color: #fff;
  /* width: 100%; */
  margin-top: -10px;
  height: 45px;
  display: flex;
  align-items: center;
  /* justify-content: space-between; */
  font-weight: bold;
  font-size: 12px;
  margin-left: -10px;
  /* margin-right: -10px; */
  padding: 5px 0px;
  font-family: "Open Sans", sans-serif;
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
  /* border-bottom: 1px solid #dcdcdc; */
  position: ${(props) => (props.scrollPosition > 20 ? "sticky" : "relative")};
  top: ${(props) => (props.scrollPosition > 20 ? "20px" : "0")};
  z-index: 1;
  transition: top 0.3s ease; /* Add a transition for smooth movement */
  @media (max-width: 768px) {
    display: none; 
  }
`;

const NavMenu = styled.ul`
  display: flex;
  padding-top: 10px;
  list-style: none;`
  
  const Nav = styled.li`
  /* margin-right: 3px; */
  display: flex;
  margin-left: -30px;

  img {
    height: 40px;
    cursor: pointer;
    margin-top: -10px;
    /* padding-left: 7px; */
    /* margin-right: 3px; */
    /* width: 20px; */
  }
  a {
    /* margin-top: -10px; */
    align-items: vertical;
    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    text-decoration: none;
    font-size: 15px;
    font-weight: bolder;
    padding-top: 1px;
    width: 120px;
    margin-left: -40px;
    /* padding-right: -3px; */
    transition: 0.2s;
    text-align: center;
    &:hover {
      color: #BB5A7D;
    }
  }
`;