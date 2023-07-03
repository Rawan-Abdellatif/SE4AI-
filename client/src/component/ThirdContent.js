import React from "react";
import styled from "styled-components";
import Concordia from "./png/Concordia.png";
import PolyMtl from "./png/PolyMTL.png";
import Queens from "./png/Queens.png";
import Alberta from "./png/Alberta.png";
import NBC from "./png/NBC.png";
import Airudi from "./png/Airudi.png";
import Cisco from "./png/Cisco.png";
import Ericsson from "./png/Ericsson.png";
import GIRO from "./png/GIRO.png";
import Graz from "./png/Graz.png";
import IBM from "./png/IBM.png";
import NSER from "./png/NSERC_RGB.png";
import OBVIA from "./png/OBVIA.png";
import Radio from "./png/Radio-Canada.png";
import TD from "./png/TD.png";
import Vercel from "./png/Vercel.png";
import MAIEI from "./png/MAIEI.png";
import IVADO from "./png/IVADO.png";
const ThirdContent = () => {
  return (
    <Container>
      <Text>
        In Collaboration with World-renowned <RedText>Researchers</RedText> and
        <RedText>Technology Leaders</RedText>
      </Text>
      <ImgContainer>
        <Img src={Concordia} alt={Concordia} />
        <Img src={PolyMtl} alt={PolyMtl} />
        <Img src={Queens} alt={Queens} />
        <Img src={Alberta} alt={Alberta} />
        <Img src={NBC} alt={NBC} />
        <Img src={IBM} alt={IBM} />
        <Img src={Cisco} alt={Cisco} />
        <Img src={TD} alt={TD} />
        <Img src={Ericsson} alt={Ericsson} />
        <Img src={Airudi} alt={Airudi} />
        <Img src={GIRO} alt={GIRO} />
        <Img src={Radio} alt={Radio} />
        <Img src={NSER} alt={NSER} />
        <Img src={IVADO} alt={IVADO} />
        <Img src={OBVIA} alt={OBVIA} />
        <Img src={MAIEI} alt={MAIEI} />
        <Img src={Graz} alt={Graz} />
        <Img src={Vercel} alt={Vercel} />
      </ImgContainer>
    </Container>
  );
};
export default ThirdContent;

const Container = styled.div`
  background-color: #101010;
  padding: 5px 0;
  text-align: center;
  font-family: "Open Sans", sans-serif;
`;

const Text = styled.div`
  margin-top: 30px;
  color: white;
  font-weight: bold;
  padding-left: 200px;
  font-size: 30px;
  text-align: center;
  width: 800px;
`;
const RedText = styled.span`
  color: #db7093;
`;
const ImgContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 160px;
  align-content: space-between;
  line-height: 1.5;
  text-align: center;
`;

const Img = styled.img`
  background-color: #c0c0c0;
  padding: 30px 30px;
  width: 150px;
  height: 60px;
  margin: 20px;
  text-align: center;
  border-radius: 15px;
`;
