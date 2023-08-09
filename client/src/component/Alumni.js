// This is the ProgramLeaderShip part in Team  Page
import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
//import images
import ErnestoLangOreamunoImage from "../component/team/photos/Ernesto-Lang-Oreamuno.jpg";

const Alumni = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <MiniContainer isDarkMode={isDarkMode}>
      <Img src={ErnestoLangOreamunoImage} alt="Ernesto Lang Oreamuno" />{" "}
      <Name>Ernesto Lang Oreamuno</Name>
      <University>Queen's University</University>
    </MiniContainer>
  );
};

export default Alumni;

const Img = styled.img`
  width: 270px;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;@media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
margin-left:-0px;   width: 350px;  height: 320px;

 }
`;
const MiniContainer = styled.div`
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 10px;
  border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"};
  background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  padding-top: 0px;
  width: 270px;
  height: 350px;
  &.emadContainer {
    height: 450px;
  }@media (max-width: 768px) {
    flex-direction: column; /* Display items in a column on mobile */
    /* align-items: center; */
;   width:350px;   height: 430px;


 }
`;

const Name = styled.div`
  font-weight: bold;
  font-size: 20px;
  margin-top: 20px;
  margin-left: 15px;
`;

const University = styled.div`
  margin-left: 15px;
`;
