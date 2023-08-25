import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { Grid } from "@mui/material";
import Sidebar from "./Sidebar";
const UpcomingEvents = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container>
      <SidebarContainer>
        <Sidebar />
      </SidebarContainer>
      <Grid
    container
    justifyContent="center"
    alignItems="center"
    style={{ flex: 1, padding: "20px" }}
    
  >     

    <Grid item xs={12} md={12} lg={12} xl={12}>
      <MainContent>
      <Grid item xs={12} md={12} lg={12} xl={12}>

        <Title isDarkMode={isDarkMode}>Upcoming Events</Title>
        </Grid>
        <Button1 isDarkMode={isDarkMode}>
         <div>New Post</div> 
         <div>  <a href="/blog/past">
       
            <Icon>
              <MdKeyboardDoubleArrowLeft />
            </Icon>
           <div> Past Events</div>
          </a></div>
        
        </Button1>{" "}
      </MainContent></Grid></Grid>
    </Container>
  );
};
export default UpcomingEvents;
const Container = styled.div`
  display: flex;
  font-family: "Open Sans", sans-serif;
  margin-bottom: 20px;   
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;
  width: 100%;


`;

const MainContent = styled.div`
  /* flex: 1; */ /* flex: 1; */
  /* margin-left: 170px; */
  /* padding-top: -40px; */
  color: #bb5a7d;
  max-width: 640px;  
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};  width: 100%;
  width: 100%;
  margin: 0 auto;

  padding-top: -40px;
`;

const Title = styled.h1`
  font-weight: bold;  display: flex;
  flex-wrap: wrap;
  font-size: 45px;
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};   

`;
const Button1 = styled.button`
  display: flex;
  flex-wrap: wrap;
  max-width: 370px;
  /* width:100%; */
  height: 70px;
  background-color: inherit;
  margin-bottom: 30px;
  margin-left: 2px;
  padding-right: 200px;
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
  div{
    margin-left:0;
    padding-left:0;
    /* display:flex;
    margin-left:0;
    padding-left:0;    width:100%;
    /* width:400px; */
    /* border:5px solid orange; */
  }
  a {
    display: flex;
    flex-direction: row;
    max-width:400px;
    margin-left:0;
    padding-left:0;
    /* border:5px solid yellow; */
    /* padding-right:200px; */
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
const SidebarContainer = styled.div`
  margin-bottom: 20px; 

`;
