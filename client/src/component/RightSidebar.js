import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { Link } from "react-router-dom";
const RightSidebar = ({ activeLink = "", handleLinkClick }) => {
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
    <SidebarContainer isDarkMode={isDarkMode} className={isFixed ? "" : "scrolled"}
    isFixed={isFixed}>
      <SidebarContent isDarkMode={isDarkMode}  isFixed={isFixed}
      className={isFixed ? "" : "scrolled"}>
<SidebarLink
  isDarkMode={isDarkMode}
  href="#trainee-talks-webinar---september-25-2023"
  isActive={activeLink === "trainee-talks-webinar---september-25-2023"}
  onClick={() => handleLinkClick("trainee-talks-webinar---september-25-2023")}
>
  Trainee Talks Webinar - September 25, 2023
</SidebarLink>


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
          isActive={activeLink=== "women-in-engineering-wie---march-18-2023"} // Step 3: Add 'active' prop to check if this link is active
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

  width: 300px;
  /* margin-right: 0px; */
  font-family: "Open Sans", sans-serif;
  margin-left: -65px;
  padding-left: 15px;
  max-height: calc(100vh - 20px);
/* border:2px solid red; */
  position: ${({ isFixed }) => (isFixed ? "sticky" : "sticky")};
  top: 80px;   /* height:900px; */
  /* border-left: 1px solid #f0f0f0; */
  overflow-y: auto;
  margin-top: 35px;
/* height:100%; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
/* border:2px solid orange; */
/* margin-left: -500px; */
/* border:2px solid orange; */
  position:sticky;
  @media screen and (min-width: 1700px) {
margin-right:290px;
  }
`;

const SidebarContent = styled.div`
font-size:12.8px ;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
padding-left: 15px;
padding-top:15px;
max-width:165px;
height:560px;
border-left:${(props) => (props.isDarkMode ? "1px solid #606770":"1px solid #d4d5d8")};
/* line-height: 2em; */

  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

`;

const SidebarLink = styled.a`
  display: block;
  font-size: 13px;
  padding-top:0px;
  line-height: 1.5em;

  color: ${(props) =>
    props.isActive ? "#bb5a7d" : props.isDarkMode ? "white" : "#484848"};


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
