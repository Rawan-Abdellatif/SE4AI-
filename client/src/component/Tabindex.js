import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import logo from "./img/logo.svg";
import logoDark from "./img/logo_dark.svg";
import { Link, useLocation } from "react-router-dom";

const Tabindex=()=>{    
    const [selectedLink, setSelectedLink] = useState("");
const [activeLink, setActiveLink] = useState("");
    const { isDarkMode } = useContext(DarkModeContext);
    const [marginTop, setMarginTop] = useState(-80); // Initial margin-top value

    const handleLinkClick = (link) => {
        setSelectedLink(link);
        setActiveLink(link);
      };
      const [isNavVisible, setIsNavVisible] = useState(true);

      useEffect(() => {
        // Function to handle scroll event
        const handleScroll = () => {
          const scrollY = window.scrollY;
          // Adjust this value as needed
          const scrollThreshold = 50;
    
          if (scrollY > scrollThreshold) {
            setIsNavVisible(false);
          } else {
            setIsNavVisible(true);
          }
        };
    
        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);
    
        // Clean up the event listener when the component unmounts
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);
      useEffect(() => {
        // Add a scroll event listener to update the margin-top value
        const handleScroll = () => {
          // Calculate the scroll position threshold where you want to change the margin-top
          const scrollThreshold = 50; // Adjust this value as needed
    
          if (window.scrollY = scrollThreshold) {
            setMarginTop(-10); // Change margin-top when scrolling down
          } else {
            setMarginTop(-50); // Reset margin-top when scrolling up
          }
        };  window.addEventListener("scroll", handleScroll);

        // Remove the event listener when the component unmounts
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);
    return(     
     

       
      <Nav isDarkMode={isDarkMode} className="logo-nav">
      <a href="/">
        <img src={isDarkMode ? logoDark : logo} alt="CREATE SE4AI" />{" "}
      </a>
      <Creat>
      <a href="/">CREATE SE4AI</a></Creat>
      </Nav>
      
   
   )



}
export default Tabindex
const Creat=styled.span`
margin-top:6.7px;
margin-left:8px; 
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
  font-size: 16px;
  /* background-color:white; */

  `

const Nav = styled.li`
display: flex;
flex-direction:row;
font-family:system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
font-size:16px;
 cursor: pointer;
color:red ; 
margin-top: -65px; 
background-color: ${(props) => (props.isDarkMode ? "#242526" : "white")};
margin-left:5px;
font-weight:500; 
align-items:center;
z-index:4;
img {

/* padding-top:7px;  */
   height: 32px;
 cursor: pointer;
/* margin-right:7px; */
/* padding-left:2px; */
margin-top:22px;
/* border:1px solid green ;  */
width:32px; 
 }
 a {
   color: ${(props) => (props.isDarkMode ? "#fff" : "#212529")};
   text-decoration: none;
   font-family:   "-apple-system", "Segoe UI", sans-serif;
  font-size: 16px;
 margin-top: -7px; 
 /* padding-left:5.5px; */
font-weight:bold;

&.selected {
 color: #BB5A7D;
   }
 &:hover {
     color: #BB5A7D;
   }
   
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
 position:sticky;

`;
