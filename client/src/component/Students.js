import React, { useContext } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";

//import  icons
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { AiFillLinkedin } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

// import pictures
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
import SharonHoImage from "../component/team/photos/Sharon-Ho.jpg";
import LinLingImage from "../component/team/photos/Lin-Ling.jpg"
////import Students data

const students = [
  {
    name: "Yiping Jia",
    University: "Queen's University",
    img: YipingJiaImage,
    website: "",
    linkedin: "",
    twitter: "",
    email: "",
  },
  {
    name: "Fangjian Lei",
    University: "Queen's University",
    img: FangjianLeiImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/fangjian-lei-5b110b204/",
    twitter: "",
    email: "",
  },
  {
    name: "Junjie Li",
    University: "Concordia University",
    img: JunjieLiImage,
    website: "",
    linkedin: "",
    twitter: "",
    email: "",
  },
  {
    name: "Sharon Ho",
    University: "Concordia University",
    img: SharonHoImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/sharon-ho/",
    twitter: "",
    email: "",
  },
  {
    name: "Amanda Kolopanis",
    University: "Concordia University",
    img: AmandaKolopanisImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/amanda-kolopanis/",
    twitter: "",
    email: "",
  },
  {
    name: "Mohayeminul Islam",
    University: "University of Alberta",
    img: mohayeminulislamImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/mohayemin/",
    twitter: "",
    email: "",
  },
  {
    name: "Akalanka Galappaththi",
    University: "University of Alberta",
    img: AkalankaGalappaththiImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/akalanka-galappaththi-67580719/",
    twitter: "https://twitter.com/boney_ag",
    email: "akalanka@ualberta.ca",
  },
  {
    name: "Aurel Lucrich Ikama Honey",
    University: "Ecole Polytechnique",
    img: AurelLucrichIkamaHoneyImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/aurel-i-345a91ba/",
    twitter: "",
    email: "",
  },
  {
    name: "Pierre-Olivier Cote",
    University: "Ecole Polytechnique",
    img: PierreOlivierCoteImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/pierre-olivier-c%C3%B4t%C3%A9/",
    twitter: "",
    email: "",
  },
  {
    name: "Vahid Majdinasab",
    University: "Ecole Polytechnique",
    img: VahidMajdinasabImage,
    website: "",
    linkedin: "",
    twitter: "",
    email: "",
  },
  {
    name: "Patrick Loic Foalem",
    University: "Ecole Polytechnique",
    img: PatrickLoicFoalemImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/patrick-loïc-foalem-37281a100",
    twitter: "https://twitter.com/Patrick_Loic_F",
    email: "",
  },
  {
    name: "Forough Majidi",
    University: "Ecole Polytechnique",
    img: ForoughMajidiImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/forough-majidi-8a35b8227",
    twitter: "",
    email: "",
  },
  {
    name: "Chunli Yu",
    University: "Queen's University",
    img: ChunliYuImage,
    website: "",
    linkedin: "",
    twitter: "",
    email: "",
  },
  {
    name: "Divya Kamath",
    University: "Queen's University",
    img: DivyaKamathImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/divyamkamath/",
    twitter: "",
    email: "",
  },
  {
    name: "Antonio Collante",
    University: "Concordia University",
    img: AntonioCollanteImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/antonio-c-737aa566/",
    twitter: "",
    email: "",
  },
  {
    name: "Khaled Badran",
    University: "Concordia University",
    img: KhaledBadranImage,
    website: "https://das.encs.concordia.ca/members/khaled-badran",
    linkedin: "https://www.linkedin.com/in/khaled-badran-6b0908174/",
    twitter: "https://twitter.com/khaled_badran9",
    email: "",
  },
  {
    name: "Rached Bouchoucha",
    University: "Ecole Polytechnique",
    img: RachedBouchouchaImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/rached-bouchoucha-1061997/",
    twitter: "",
    email: "",
  },
  {
    name: "Ahmed Haj Yahmed",
    University: "Ecole Polytechnique",
    img: AhmedHajYahmedImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/ahmed-haj-yahmed/",
    twitter: "",
    email: "",
  },
  {
    name: "Musfiqur Rahman",
    University: "Concordia University",
    img: MusfiqurRahmanImage,
    website: "https://das.encs.concordia.ca/members/musfiqur-rahman",
    linkedin: "https://www.linkedin.com/in/musfiqur-rahman-37596444/",
    twitter: "",
    email: "",
  },
  {
    name: "Jasmine Latendresse",
    University: "Concordia University",
    img: JasmineLatendresseImage,
    website: "https://jaslatendresse.github.io/",
    linkedin: "https://www.linkedin.com/in/jasmine-latendresse-2835561a6/",
    twitter: "",
    email: "",
  },
  {
    name: "Jiawen Liu",
    University: "Queen's University",
    img: JiawenLiuImage,
    website: "https://seal-queensu.github.io/member-current.html",
    linkedin: "https://www.linkedin.com/in/jiawen-liu-691906178/",
    twitter: "",
    email: "",
  },
  {
    name: "Pouya Fathollahzadeh",
    University: "Queen's University",
    img: PouyaFathollahzadehImage,
    website: "https://seal-queensu.github.io/member-current.html",
    linkedin: "",
    twitter: "",
    email: "",
  },
  {
    name: "Akshat Malik",
    University: "Queen's University",
    img: AkshatMalikImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/akshat-malik/",
    twitter: "",
    email: "",
  },
  {
    name: "Harsh Patel",
    University: "Queen's University",
    img: HarshPatelImage,
    website: "https://alacrity.dev/",
    linkedin: "https://www.linkedin.com/in/harsh8398/",
    twitter: "",
    email: "",
  },
  {
    name: "Jaskirat Singh",
    University: "Queen's University",
    img: JaskiratSinghImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/jaskirat409/",
    twitter: "",
    email: "",
  },
  {
    name: "Shenyu Zheng",
    University: "Queen's University",
    img: ShenyuZhengImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/shenyu-zheng-31146524b/",
    twitter: "",
    email: "",
  },
  {
    name: "Afiya Fahmida Sarah",
    University: "University of Alberta",
    img: AfiyaFahmidaSarahImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/afiya-sarah-039007179",
    twitter: "",
    email: "afiya-sarah-039007179",
  },
  {
    name: "Fazle Rabbi",
    University: "Concordia University",
    img: FazleRabbiImage,
    website: "https://frabbisw.github.io/",
    linkedin: "https://www.linkedin.com/in/fazle-rabbi-720139207/",
    twitter: "",
    email: "",
  },
  {
    name: "Lorena Pacheco",
    University: "Concordia University",
    img: LorenaPachecoImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/lorenasimedo/",
    twitter: "",
    email: "",
  },
  {
    name: "Samuel Abedu",
    University: "Concordia University",
    img: SamuelAbeduImage,
    website: "",
    linkedin: "https://linkedin.com/in/samuel-abedu-42b755103/",
    twitter: "",
    email: "",
  },
  {
    name: "Khouloud Oueslati",
    University: "Ecole Polytechnique",
    img: KhouloudOueslatiImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/khouloud-ouesleti/",
    twitter: "",
    email: "",
  },
  {
    name: "Yang Liu",
    University: "Ecole Polytechnique",
    img: YangLiuImage,
    website: "",
    linkedin: "",
    twitter: "",
    email: "",
  },
  {
    name: "Laila Mahmoud Daw Abodinar",
    University: "Ecole Polytechnique",
    img: LailaMahmoudDawAbodinarImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/laila-abodinar-2541491ba/",
    twitter: "",
    email: "",
  },
  {
    name: "Altaf Allah Abbassi",
    University: "Ecole Polytechnique",
    img: AltafAllahAbbassiImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/altafallahabbassi/",
    twitter: "",
    email: "",
  },
  {
    name: "Alor Ebube",
    University: "Concordia University",
    img: AlorEbubeImage,
    website: "https://das.encs.concordia.ca/members/alor-ebube",
    linkedin: "https://www.linkedin.com/in/alor-ebubechukwu//",
    twitter: "",
    email: "",
  },
  {
    name: "Mayra Ruiz",
    University: "Concordia University",
    img: MayraRuizImage,
    website: "",
    linkedin: "https://www.linkedin.com/in/mruiz27/",
    twitter: "",
    email: "",
  },{  name: "Lin Ling ",
  University: "Concordia University",
  img: LinLingImage,
  website: "",
  linkedin: "https://www.linkedin.com/in/lin-ling-4705b0260/",
  twitter: "",
  email: "",}
];
const Students = () => {
  const { isDarkMode } = useContext(DarkModeContext);

  return (
    <MiddContainer isDarkMode={isDarkMode}>
      {students.map((student, index) => (
        <MiniContainer key={index} isDarkMode={isDarkMode}>
          <Img src={student.img} alt={student.name} />
          <Name>{student.name}</Name>
          <University>{student.University}</University>
          <Links>
            <ul>
              {" "}
              {student.website && (
                <SocialMedia isDarkMode={isDarkMode}>
                  <li>
                    <a
                      href={student.website}
                      target="_blank"
                      style={{ textDecoration: "none" }}
                    >
                      <FaArrowUpRightFromSquare />
                      <SmallIcon isDarkMode={isDarkMode}>
                        <KnowMore isDarkMode={isDarkMode}>Know more</KnowMore>
                      </SmallIcon>
                    </a>
                  </li>
                </SocialMedia>
              )}
              {student.linkedin && (
                <SocialMedia isDarkMode={isDarkMode}>
                  {" "}
                  <li>
                    <a
                      href={student.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SmallIcon isDarkMode={isDarkMode}>
                        <AiFillLinkedin />
                      </SmallIcon>
                    </a>
                  </li>
                </SocialMedia>
              )}
              {student.twitter && (
                <SocialMedia isDarkMode={isDarkMode}>
                  <li>
                    <a
                      href={student.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <SmallIcon isDarkMode={isDarkMode}>
                        <BsTwitter />
                      </SmallIcon>
                    </a>
                  </li>{" "}
                </SocialMedia>
              )}
              {student.email && (
                <SocialMedia isDarkMode={isDarkMode}>
                  <li>
                    <a href={`mailto:${student.email}`}>
                      <SmallIcon isDarkMode={isDarkMode}>
                        <MdEmail />
                      </SmallIcon>
                    </a>
                  </li>
                </SocialMedia>
              )}
            </ul>
          </Links>
        </MiniContainer>
      ))}
    </MiddContainer>
  );
};
export default Students;
//css part

const MiddContainer = styled.div`
   display: flex;
   flex-direction:row;
   flex-wrap:wrap;
gap:30px;
  
  
    @media (max-width: 995px) {


    }
`;

const Img = styled.img`
  width:100%;
  height: 290px;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  @media (max-width: 995px) {
    height: 350px;
/* margin-left:-0px;   width: 350px;  height: 320px; */

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
width:310px;  /* width:100vw; */
/* border:5px solid orange;  */
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

const Links = styled.div`
  color: #404040;
  font-weight: bold;
  padding-right: 40px;

  ul {
    display: flex;
    flex-direction: row;
    width: 190px;
    list-style: none;
    margin: 0;
    padding: 0;
    color: #404040;
  }
  /* li {
    width: 80px;
  } */
`;

const SocialMedia = styled.div`
  /* padding-top: 10px; */
  display: flex;
  align-items: center;
  flex-direction: row;
  list-style: none;
  height: 50px;
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};

  margin-left: 15px;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #404040;
    padding: 5px 5px;
    transition: background-color 0.3s;
    border-radius: 5px;
    /* margin-right: 5px; */
  }

  a:hover {
    background-color: #e8e8e8;
  }
`;
const SmallIcon = styled.span`
  font-size: 20px;
  color: #585858;
  font-weight: bold;
  margin-right: 7px;
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
`;

const KnowMore = styled.span`
  margin-right: 3px;
  color: #585858;
  font-size: 15px;
  align-items: center;
  align-items: center;
  color: ${(props) => (props.isDarkMode ? "white" : "#585858")};
`;
