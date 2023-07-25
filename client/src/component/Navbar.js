import React, { useContext } from "react";
import styled from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { DarkModeContext } from "./DarkModeContext";

const Navbar = () => {
  const { toggleDarkMode, isDarkMode } = useContext(DarkModeContext);

  const handleToggle = () => {
    toggleDarkMode(); // Toggle the dark mode state in the context
  };

  return (
    <NavbarContainer isDarkMode={isDarkMode}>
      <NavMenu>
        <Nav isDarkMode={isDarkMode}>
          <a href="/">
            <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
          </a>
          <a href="/">CREATE SE4AI</a>
        </Nav>{" "}
      </NavMenu>
      <NavMenu>
        <NavMenuItem isDarkMode={isDarkMode}>
          <a href="/intro">Program</a>
        </NavMenuItem>
        <NavMenuItem isDarkMode={isDarkMode}>
          <a href="/team">Team</a>
        </NavMenuItem>
        <NavMenuItem isDarkMode={isDarkMode}>
          <a href="/blog">Events</a>
        </NavMenuItem>
        <NavMenuItem isDarkMode={isDarkMode}>
          <a href="/governance">Governance</a>
        </NavMenuItem>
        <NavMenuItem isDarkMode={isDarkMode}>
          <a href="/partners">Partners</a>
        </NavMenuItem>
        <NavMenuItem isDarkMode={isDarkMode}>
          <a href="/apply">Apply</a>
        </NavMenuItem>

        <NavMenuItem isDarkMode={isDarkMode}>
          <Contact isDarkMode={isDarkMode}>
            <a href="/contact">Contact</a>
          </Contact>
        </NavMenuItem>

        <NavMenuItem>
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
        </NavMenuItem>
      </NavMenu>
    </NavbarContainer>
  );
};

export default Navbar;

const NavbarContainer = styled.nav`
  /* background-color: #212529; */
  color: #fff;
  /* width: 100%; */
  margin-top: -10px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 12px;
  margin-left: -10px;
  margin-right: -10px;
  padding: 5px 0px;
  font-family: "Open Sans", sans-serif;
  background-color: ${(props) => (props.isDarkMode ? "#282828" : "white")};
  /* border-bottom: 1px solid #dcdcdc; */
`;

const NavMenu = styled.ul`
  display: flex;
  padding-top: 10px;
  list-style: none;
`;
const Nav = styled.li`
  /* margin-right: 3px; */
  display: flex;
  width: 120px;

  img {
    height: 40px;
    cursor: pointer;
    margin-top: -10px;
    margin-left: -40px;
    padding-left: 5px;
    margin-right: 3px;
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

const NavMenuItem = styled.li`
  margin-right: 10px;
  display: flex;
  /* margin-left: 4px; */

  a {
    /* color: #fff; */
    text-decoration: none;
    font-size: 16px;
    padding-left: 6px;
    padding-right: 2px;

    transition: 0.2s;
    /* align-items: center; */
    padding-bottom: 6px;
    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};

    &:hover {
      color: #db7093;
    }
  }
`;

const Contact = styled.div`
  padding-left: 490px;
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
  }

  &.active:before {
    transform: translateX(26px);
  }
`;
