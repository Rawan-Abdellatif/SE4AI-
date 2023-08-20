import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";

const Contact = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
      <Title isDarkMode={isDarkMode}>Contact Us</Title>
      <EmailText isDarkMode={isDarkMode}>
      For any inquiries, please contact the Program Director:
<Emad>Dr. Emad Shihab
 </Emad>
  <ContactInfo>
          <Text>Phone:</Text>
          <Phone>514-848-2424 ext. 4359</Phone>
        </ContactInfo>
<Text>Email:<EmailLink href="mailto:emad.shihab@concordia.ca">emad.shihab@concordia.ca</EmailLink>
 </Text>
  
      </EmailText>
     
    </Container>
  );
};

export default Contact;

// The CSS Part
const Container = styled.div`
  margin-top: 10px;
  width: 100%;
  /* border-top: 2px solid #f4f0ec; */
  margin-left: 170px;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")}; 
   @media (max-width: 995px) {
    flex-direction:row;
    margin-left:5px; 
 }
 @media (min-width: 1600px) {
    margin-left:450px;
  border-left:none;
  height:100vh;
}


`;

const Title = styled.div`
  font-weight: bold;
  padding-top: 20px;
  font-size: 25px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;

const EmailText = styled.p`
  font-size: 15px;
  color: ${(props) => (props.isDarkMode ? "white" : "black")};
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #BB5A7D;

  &:hover {
    color: #BB5A7D;
    text-decoration:underline;
  }
`;

const Text = styled.div`
  font-weight: bold;
`;

const ContactInfo = styled.div`
  display: flex;
  align-items: center;
 margin-top:-20px;
`;

const Phone = styled.h5`
  font-size: 15px;
  margin-left: 5px;
  font-weight:normal;
`;
const Emad=styled.h3`  
font-size: 25px;
font-weight:bolder;`
