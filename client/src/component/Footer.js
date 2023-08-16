import React from "react";
import styled from "styled-components";
import Nserc from "./img/NSERC_WHITE.png";
import { BsBoxArrowUpRight } from "react-icons/bs";

const Footer = () => {
  return (
    <FooterContainer>
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
      </FooterBottom>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  background-color: #343a40;
  color: #fff;
  margin-left: -10px;
  margin-right: -10px;

  padding: 0px 70px;
  font-family: "Open Sans", sans-serif;
  /* width: 100%; */@media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    align-items: center;
margin-left:-70px;  }
@media (min-width: 1440px) {
  align-items: center;
  flex-direction: column; /* Display items in a column on mobile */
    }


`;

const FooterContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;@media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    align-items: center;
margin-left:-170px;  }
@media (min-width: 1440px) {
  /* align-items: center; */
  justify-content:center;
  margin-left:270px;
   }`;

const FooterColumn = styled.div`
  width: 17%;
  padding: 5px 30px;
  margin-bottom: 20px;
  padding-top: 20px;
  @media (min-width: 1440px) {
    width: 16%;
  justify-content:center;  

}
  h4 {
    font-size: 18px;
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
  background-color: #343a40;
  padding: 10px 0;
  text-align: center;
  font-size: 14px;
  color: #fff;
`;

const FooterCenter = styled.div`
  background-color: #343a40;
  padding: 20px 0;
  text-align: center;
  font-size: 14px;
  color: #fff;
`;

const SmallIcon = styled.span`
  font-size: 0.8em;
`;
const Img = styled.img`
  width: 150px;
  height: 70px;
  /* margin-left: -100px; */
  text-align: center;
`;
