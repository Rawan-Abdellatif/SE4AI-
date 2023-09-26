import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { Link } from "react-router-dom";
const UpcomingRightSidebar = ({ activeLink = "", handleLinkClick }) => {
    const { isDarkMode } = useContext(DarkModeContext);
  const [isFixed, setIsFixed] = useState(true);
console.log("activeLink in RightSidebar",activeLink)


useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
  
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        const linkId = section.getAttribute("id");
        const link = document.querySelector(`[href="#${linkId}"]`);
  
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          // Remove the "near-top" class from all links
          document.querySelectorAll(".sidebar-link").forEach((el) => {
            el.classList.remove("near-top");
          });
  
          // Add the "near-top" class to the current link
          link?.classList.add("near-top");
        } else {
          // Remove the "near-top" class if the link is not near the top
          link?.classList.remove("near-top");
        }
      });
    };
  
    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Call handleScroll once on mount to initialize the active link
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <SidebarContainer className={isFixed ? "" : "scrolled"}
    isFixed={isFixed}>
      <SidebarContent isFixed={isFixed}
      className={isFixed ? "" : "scrolled"}>
        <SidebarLink
          isDarkMode={isDarkMode}
          href="#trainee-talks-webinar---september-25-2023"
          isActive={activeLink === "trainee-talks-webinar---september-25-2023"}
          onClick={() =>
            handleLinkClick("trainee-talks-webinar---september-25-2023")
          }
        >
       Trainee Talks Webinar - September 25, 2023​

        </SidebarLink>
        </SidebarContent>
        </SidebarContainer>)}
        export default UpcomingRightSidebar;
        const SidebarContainer = styled.div`

  width: 470px;
  /* margin-right: 0px; */
  font-family: "Open Sans", sans-serif;
  margin-left: -170px;
  padding-left: 20px;
  max-height: calc(100vh - 20px);
/* border:2px solid red; */
  position: ${({ isFixed }) => (isFixed ? "sticky" : "sticky")};
  top: 80px;   /* height:900px; */
  /* border-left: 1px solid #f0f0f0; */
  overflow-y: auto;
  margin-top: 40px;
/* height:100%; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";

  position:sticky;
`;

const SidebarContent = styled.div`
font-size:12px ;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
padding-left: 17px;
padding-top:15px;
width:165px;
height:60px;
border-left:${(props) => (props.isDarkMode ? "1px solid #606770":"1px solid #d4d5d8")};
/* line-height: 2em; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;

const SidebarLink = styled.a`
  display: block;
  font-size: 13px;
  padding-top:0px;
  line-height: 1.7em;

  color: ${(props) =>
    props.isActive ? "#bb5a7d" : props.isDarkMode ? "#bb5a7d" : "#bb5a7d"};


  text-decoration: none;
  margin-bottom: 10px;
  &:hover {
    color: #bb5a7d;
  }
  &.near-top {
    /* margin-top:20px; */
    color: #bb5a7d;
    font-weight: bold;
  }
`;
