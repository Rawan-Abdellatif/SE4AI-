import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";

import Sidebar from "./Sidebar";
const UpcomingEvents = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
      <Sidebar />

      <MainContent>
        <Title isDarkMode={isDarkMode}>Upcoming Events</Title>
        <Button1 isDarkMode={isDarkMode}>
          New Post
          <a href="/blog/past">
            {" "}
            <Icon>
              <MdKeyboardDoubleArrowLeft />
            </Icon>
            Past Events
          </a>
        </Button1>{" "}
      </MainContent>
    </Container>
  );
};
export default UpcomingEvents;
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
`;

const MainContent = styled.div`
  /* flex: 1; */ /* flex: 1; */
  margin-left: 170px;
  padding-top: -40px;
  color: #bb5a7d;
  width: 640px;
`;

const Title = styled.h1`
  font-weight: bold;
  font-size: 45px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
`;
const Button1 = styled.button`
  width: 370px;
  height: 70px;
  background-color: inherit;
  margin-bottom: 30px;
  margin-left: 2px;
  padding-right: 270px;
  border-radius: 5px;
  /* padding-left: 270px; */
  padding-top: -2px;
  font-size: 13px;
  font-weight: bold;
  line-height: 1.7em;
  border: 1px solid #e8e8e8;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};

  &:hover {
    border: 1px solid #bb5a7d;
    cursor: pointer;
  }
  a {
    display: flex;
    flex-direction: row;
    width: 200px;
    margin-left: 5px;
    text-decoration: none;
    color: #bb5a7d;
    font-size: 17px;
    font-weight: bold;
  }
`;
const Icon = styled.div`
  padding-top: 3px;
  color: #bb5a7d;
`;
