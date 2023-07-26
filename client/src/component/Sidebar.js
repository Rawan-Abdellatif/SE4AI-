import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";

const Sidebar = () => {
  const [isFixed, setIsFixed] = useState(true); // Start with the Sidebar sticky
  const { isDarkMode } = useContext(DarkModeContext);

  useEffect(() => {
    const scrollHandler = () => {
      const sidebarContainer = document.querySelector(".sidebar-container");
      const contentContainer = document.querySelector(".content-container");
      const stopStickyLink = document.querySelector(".stop-sticky-link");

      if (sidebarContainer && contentContainer && stopStickyLink) {
        const sidebarHeight = sidebarContainer.clientHeight;
        const contentHeight = contentContainer.clientHeight;
        const scrollPosition = window.scrollY;

        // Calculate the position of the stopStickyLink element relative to the Sidebar container
        const linkRect = stopStickyLink.getBoundingClientRect();
        const linkPosition = linkRect.top + scrollPosition;

        // Calculate the distance from the bottom of the viewport to the bottom of the sidebar container
        const sidebarBottom = sidebarContainer.offsetTop + sidebarHeight;
        const viewportHeight = window.innerHeight;
        const distanceFromBottom =
          contentHeight - (sidebarBottom - scrollPosition) - viewportHeight;

        if (distanceFromBottom <= 0) {
          setIsFixed(false); // Remove sticky when the bottom of the sidebar container reaches the bottom of the content
        } else if (scrollPosition >= linkPosition - sidebarHeight - 200) {
          setIsFixed(false); // Remove sticky when the link comes into view
        } else {
          setIsFixed(true); // Stick to the top otherwise
        }
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
        <SidebarLink isDarkMode={isDarkMode} href="/blog/past">
          Past Events
        </SidebarLink>
        <SidebarLink isDarkMode={isDarkMode} href="/blog/upcoming">
          Upcoming Events
        </SidebarLink>
        {/* Add a stopStickyLink element at the end of the content */}
        <div className="stop-sticky-link" />
      </SidebarContent>
    </SidebarContainer>
  );
};

export default Sidebar;

const SidebarContainer = styled.div`
  width: 140px;
  margin-left: 40px;
  font-family: "Open Sans", sans-serif;
  position: ${({ isFixed }) => (isFixed ? "sticky" : "absolute")};
  top: ${({ isFixed }) => (isFixed ? "20px" : "20px")};
  bottom: ${({ isFixed }) => (isFixed ? "auto" : "40px")};
  /* border: 4px solid yellow; */
  margin-top: 40px;
`;

const SidebarContent = styled.div`
  position: relative;
  width: 140px;
  /* border: 3px solid red; */
`;

const SidebarHeading = styled.h2`
  font-size: 20px;
  font-weight: bold;
  /* color: #333333; */
  color: ${(props) => (props.isDarkMode ? "white" : " #333333")};

  margin-top: 70px;
`;

const SidebarLink = styled.a`
  display: block;
  color: #666666;
  font-size: 15px;
  padding-top: 5px;
  text-decoration: none;
  margin-bottom: 10px;
  padding-bottom: 2px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  &:hover {
    color: #bb5a7d;
  }
`;
