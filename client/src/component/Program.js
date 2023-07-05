import React from "react";
import styled from "styled-components";
import Sidebar from "./Sidebar";
const Program = () => {
  return (
    <Container>
      <Sidebar />
      <Main>
        {" "}
        Program Overview The field of Artificial Intelligence (AI) has seen
        significant demand and growth due to the recent explosion in datasets
        and breakthroughs in Machine Learning (ML) such as deep learning and
        reinforcement learning.
      </Main>{" "}
    </Container>
  );
};
export default Program;
const Container = styled.div`
  border-top: 1px solid #dcdcdc;
`;
const Main = styled.div`
  margin-left: 350px;
`;
