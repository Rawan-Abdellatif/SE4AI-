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
        <Link href="https://www.concordia.ca/" target="_blank">
          <Img src={Concordia} alt={Concordia} />{" "}
        </Link>

        <Link href="https://www.polymtl.ca/en/" target="_blank">
          <Img src={PolyMtl} alt={PolyMtl} />{" "}
        </Link>

        <Link href="https://www.queensu.ca/" target="_blank">
          <Img src={Queens} alt={Queens} />
        </Link>

        <Link href="https://www.ualberta.ca/index.html" target="_blank">
          <Img src={Alberta} alt={Alberta} />
        </Link>

        <Link href="https://www.nbc.ca/" target="_blank">
          <Img src={NBC} alt={NBC} />
        </Link>

        <Link href="https://www.ibm.com/ca-en" target="_blank">
          <Img src={IBM} alt={IBM} />
        </Link>

        <Link href="https://www.cisco.com/" target="_blank">
          <Img src={Cisco} alt={Cisco} />
        </Link>

        <Link href="https://www.td.com/ca/en/personal-banking" target="_blank">
          <Img src={TD} alt={TD} />
        </Link>

        <Link href="https://www.ericsson.com/en" target="_blank">
          <Img src={Ericsson} alt={Ericsson} />
        </Link>

        <Link href="https://airudi.com/en/" target="_blank">
          <Img src={Airudi} alt={Airudi} />
        </Link>

        <Link href="https://www.giro.ca/en-ca/" target="_blank">
          <Img src={GIRO} alt={GIRO} />
        </Link>

        <Link href="https://cbc.radio-canada.ca/" target="_blank">
          <Img src={Radio} alt={Radio} />
        </Link>

        <Link
          href="https://www.nserc-crsng.gc.ca/index_eng.asp"
          target="_blank"
        >
          <Img src={NSER} alt={NSER} />
        </Link>

        <Link href="https://ivado.ca/en/" target="_blank">
          <Img src={IVADO} alt={IVADO} />
        </Link>

        <Link href="https://observatoire-ia.ulaval.ca/en/" target="_blank">
          <Img src={OBVIA} alt={OBVIA} />
        </Link>

        <Link href="https://montrealethics.ai/" target="_blank">
          <Img src={MAIEI} alt={MAIEI} />
        </Link>

        <Link href="https://www.uni-graz.at/en/" target="_blank">
          <Img src={Graz} alt={Graz} />
        </Link>

        <Link
          href="https://vercel.com/?utm_source=se4ai&utm_campaign=oss"
          target="_blank"
        >
          <Img src={Vercel} alt={Vercel} />
        </Link>
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
  /* width: 50px; */
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
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  /* width: 150px; */
`;
const Items = styled.div`
  height: 60px;
`;
