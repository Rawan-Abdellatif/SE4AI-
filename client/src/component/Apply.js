import React from "react";
import styled from "styled-components";

const Apply = () => {
  return (
    <Container>
      <Title>Apply Now</Title>
      <EmailText>
        To apply, please send an email to{" "}
        <EmailLink href="mailto:apply@se4ai.org">apply@se4ai.org</EmailLink>{" "}
        with the following:
      </EmailText>
      <EmailContent>
        <List>
          <ListItem>The university that you prefer to attend</ListItem>
          <ListItem>Short statement of your interest in the program</ListItem>
          <ListItem>Your CV</ListItem>
        </List>
      </EmailContent>
    </Container>
  );
};

export default Apply;

const Container = styled.div`
  margin-top: 10px;
  margin-left: 100px;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
`;

const Title = styled.div`
  font-weight: bold;
  padding-top: 20px;
  font-size: 30px;
`;

const EmailText = styled.p`
  font-size: 18px;
`;

const EmailLink = styled.a`
  text-decoration: none;
  color: #db7093;

  &:hover {
    color: #db7093;
    text-decoration: underline;
  }
`;

const EmailContent = styled.div`
  margin-top: 40px;
  font-size: 16px;
`;

const List = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  line-height: 1.2;
  display: flex;
  align-items: center;

  ::before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    border-radius: 50%;
    background-color: black;
    margin-right: 10px;
  }
`;
