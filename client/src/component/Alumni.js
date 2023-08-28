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
      width: 100%;

      display:block;
  height: 295px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (max-width: 995px) {
    flex-direction: column; /* Display items in a column on mobile */

 }
`;
const MiniContainer = styled.div`
 margin-top: 20px; /* Change this value to decrease the margin */
  border-radius: 10px;
  border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"};
  background-color: ${(props) => (props.isDarkMode ? "#404040" : "white")};
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* ... other styles ... */
  /* margin-left: -5px;  */
width:315px;  /* width:100vw; */
/* border:5px solid orange;   */
@media (max-width: 995px) {
    flex-direction:column;
width:90vw;
margin-left:1px; 
border-left:none;
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
