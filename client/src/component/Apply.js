import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";

const Apply = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
      <Title isDarkMode={isDarkMode}>Apply Now</Title>
      <Main>
      <EmailText isDarkMode={isDarkMode}>
        To apply, please send an email to{" "}
        <EmailLink href="mailto:apply@se4ai.org">apply@se4ai.org</EmailLink>{" "}
        with the following:
      </EmailText>
      <EmailContent isDarkMode={isDarkMode}>
        <List>
          <ListItem isDarkMode={isDarkMode}>
            The university that you prefer to attend
          </ListItem>
          <ListItem isDarkMode={isDarkMode}>
            Short statement of your interest in the program
          </ListItem>
          <ListItem isDarkMode={isDarkMode}>Your CV</ListItem>
        </List>
      </EmailContent></Main>
    </Container>
  );
};

export default Apply;

// The CSS Part
const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  /* border-top: 2px solid #f4f0ec; */
  margin-left: 100px;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 
   @media (max-width: 768px) {
    flex-direction:row;
    
margin-left:5px; 
 }@media (min-width: 1440px) { width:100%;
height:100vh;
/* margin-left:300px; */


 }

`;

const Title = styled.div`
  font-weight: bold;
  padding-top: 20px;
  font-size: 30px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  
  
  
  @media (min-width: 1440px) { width:100%;
/* height:100vh; */
margin-left:500px;
 }
`;

const EmailText = styled.p`
  font-size: 18px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #BB5A7D;

  &:hover {
    color:#BB5A7D;
    text-decoration: underline;
  }
`;

const EmailContent = styled.div`
  margin-top: 40px;
  font-size: 16px;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 2px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};  @media (min-width: 1440px) {
 /* margin-left:900px; */

  }
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.2;
  display: flex;
  align-items: center;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};

  ::before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: ${(props) => (props.isDarkMode ? "white" : "black")};
    margin-right: 10px;
  }
`;
const Main=styled.div`@media (min-width: 1440px) { 
margin-left:500px;
   }
`