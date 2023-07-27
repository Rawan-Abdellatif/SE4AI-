import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";

const RightSidebar = ({ activeLink, handleLinkClick }) => {
  const { isDarkMode } = useContext(DarkModeContext);
  // const [activeLink, setActiveLink] = useState(""); // Step 1: State to track the active link

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sidebarContent = document.querySelector(".sidebar-content");
  //     sidebarContent.style.transform = `translateY(${window.pageYOffset}px)`;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleLinkClick = (href) => {
  //   setActiveLink(href); // Step 2: Update active link state when a link is clicked
  // };

  return (
    <SidebarContainer>
      <SidebarContent className="sidebar-content">
        <SidebarLink
          isDarkMode={isDarkMode}
          href="#industry-talks-webinar---april-25-2023"
          isActive={activeLink === "industry-talks-webinar---april-25-2023"}
          onClick={() =>
            handleLinkClick("industry-talks-webinar---april-25-2023")
          }
        >
          Industry Talks Webinar - April 25, 2023
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "trainee-talks-webinar---april-3rd-2023"} // Step 3: Add 'active' prop to check if this link is active
          href="#trainee-talks-webinar---april-3rd-2023"
          onClick={() =>
            handleLinkClick("trainee-talks-webinar---april-3rd-2023")
          } // Step 2: Attach onClick event handler
        >
          Trainee Talks Webinar - April 3rd, 2023
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          href="#women-in-engineering-wie---march-18-2023"
          onClick={() =>
            handleLinkClick("women-in-engineering-wie---march-18-2023")
          } // Step 2: Attach onClick event handler
          isActive={activeLink === "women-in-engineering-wie---march-18-2023"} // Step 3: Add 'active' prop to check if this link is active
        >
          Women in Engineering (WIE) - March 18, 2023
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          href="#trainee-talks-webinar---february-27-2023"
          isActive={activeLink === "trainee-talks-webinar---february-27-2023"} // Step 3: Add 'active' prop to check if this link is active
          onClick={() =>
            handleLinkClick("trainee-talks-webinar---february-27-2023")
          } // Step 2: Attach onClick event handler
        >
          Trainee Talks Webinar - February 27, 2023
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          href="#industry-talks-webinar---february-10-2023"
          isActive={activeLink === "industry-talks-webinar---february-10-2023"} // Step 3: Add 'active' prop to check if this link is active
          onClick={() =>
            handleLinkClick("industry-talks-webinar---february-10-2023")
          } // Step 2: Attach onClick event handler
        >
          Industry Talks Webinar - February 10, 2023
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "trainee-talks-webinar---december-13-2022"} // Step 3: Add 'active' prop to check if this link is active
          href="#trainee-talks-webinar---december-13-2022"
          onClick={() =>
            handleLinkClick("trainee-talks-webinar---december-13-2022")
          } // Step 2: Attach onClick event handler
        >
          Trainee Talks Webinar - December 13, 2022
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "industry-talks-webinar---november-18-2022"} // Step 3: Add 'active' prop to check if this link is active
          href="#industry-talks-webinar---november-18-2022"
          onClick={() =>
            handleLinkClick("industry-talks-webinar---november-18-2022")
          } // Step 2: Attach onClick event handler
        >
          Industry Talks Webinar - November 18, 2022
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "trainee-talks-webinar---november-4-2022"} // Step 3: Add 'active' prop to check if this link is active
          href="#trainee-talks-webinar---november-4-2022"
          onClick={() =>
            handleLinkClick("trainee-talks-webinar---november-4-2022")
          } // Step 2: Attach onClick event handler
        >
          Trainee Talks Webinar - November 4, 2022
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "create-se4ai-retreat---june-3-2022"} // Step 3: Add 'active' prop to check if this link is active
          href="#create-se4ai-retreat---june-3-2022"
          onClick={() => handleLinkClick("create-se4ai-retreat---june-3-2022")} // Step 2: Attach onClick event handler
        >
          CREATE SE4AI Retreat - June 3, 2022
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "guest-speaker-webinar---april-12-2022"} // Step 3: Add 'active' prop to check if this link is active
          href="#guest-speaker-webinar---april-12-2022"
          onClick={() =>
            handleLinkClick("guest-speaker-webinar---april-12-2022")
          } // Step 2: Attach onClick event handler
        >
          Guest Speaker Webinar - April 12, 2022
        </SidebarLink>
        <SidebarLink
          isActive={activeLink === "guest-speaker-webinar---february-3-2022"} // Step 3: Add 'active' prop to check if this link is active
          isDarkMode={isDarkMode}
          href="#guest-speaker-webinar---february-3-2022"
          onClick={() =>
            handleLinkClick("guest-speaker-webinar---february-3-2022")
          } // Step 2: Attach onClick event handler
        >
          Guest Speaker Webinar - February 3, 2022
        </SidebarLink>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default RightSidebar;

const SidebarContainer = styled.div`
  width: 140px;
  margin-right: 0px;
  font-family: "Open Sans", sans-serif;
  margin-left: 40px;
  padding-left: 20px;
  position: sticky;
  top: 40px;
  max-height: calc(100vh - 40px);
  border-left: 1px solid #f0f0f0;
  overflow-y: auto;
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  /* Hide the scrollbar */
  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none; /* Internet Explorer and Edge */
  ::-webkit-scrollbar {
    width: 0.5em;
  }
  ::-webkit-scrollbar-thumb {
    background-color: #bbb;
    border-radius: 999px; /* Make the scrollbar thumb circular */
  }
`;

const SidebarContent = styled.div`
  position: relative;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;

const SidebarLink = styled.a`
  display: block;
  font-size: 13px;
  padding-top: 5px;
  color: ${(props) =>
    props.isActive ? "#bb5a7d" : props.isDarkMode ? "white" : "#484848"};

  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    color: #bb5a7d;
  }
  &.near-top {
    color: #bb5a7d;
    font-weight: bold;
  }
`;
