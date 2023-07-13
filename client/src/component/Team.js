// This is the Team Page
import React from "react";
import styled from "styled-components";
//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";
//import pictures
import ProgramLeadership from "./ProgramLeadership";
import Adminstrations from "./Adminstrations";
import Postdocs from "./Postdocs";
import Alumni from "./Alumni";
import Students from "./Students";

// import DrEmadShihabImage from "../component/team/photos/Dr-Emad-Shihab.jpg";
import AfiyaFahmidaSarahImage from "../component/team/photos/Afiya-Fahmida-Sarah.jpg";
import AhmedHajYahmedImage from "../component/team/photos/Ahmed-Haj-Yahmed.jpg";
import AkalankaGalappaththiImage from "../component/team/photos/Akalanka-Galappaththi.jpg";
import AkshatMalikImage from "../component/team/photos/Akshat-Malik.jpg";
import AlorEbubeImage from "../component/team/photos/Alor-Ebube.jpg";
import AltafAllahAbbassiImage from "../component/team/photos/Altaf-Allah-Abbassi.jpg";
import AmandaKolopanisImage from "../component/team/photos/Amanda-Kolopanis.jpg";
import AntonioCollanteImage from "../component/team/photos/Antonio-Collante.jpg";
import AurelLucrichIkamaHoneyImage from "../component/team/photos/Aurel-Lucrich-Ikama-Honey.jpg";
import ChunliYuImage from "../component/team/photos/Chunli-Yu.jpg";
import DavidabImage from "../component/team/photos/David- ab.jpg";
import defaultImage from "../component/team/photos/default.png";
import DivyaKamathImage from "../component/team/photos/Divya-Kamath.jpg";

import DrGillesSavardImage from "../component/team/photos/Dr-Gilles-Savard.jpg";
import DrJeanSamuelChenardImage from "../component/team/photos/Dr-Jean-Samuel-Chenard.jpg";
// import DrJinqiuYangImage from "../component/team/photos/Dr-Jinqiu-Yang.jpg";
import DrJulienCroweImage from "../component/team/photos/Dr-Julien-Crowe.jpg";
import DrLataNarayananImage from "../component/team/photos/Dr-Lata-Narayanan.jpg";
import DrLimingZhuImage from "../component/team/photos/Dr-Liming-Zhu.jpg";
import DrLyseLangloisImage from "../component/team/photos/Dr-Lyse-Langlois.jpg";
import DrMariePierreHabasGerardImage from "../component/team/photos/Dr-Marie-Pierre-Habas-Gerard.jpg";
import DrRenjiButalidImage from "../component/team/photos/Dr-Renji-Butalid.jpg";
// import DrSarahNadiImage from "../component/team/photos/Dr-Sarah-Nadi.jpg";
import DrStefanWagnerImage from "../component/team/photos/Dr-Stefan-Wagner.jpg";
// import DrTanjaTajmelImage from "../component/team/photos/Dr-Tanja-Tajmel.jpg";
// import DrYingJennyZouImage from "../component/team/photos/Dr-Ying-Jenny-Zou.jpg";
import FangjianLeiImage from "../component/team/photos/Fangjian-Lei.jpg";
import FazleRabbiImage from "../component/team/photos/Fazle-Rabbi.jpg";
import ForoughMajidiImage from "../component/team/photos/Forough-Majidi.jpg";
import HarshPatelImage from "../component/team/photos/Harsh-Patel.jpg";
import HayaSamaanaImage from "../component/team/photos/Haya-Samaana.jpg";
import JaskiratSinghImage from "../component/team/photos/Jaskirat-Singh.jpg";
import JasmineLatendresseImage from "../component/team/photos/Jasmine-Latendresse.jpg";
import JiawenLiuImage from "../component/team/photos/Jiawen-Liu.jpg";
import JunjieLiImage from "../component/team/photos/Junjie-Li.jpg";
import KatherineHeighingtonImage from "../component/team/photos/Katherine-Heighington.jpg";
import KhaledBadranImage from "../component/team/photos/Khaled-Badran.jpg";
import KhouloudOueslatiImage from "../component/team/photos/Khouloud-Oueslati.jpg";
import LailaMahmoudDawAbodinarImage from "../component/team/photos/Laila-Mahmoud Daw-Abodinar.jpg";
import LorenaPachecoImage from "../component/team/photos/Lorena-Pacheco.jpg";
import MayraRuizImage from "../component/team/photos/Mayra-Ruiz.jpg";
import MohamedElGeishImage from "../component/team/photos/Mohamed-El-Geish.jpg";
import mohayeminulislamImage from "../component/team/photos/mohayeminul-islam.jpg";
import MrDerekTruongImage from "../component/team/photos/Mr-Derek-Truong.jpg";
import MrJesseVincentHerscoviciImage from "../component/team/photos/Mr-Jesse-Vincent-Herscovici.jpg";
import MrPierreDumouchelImage from "../component/team/photos/Mr-Pierre-Dumouchel.jpg";
import MrSergeOlignyImage from "../component/team/photos/Mr-Serge-Oligny.jpg";
import MusfiqurRahmanImage from "../component/team/photos/Musfiqur-Rahman.jpg";
import PapeWadeImage from "../component/team/photos/Pape-Wade.jpg";
import PatrickLoicFoalemImage from "../component/team/photos/Patrick-Loic-Foalem.jpg";
import PatrickYangImage from "../component/team/photos/Patrick-Yang.jpg";
import PierreOlivierCoteImage from "../component/team/photos/Pierre-Olivier-Cote.jpg";
import PouyaFathollahzadehImage from "../component/team/photos/Pouya-Fathollahzadeh.jpg";
import PrasadGarigipatiImage from "../component/team/photos/Prasad-Garigipati.jpg";
import RachedBouchouchaImage from "../component/team/photos/Rached-Bouchoucha.jpg";
import SamuelAbeduImage from "../component/team/photos/Samuel-Abedu.jpg";
import SaurabhKumarImage from "../component/team/photos/Saurabh-Kumar.jpg";
import ShenyuZhengImage from "../component/team/photos/Shenyu-Zheng.jpg";
import StephaneCaronImage from "../component/team/photos/Stephane-Caron.jpg";
import VahidMajdinasabImage from "../component/team/photos/Vahid-Majdinasab.jpg";
import YangLiuImage from "../component/team/photos/Yang-Liu.jpg";
import YipingJiaImage from "../component/team/photos/Yiping-Jia.jpg";
import ZhiminZhaoImage from "../component/team/photos/Zhimin-Zhao.jpg";

const Team = () => {
  return (
    <Container>
      <Title>Our Team</Title>
      <Subtitles>
        <RedText>P</RedText>rogram Leadership
      </Subtitles>
      <ProgramLeadership />
      <Subtitles>
        <RedText>A</RedText>dministration
      </Subtitles>
      <Adminstrations />
      <Subtitles>
        {" "}
        <RedText>P</RedText>ostdocs
      </Subtitles>
      <Postdocs />
      <Subtitles>
        {" "}
        <RedText>A</RedText>lumni
      </Subtitles>
      <Alumni />
      <Subtitles>
        {" "}
        <RedText>S</RedText>tudents
      </Subtitles>
      <Students />
    </Container>
  );
};
export default Team;
//style of all of the page
const Container = styled.div`
  margin-top: 10px;
  margin-left: 100px;
  font-family: "Open Sans", sans-serif;
  padding-bottom: 20px;
  width: 100%;
`;

const Title = styled.div`
  font-weight: bold;
  padding-top: 45px;
  font-size: 45px;
  color: #484848;
  padding-bottom: 50px;
  border-bottom: 2px solid #f0f0f0;
`;

const Img = styled.img`
  width: 270px;
  height: 250px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
`;

const Subtitles = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 40px;
  margin-left: 20px;
  font-size: 35px;
  font-weight: bold;
`;

const RedText = styled.span`
  color: #bb5a7d;
`;
