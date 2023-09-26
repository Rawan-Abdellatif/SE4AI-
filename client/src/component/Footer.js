import React from "react";
import styled from "styled-components";
import Nserc from "./img/NSERC_WHITE.png";
import { BsBoxArrowUpRight } from "react-icons/bs";
import {Grid} from "@mui/material";

const Footer = () => {
  return (
    <FooterContainer>
      <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1, padding: "20px" }}
    
  >     

    <Grid item xs={12} md={12} lg={12} xl={12}>
 

      <div className="container">
        <FooterContent>
          <FooterColumn>
            <h4>Partner Universities</h4>
            <ul>
              <li>
                <a href="https://www.concordia.ca/">
                  Concordia University{" "}
                  <SmallIcon>
                    <BsBoxArrowUpRight />
                  </SmallIcon>
                </a>
              </li>
              <li>
                <a href="https://www.polymtl.ca/en/">
                  Polytechnique Montréal{" "}
                  <SmallIcon>
                    <BsBoxArrowUpRight />
                  </SmallIcon>
                </a>
              </li>
              <li>
                <a href="https://www.queensu.ca">
                  Queen's University{" "}
                  <SmallIcon>
                    <BsBoxArrowUpRight />
                  </SmallIcon>
                </a>
              </li>
              <li>
                <a href="https://www.ualberta.ca">
                  University of Alberta{" "}
                  <SmallIcon>
                    <BsBoxArrowUpRight />
                  </SmallIcon>
                </a>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h4>Program</h4>
            <ul>
              <li>
                <a href="/intro">Introduction</a>
              </li>
              <li>
                <a href="/training-program/objectives">Objectives</a>
              </li>
              <li>
                <a href="/training-program/components">Components</a>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h4>Community</h4>
            <ul>
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/partners">Partners</a>
              </li>
              <li>
                <a href="/apply">Apply</a>
              </li>
            </ul>
          </FooterColumn>
          <FooterColumn>
            <h4>More</h4>
            <ul>
              <li>
                <a href="https://twitter.com/CREATE_SE4AI">
                  Twitter{" "}
                  <SmallIcon>
                    <BsBoxArrowUpRight />
                  </SmallIcon>
                </a>
              </li>
              <li>
                <a href="https://github.com/create-se4ai">
                  GitHub{" "}
                  <SmallIcon>
                    <BsBoxArrowUpRight />
                  </SmallIcon>
                </a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </FooterColumn>
        </FooterContent>
      </div>
      <FooterCenter>
        <Img src={Nserc} alt="NSERC_WHITE" />
      </FooterCenter>
      <FooterBottom>
        <div className="container">
          <p>
            We acknowledge the support of the Natural Sciences and Engineering
            Research Council of Canada (NSERC).
          </p>
          <p>Copyright&copy; {new Date().getFullYear()} CREATE SE4AI.</p>
        </div>
      </FooterBottom></Grid>
      </Grid>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #303846;
  color: #fff;
  display: flex;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */

  bottom: 0;       /* Add this line to stick the footer at the bottom */
  /* width: 100%; */
  right: 0;        /* Ensure the footer aligns with the right edge of the viewport */
  /* width: 100%; */
/* border:2px solid orange; */



`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  /* padding-left:90px;
  max-width:1000px;
  width:100%; */
  /* width: 100%; */
  max-width: 1200px;
margin-left:80px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* margin: 0 auto;  */
margin-top:-5px;
 /* border:2px solid green; */
 @media screen and (min-width: 1700px) {
    align-items: center;
    margin-left: calc(27% - 150px); 
    /* margin-bottom:calc(13% - 150px); */

  }
  
  @media screen and (max-width: 768px) {
    width:100%;

   padding-left: 0px; /* Adjust margin for screens up to 768px wide */
  }

  @media screen and (max-width: 480px) {
   margin-left: 0px; /* Adjust margin for screens up to 480px wide */
    width:100%;
  }`;

const FooterColumn = styled.div`
  /* bordeR:2px solid orange; */
  align-items:center;
  font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  margin-left:0px;
width:200px;
padding-left:0; 
 & > *:not(:first-child) {
  padding-left: -20px; /* Adjust the padding value as needed */
  }
  margin-bottom: 20px;
  padding-top: -50px;

  @media screen and (max-width: 768px) {
    width:100%;

   padding-left: 0px; /* Adjust margin for screens up to 768px wide */
  }

  @media screen and (max-width: 480px) {
    padding-left: 0px; /* Adjust margin for screens up to 480px wide */
    width:100%;
  }


  h4 {
    font-size: 17px;
    margin-bottom: 15px;
    color: #fff;
  }

  ul {
    list-style: none;
    margin: 0;
    padding: 0;

    li {
      margin-bottom: 5px;
      padding-top: 5px;

      a {
        color: #fff;
        text-decoration: none;
        transition: 0.3s;

        &:hover {
          color: #db7093;
        }
      }
    }
  }
`;

const FooterBottom = styled.div`
  background-color:#303846;
  padding: 5px 0;
  text-align: center;
  font-size: 16px;
  color: #fff;
`;

const FooterCenter = styled.div`
  background-color: #303846;
  padding: 5px 0 8px;
/* margin-left:25px; */
  text-align: center;
  font-size: 14px;
  color: #fff;
`;

const SmallIcon = styled.span`
  font-size: 0.8em;
`;
const Img = styled.img`
 width: 160px;
  height: 77px;
  /* margin-left: -100px; */
  text-align: center;
`;
