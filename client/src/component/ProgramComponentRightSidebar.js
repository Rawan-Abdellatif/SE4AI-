import React, { useEffect, useState, useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";

const ProgramComponentRightSidebar = ({
  activeLink,
  handleSidebarLinkClick,
}) => {
  // const [activeLink, setActiveLink] = useState(null);
  const { isDarkMode } = useContext(DarkModeContext);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const sections = document.querySelectorAll("section");

  //     sections.forEach((section) => {
  //       const rect = section.getBoundingClientRect();
  //       const linkId = section.getAttribute("id");
  //       const link = document.querySelector(`[href="#${linkId}"]`);

  //       if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
  //         setActiveLink(linkId);
  //         link?.classList.add("near-top");
  //       } else {
  //         link?.classList.remove("near-top");
  //       }
  //     });
  //   };

  //   window.addEventListener("scroll", handleScroll);
  //   handleScroll(); // Call handleScroll once on mount to initialize the active link

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // const handleSidebarLinkClick = (id) => {
  //   setActiveLink(id);
  // };

  return (
    <SidebarContainer isDarkMode={isDarkMode}>
      <SidebarContent className="sidebar-content" isDarkMode={isDarkMode}>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "engineering-ai-based-software-systems"}
          onClick={() =>
            handleSidebarLinkClick("engineering-ai-based-software-systems")
          }
          href="#engineering-ai-based-software-systems"
        >
          Engineering AI-based Software Systems
        </SidebarLink>

        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={
            activeLink === "social-aspects-for-ai-based-software-system"
          }
          onClick={() =>
            handleSidebarLinkClick(
              "social-aspects-for-ai-based-software-system"
            )
          }
          href="#social-aspects-for-ai-based-software-system"
        >
          Social Aspects for AI-based Software System
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "professional-development-modules"}
          onClick={() =>
            handleSidebarLinkClick("professional-development-modules")
          }
          href="#professional-development-modules"
        >
          Professional Development Modules
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "industrial-embedding"}
          onClick={() => handleSidebarLinkClick("industrial-embedding")}
          href="#industrial-embedding"
        >
          Industrial Embedding
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "industry-webinars-or-seminars"}
          onClick={() =>
            handleSidebarLinkClick("industry-webinars-or-seminars")
          }
          href="#industry-webinars-or-seminars"
        >
          Industry Webinars or Seminars
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={activeLink === "specialization-courses"}
          onClick={() => handleSidebarLinkClick("specialization-courses")}
          href="#specialization-courses"
        >
          Specialization Courses
        </SidebarLink>
        <SidebarLink
          isDarkMode={isDarkMode}
          isActive={
            activeLink === "hands-on-leadership-and-mentorship-training"
          }
          onClick={() =>
            handleSidebarLinkClick(
              "hands-on-leadership-and-mentorship-training"
            )
          }
          href="#hands-on-leadership-and-mentorship-training"
        >
          Hands-on Leadership and Mentorship Training
        </SidebarLink>
      </SidebarContent>
    </SidebarContainer>
  );
};

export default ProgramComponentRightSidebar;

const SidebarContainer = styled.div`
  width: 140px;
  height: 400px;
  margin-right: 0px;
  font-family: "Open Sans", sans-serif;
  margin-left: 40px;
  padding-left: 20px;
  position: sticky;
  top: 40px;
  max-height: calc(100vh - 10px);

  border-left: ${(props) =>
    props.isDarkMode ? " 1px solid #A0A0A0" : "  1px solid	#A0A0A0"};

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
  color: ${(props) =>
    props.isActive ? "#bb5a7d" : props.isDarkMode ? "white" : "#484848"};
  font-size: 13px;
  padding-top: 5px;
  text-decoration: none;
  margin-bottom: 10px;
  cursor: pointer;

  &:hover {
    color: #bb5a7d;
  }

  &.near-top {
    color: #bb5a7d;
    font-weight: bold; /* Example: Make the near-top link bold */
    /* Add any other styles you want for the near-top state */
  }
`;
