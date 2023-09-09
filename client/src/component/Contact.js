import React, { useContext,useEffect,useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { Grid } from "@mui/material";
const Contact = () => {
  const { isDarkMode } = useContext(DarkModeContext);



  return (
    <Container>
    <Grid
 container
 justifyContent="center"
 alignItems="center"
 style={{ flex: 1}}
 
>     

   <Main>
   <Grid item xs={12} md={12} lg={12} xl={12}>

     <Row>
       <Col1> 
       
   <header>
   <Grid item xs={12} md={12} lg={12} xl={12}>

      <Title isDarkMode={isDarkMode}>Contact Us</Title></Grid></header>
      <EmailText isDarkMode={isDarkMode}>

      For any inquiries, please contact the Program Director:
<Emad>Dr. Emad Shihab </Emad>


          <Text><span>Phone:</span>
          <Phone>514-848-2424 ext. 4359</Phone></Text>
      
<Text><span>Email: </span><EmailLink href="mailto:emad.shihab@concordia.ca"> emad.shihab@concordia.ca</EmailLink>
 </Text>

      </EmailText>
     </Col1>
     <Col2></Col2>
        </Row>    </Grid>
       </Main></Grid>
    </Container>
  );
};

export default Contact;

// The CSS Part
const Container = styled.div`
  margin-top: 0px;
  width: 100%;
  display:flex; 
flex-wrap:wrap;
font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
margin-left:150px;
  padding-bottom:40px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 

box-sizing:border-box;
@media screen and (max-width: 768px) {
    margin-left: 0px; /* Adjust margin for screens up to 768px wide */
  }

  @media screen and (max-width: 480px) {
    margin-left: 0px; /* Adjust margin for screens up to 480px wide */
  }

`;

const Title = styled.h1`
  /* font-weight: 700; */
  padding-top: 20px;
  font-size: 2rem;
  display:flex; 
flex-wrap:wrap;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;

const EmailText = styled.p`
  font-size: 16px;

  color: ${(props) => (props.isDarkMode ? "white" : "black")};
  p{
    /* display :flex ; 
flex-wrap:wrap; */
  }
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #BB5A7D; 
  font-size: 16px;


  &:hover {
    color: #BB5A7D;
    text-decoration:underline;
  }
`;

const Text = styled.div`
 display:flex; 
 flex-direction:row;
   span{
    font-weight: bold;
  }
`;

const ContactInfo = styled.div`

 border:2px solid orange;

`;

const Phone = styled.h5`
 margin-top:3px;

`;
const Emad=styled.h3`  
font-size: 25px;
font-weight:bolder; `

const Row=styled.div`    display: flex;
/* flex-direction: row; */

margin:-10px 16px ;
width:100%; 
height:100%;
`
const Col1=styled.div`
max-width:66.66667%;
/* padding:0px 8px; */
/* border:2px solid orange; */
`
const Col2=styled.div`
max-width:16.66667%;
padding:0px 16px;
/* border:2px solid red; */
`
const Main=styled.div` 
display :flex ; 
flex-wrap:wrap ; 
width: 100%;
/* height:100%; */
color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
margin-bottom: 60px; /* Match the initial margin */
/* margin :10px 120px; */
@media screen and (min-height:850px) {



margin-bottom: 500px; /* Adjust the margin for smaller screens */

}
`
