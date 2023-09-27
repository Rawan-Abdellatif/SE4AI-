import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import {Grid} from "@mui/material";

const Apply = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
       <Grid
    container
    justifyContent="center"
 alignItems="center"
    style={{ flex: 1,padding:"20px" }}
    
  >     

      <Main>
      <Grid item xs={12} md={12} lg={12} xl={12}>

        <Row>
          <Col1> 
          
      <header>

      <Title isDarkMode={isDarkMode}>Apply Now</Title>
      </header>

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
      </EmailContent>
          </Col1>
          <Col2></Col2>
        </Row>    </Grid>
       </Main>
      
  
      </Grid>
    </Container>
  );
};

export default Apply;

// The CSS Part
const Container = styled.div`
   display: flex;
   /* flex: 1 0 auto; */
   font-family:   "-apple-system", "Segoe UI", sans-serif;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
/* max-height:1000px; */
margin-bottom:20px;
margin-left:200px;
margin-top:45px;
/* border:2px solid yellow; */
  @media screen and (min-width: 1700px) {
    align-items: center;
    margin-left: calc(30% - 140px); 
    margin-bottom:calc(50% - 140px);

  }
  @media screen and (max-width: 768px) {
    margin-top:15px;
  }

  @media screen and (max-width: 480px) {
    margin-top:20px;
  }
`;






const Title = styled.h1`
  font-weight: 700;
  /* padding-top: 20px; */
  font-size: 2rem;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  /* width: 100%;  */

`;

const EmailText = styled.p`
  font-size: 16px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
line-height:1.7em;

  @media screen and (max-width: 1000px) {
    width: 360px;

}




`;

const EmailLink = styled.a`
  text-decoration: none;
  color:rgb(187, 90, 125);
width:100%;

  &:hover {
    color:rgb(187, 90, 125);;
    text-decoration: underline;
  }

`;

const EmailContent = styled.div`
  /* margin-top: 40px; */
  font-size: 16px;
  line-height:1.25em;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 1rem ;
  margin-top:10px;

  /* border:2px solid yellow; */
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 
  @media screen and (max-width: 1000px) {
    width: 340px;
    padding-left: 1rem ;

} 

`;

const ListItem = styled.li`
display:list-item;
  margin-bottom: 15px;
  line-height:0.75em;
  display: flex;
 font-size:16px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  @media screen and (max-width:1000px) {  
  line-height:1.5em;
}
  ::before {
    content: "";
    display: inline-block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${(props) => (props.isDarkMode ? "white" : "black")};
    margin-right: 10px;
    margin-top:7px;
  }


`;
const Main=styled.div` 
max-width:1900px;
width:100%;
/* width: 1900px; */
/* border:2px solid red; */
margin-top:-40px;
/* margin:0px 16px ; */
color: ${(props) => (props.isDarkMode ? "white" : "#484848")}; 
 @media screen and (max-width: 900px) {
  margin-left:-200px;
  width: 1900px;
/* padding-left:20px; */
  margin-top:-20px;
  margin-right:0px;
  padding-right:-500px;

display:flex;
flex-direction:row;

} 


`
const Row=styled.div`    display: flex;
flex-direction: row;
flex-wrap: wrap;
/* margin:0px 16px ; */
width:100%; 
/* border:2px solid blue; */


 `
const Col1=styled.div`
max-width:66.66667%;
/* padding:0px 16px; */
/* border:2px solid orange; */

`
const Col2=styled.div`
max-width:16.66667%;
/* padding:0px 16px; */
/* border:2px solid red; */
`