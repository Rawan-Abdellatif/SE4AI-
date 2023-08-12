import React, { useContext } from "react";
import { DarkModeContext } from "./DarkModeContext";

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
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <Container isDarkMode={isDarkMode}>
      <Text>
        In Collaboration with World-renowned <RedText>Researchers</RedText> and
        <RedText>Technology Leaders</RedText>
      </Text>
      <ImgContainer >
        <Link href="https://www.concordia.ca/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Concordia} alt={Concordia} />{" "}
        </Link>

        <Link href="https://www.polymtl.ca/en/" target="_blank">
          <Img  isDarkMode={isDarkMode}  src={PolyMtl} alt={PolyMtl} />{" "}
        </Link>

        <Link href="https://www.queensu.ca/" target="_blank">
          <Img   isDarkMode={isDarkMode} src={Queens} alt={Queens} />
        </Link>

        <Link href="https://www.ualberta.ca/index.html" target="_blank">
          <Img src={Alberta}  isDarkMode={isDarkMode} alt={Alberta} />
        </Link>

        <Link href="https://www.nbc.ca/" target="_blank">
          <Img  isDarkMode={isDarkMode}  src={NBC} alt={NBC} />
        </Link>

        <Link href="https://www.ibm.com/ca-en" target="_blank">
          <Img src={IBM} alt={IBM}  isDarkMode={isDarkMode} />
        </Link>

        <Link href="https://www.cisco.com/" target="_blank">
          <Img   isDarkMode={isDarkMode} src={Cisco} alt={Cisco} />
        </Link>

        <Link href="https://www.td.com/ca/en/personal-banking" target="_blank">
          <Img   isDarkMode={isDarkMode} src={TD} alt={TD} />
        </Link>

        <Link href="https://www.ericsson.com/en" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Ericsson} alt={Ericsson} />
        </Link>

        <Link href="https://airudi.com/en/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Airudi} alt={Airudi} />
        </Link>

        <Link href="https://www.giro.ca/en-ca/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={GIRO} alt={GIRO} />
        </Link>

        <Link href="https://cbc.radio-canada.ca/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Radio} alt={Radio} />
        </Link>

        <Link
          href="https://www.nserc-crsng.gc.ca/index_eng.asp"
          target="_blank"
        >
          <Img  isDarkMode={isDarkMode}  src={NSER} alt={NSER} />
        </Link>

        <Link href="https://ivado.ca/en/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={IVADO} alt={IVADO} />
        </Link>

        <Link href="https://observatoire-ia.ulaval.ca/en/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={OBVIA} alt={OBVIA} />
        </Link>

        <Link href="https://montrealethics.ai/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={MAIEI} alt={MAIEI} />
        </Link>

        <Link href="https://www.uni-graz.at/en/" target="_blank">
          <Img  isDarkMode={isDarkMode} src={Graz} alt={Graz} />
        </Link>

        <Link
          href="https://vercel.com/?utm_source=se4ai&utm_campaign=oss"
          target="_blank"
        >
          <Img  isDarkMode={isDarkMode} src={Vercel} alt={Vercel} />
        </Link>
      </ImgContainer>
    </Container>
  );
};
export default ThirdContent;

const Container = styled.div`
  color: ${(props) => (props.isDarkMode ? "#f7f7f7": "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#282828" : " #F0F0F0")};

  /* margin-left: -10px; */
  /* margin-right: -10px; */
  padding: 10px 0;
  text-align: center;
  font-family: "Open Sans", sans-serif;

  @media (max-width: 768px) {
    flex-direction:column;
/* margin-left:-320px; */
text-align :center;
/* width:300px; */
 }
`;

const Text = styled.div`
  padding-top: 30px;
  display: inline-block;
    font-size: 2rem;
    margin-bottom: 3rem;
    max-width: 900px;
  font-weight:900;
color:black;  /* font-size: 30px; */
  /* text-align: center; */

  @media (max-width: 768px) {
    flex-direction:column;
    /* font-size: 1rem; */
width:350px;
 }
`;
const RedText = styled.span`
  color: #BB5A7D;
`;
const ImgContainer = styled.div`
display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  padding: 60px 160px;
  /* width:1200px; */
  /* align-content: space-between; */
  line-height: 1.5;
  /* text-align: center; */
border-radius:5px;


/* background-color: ${(props) => (props.isDarkMode ? "black" : "D3D3D3")}; */

color: ${(props) => (props.isDarkMode ? "black" : "#f7f7f7")}; 
@media (max-width: 768px) {
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;


text-align: center;
align-content:center;
}`;

const Img = styled.img`
  /* background-color: #c0c0c0; */
  padding: 30px 30px;
  width: 200px;
  height: 60px;
  margin: 20px;
  text-align: center;
  background-color: ${(props) => (props.isDarkMode ?  "	#A8A8A8":"#f7f7f7" )};

border-radius:10px;
  /* border-radius: 15px; */
`;
const Link = styled.a`
  text-decoration: none;
  color: inherit;
  
  /* width: 150px; */
`;
const Items = styled.div`
  height: 60px;
`;
