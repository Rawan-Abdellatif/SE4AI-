import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
  const [isFixed, setIsFixed] = useState(true);
  const { isDarkMode } = useContext(DarkModeContext);
  const [selectedLink, setSelectedLink] = useState("");
  const location = useLocation();

  useEffect(() => {
    setSelectedLink(location.pathname);
  }, [location]);

  useEffect(() => {
    const scrollHandler = () => {
      const sidebarContainer = document.querySelector(".sidebar-container");
      const contentContainer = document.querySelector(".content-container");
      const stopStickyLink = document.querySelector(".stop-sticky-link");

      if (sidebarContainer && contentContainer && stopStickyLink) {
        const sidebarHeight = sidebarContainer.clientHeight;
        const contentHeight = contentContainer.clientHeight;
        const scrollPosition = window.scrollY;

        const linkRect = stopStickyLink.getBoundingClientRect();
        const linkPosition = linkRect.top + scrollPosition;

        const sidebarBottom = sidebarContainer.offsetTop + sidebarHeight;
        const viewportHeight = window.innerHeight;
        const distanceFromBottom =
          contentHeight - (sidebarBottom - scrollPosition) - viewportHeight;

        setIsFixed(
          distanceFromBottom > 0 &&
            scrollPosition < linkPosition - sidebarHeight - 200
        );
      }
    };

    window.addEventListener("scroll", scrollHandler);

    return () => {
      window.removeEventListener("scroll", scrollHandler);
    };
  }, []);

  return (
    <SidebarContainer
      isDarkMode={isDarkMode}
      isFixed={isFixed}
      className="sidebar-container"
    >
      <SidebarContent isDarkMode={isDarkMode} className="sidebar-content">
        <SidebarHeading isDarkMode={isDarkMode}>Recent posts</SidebarHeading>
        <SidebarLink
          isDarkMode={isDarkMode}
          to="/blog/past"
          selected={selectedLink === "/blog/past"}
          activeClassName="active"
          inactiveClassName="inactive"
        >
          Past Events
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          to="/blog/upcoming"
          selected={selectedLink === "/blog/upcoming"}
          activeClassName="active"
          inactiveClassName="inactive"
        >
          Upcoming Events
        </SidebarLink>

        <div className="stop-sticky-link" />
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 140px;
  padding-left: 70px;
  font-family: "Open Sans", sans-serif;
  position: ${({ isFixed }) => (isFixed ? "sticky" : "sticky")};
  top: ${({ isFixed }) => (isFixed ? "100px" : "80px")};
  transition: transform 0.3s ease;
  transform: translateY(${({ isFixed }) => (isFixed ? "-20px" : "10px")}); @media (max-width: 768px) {
    display: none; // Hide the ProgramSidebar on screens with max-width: 768px
  }
`;

const SidebarContent = styled.div`
  position: relative;
  width: 150px;
  height: 110px;
  margin-top: 10px;
  padding-top: 7px;
`;

const SidebarHeading = styled.h2`
  font-size: 18px;
  font-weight: bold;
  color: ${(props) => (props.isDarkMode ? "white" : "#333333")};
  margin-top: 15px;
  padding-top: 1px;
`;

const SidebarLink = styled(NavLink)`
  display: block;
  font-size: 12px;
  padding-top: 1px;
  text-decoration: none;
  margin-bottom: 7px;
  padding-bottom: 2px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* background-color: ${({ selected, isDarkMode }) =>
    selected && isDarkMode
      ? "#282828"
      : selected
      ? "#e8e8e8"
      : "transparent"}; */

  &:hover,
  &:focus {
    color: #bb5a7d;
  }

  &.active {
    color: ${(props) => (props.isDarkMode ? "#bb5a7d" : "#bb5a7d")};
    /* Add any additional styles for the active link */
  }

  &.inactive {
    color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    /* Add any additional styles for the inactive link */
  }
`;
