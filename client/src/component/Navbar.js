import React, { useState } from "react";
import styled from "styled-components";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <NavbarContainer isDarkMode={isDarkMode}>
      <NavMenu>
        <Nav isDarkMode={isDarkMode}>
          <a href="/">
            <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
          </a>
          <a href="/">CREATE SE4AI</a>
        </Nav>
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
          <a href="/industry">Industry</a>
        </NavMenuItem>
        <NavMenuItem isDarkMode={isDarkMode}>
          <a href="/industry">Industry</a>
        </NavMenuItem>
        <NavMenuItem isDarkMode={isDarkMode}>
          <a href="/mentoring">Mentoring </a>
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
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-weight: bold;
  font-size: 12px;
  margin: 0px 0px;
  width: 100%;
  padding: 5px 0px;
  font-family: "Open Sans", sans-serif;
  background-color: ${(props) => (props.isDarkMode ? "#212529" : "white")};
`;

const NavMenu = styled.ul`
  display: flex;
  padding-top: 20px;
  list-style: none;
`;
const Nav = styled.li`
  margin-right: 15px;
  display: flex;

  img {
    height: 40px;
    cursor: pointer;
    margin-top: -10px;
    margin-left: -30px;
    /* width: 20px; */
  }
  a {
    /* margin-top: -10px; */

    color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
    text-decoration: none;
    /* border: 1px solid black; */
    font-size: 14px;
    /* width: 80px; */
    padding-left: 7px;
    transition: 0.2s;
    text-align: center;
    &:hover {
      color: #db7093;
    }
  }
`;

const NavMenuItem = styled.li`
  margin-right: 15px;
  display: flex;

  a {
    /* color: #fff; */
    text-decoration: none;
    font-size: 14px;
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
  padding-left: 380px;
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
    color: ${(props) => (props.isDarkMode ? "black" : "white")};

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
