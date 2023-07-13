// This is the ProgramLeaderShip part in Team  Page
import React from "react";
import styled from "styled-components";

//import images
import ErnestoLangOreamunoImage from "../component/team/photos/Ernesto-Lang-Oreamuno.jpg";

const Alumni = () => {
  return (
    <MiniContainer>
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
  border-top-right-radius: 10px;
`;
const MiniContainer = styled.div`
  margin-left: 20px;
  margin-top: 40px;
  border-radius: 10px;
  border: 2px solid #f4f0ec;
  padding-top: 0px;
  width: 270px;
  height: 350px;
  &.emadContainer {
    height: 450px;
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
