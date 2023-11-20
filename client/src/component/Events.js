import React, { useEffect, useContext, useState } from "react";
import styled from "styled-components";
import { DarkModeContext } from "./DarkModeContext";
import traineeSeptemberImage from "./2022-09-21-past/traineeSeptember.jpg"
import apr252023Image from "./2022-09-21-past/apr252023.jpg";
import april32023Image from "./2022-09-21-past/april32023.jpg";
import wie1Image from "./2022-09-21-past/wie1.jpg";
import feb102023Image from "./2022-09-21-past/feb102023.jpg"
import trainee_talk_2Image from "./2022-09-21-past/trainee_talk_2.jpg"
import telecom2Image from "./2022-09-21-past/telecom2.jpg";
import trainee_talk_1Image from "./2022-09-21-past/trainee_talk_1.jpg"
import retreat_groupImage from "./2022-09-21-past/retreat_group.jpg";
import olivierImage from "./2022-09-21-past/olivier.jpg"
import sumon_biswasImage from "./2022-09-21-past/sumon_biswas.jpg";
import futureaiImage from "./2022-09-21-past/futureai.jpg";


import wie2Image from "./2022-09-21-past/wie2.jpg";
import wie3Image from "./2022-09-21-past/wie3.jpg";
import feb272023Image from "./2022-09-21-past/feb272023.jpg"
import {Grid} from "@mui/material";

import { Link } from "react-router-dom";
const Events=()=>{
    const { isDarkMode } = useContext(DarkModeContext);

    return( 

        <Container isDarkMode={isDarkMode}>       
  

  <Grid
    container
    justifyContent="center"
    alignItems="center"
    // style={{ flex: 1, padding: "20px" }}
    
  >

        


     <Main isDarkMode={isDarkMode}>
     <Grid item xs={6} md={6} lg={12} xl={12}>

     <Title isDarkMode={isDarkMode}><h2>Events</h2> </Title>
     </Grid>
{/*unComment this part when there is no upcomment Events*/ }
     {/* <UpcomingEvents sDarkMode={isDarkMode}>UpcomingEvents
     <h5>No upcoming events at this time.</h5>
 </UpcomingEvents> */}
 <Subtitle isDarkMode={isDarkMode}>UpcomingEvents</Subtitle>
 <PastEvent isDarkMode={isDarkMode}> 
    <Calinder isDarkMode={isDarkMode}>
    <Img src={futureaiImage} alt=" futureai.jpg" />
    {/* <Month>Sep</Month>
        <Day>25</Day> */}
   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Future_of_AI_Networking_Event">Future of AI Networking Event   
</a>
   <h5>  CREATE SE4AI has partnered with the Montréal chapter of     
        Women in AI & Robotics and Concordia's Applied
                 AI Institute to host a speaker and networking
                  event on the Future of AI 
        Join us for a deep dive into the future of AI, 
        Sustainability, the Societal Impact of Technology 
        and Innovative Discoveries. The event will be followed by a 
        networking session and an enjoyable opportunity for socializing over refreshments and finger foods. 
        Our very own ...<Button isDarkMode={isDarkMode}><Link  to="/blog/Future_of_AI_Networking_Event" className="read-more-link"> Read More
      </Link></Button></h5> 
             </Event>
</PastEvent> 




<Subtitle isDarkMode={isDarkMode}>All Events</Subtitle>
{/*first Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    <Img src={traineeSeptemberImage} alt=" traineeSeptemberImage" />

    {/* <Month>Sep</Month>
        <Day>25</Day> */}
   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Trainee_Talks_Webinar_sptemper25">Trainee Talks Webinar - September 25, 2023</a>
   <h5>    Our CREATE SE4AI community came together on 
              September 25th, 2023 for the first Trainee Our CREATE SE4AI
               community came together on September 25th, 2023 for the first 
               Trainee Talks of the fall semester. We heard Queen's Master's candidate
                Divya Kamath present her thesis research on Pragmatic Approaches to Schedule
                 Less Builds in Continuous Integration ...<Button isDarkMode={isDarkMode}><Link  to="/blog/Trainee_Talks_Webinar_sptemper25" className="read-more-link"> Read More
      </Link></Button></h5> 
             </Event>

</PastEvent>
{/*second Event*/}

<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    <Img src={apr252023Image} alt=" apr252023.jpg" />

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Industry_Talks_Webinar_April25">Industry Talks Webinar - April 25, 2023​</a>
   <h5>     CREATE SE4AI is pleased to present Patrick Mesana, Consultant at
          National Bank of Canada and PhD Candidate at HEC, who spoke

            {" "}
            on Balancing Data Valorization and Privacy: Industry Challenges and
            Opportunities. In his talk, Patrick delved into the distinct characteristics of data
          as a digital asset and examined the challenges of striking a balance ...<Button isDarkMode={isDarkMode}><Link to="/blog/Industry_Talks_Webinar_April25" className="read-more-link"> Read More
      </Link></Button></h5> </Event>

</PastEvent>
{/*Third Event*/}

<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    <Img src={april32023Image} alt=" april32023.jpg" />

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Trainee_Talks_Webinar_April3rd">Trainee Talks Webinar - April 3rd, 2023</a>
   <h5>  TThe Spring Trainee Talks webinar was a huge success and we were
          pleased to have 27 participants join! 
          In this webinar, 2 PhD students from Polytechnique Montréal under
          Prof. Foutse Khomh delivered their research topics. Vahid Majdinasab
          spoke on his topic of Mutation Testing of Deep Reinforcement Learning
          Based on Real Faults, followed by Forough Majidi, who shared her
          Empirical Study on ... <Button isDarkMode={isDarkMode}><Link to="/blog/Trainee_Talks_Webinar_April3rd" className="read-more-link"> Read More
      </Link></Button></h5> </Event>
</PastEvent>

{/*Forth Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    {/* <Image> */}

          <Img src={wie1Image} alt="wie1Image" />
          {/* <Img2 src={wie2Image} alt="wie2Image" />
          <Img2 src={wie3Image} alt="wie3Image" /> */}
          {/* </Image> */}
   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Women_in_Engineering">Women in Engineering (WIE) - March 18, 2023</a>
   <h5>    On March 18th , CREATE SE4AI took part in WIE Inspire WIE Empower, an annual event hosted  by the
  
            Women in Engineering (WIE)
   
          student association at the
          Gina Cody School of Engineering and Computer Science at Concordia
            University.
       
          Through their various outreach and mentorship activities, WIE
          encourages young women to explore engineering and computer science as
          career options.
          <Button isDarkMode={isDarkMode}><Link to="/blog/Women_in_Engineering" className="read-more-link"> Read More
      </Link></Button></h5> </Event>

</PastEvent>
{/*Fifth Event*/}
{/* <PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    <Month>Sep</Month>
        <Day>25</Day>
   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Trainee_Talks_Webinar_sptemper25">Trainee Talks Webinar - September 25, 2023</a>
   <h5>    Our CREATE SE4AI community came together on 
              September 25th, 2023 for the first Trainee </h5> </Event>
</PastEvent> */}
{/*Sixth Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    {/* <Month>Feb</Month>
        <Day>27</Day> */}
        <Img src={feb272023Image} alt=" feb272023.jpg" />

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Trainee_Talks_Webinar_February27">Trainee Talks Webinar - February 27, 2023</a>
   <h5>    In the first Trainee Talks webinar of 2023, Pierre-Olivier Côté, a
          Master's student at Polytechnique Montréal spoke about Quality Issues
          in Machine Learning Software Systems. Immediately following,
          University of Alberta PhD student Akalanka Galappaththi presented his
          work on “A Data Set of Generalizable ....        <Button isDarkMode={isDarkMode}><Link to="/blog/Trainee_Talks_Webinar_February27" className="read-more-link"> Read More
      </Link></Button> </h5> </Event>

</PastEvent>
{/*Seventh Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    {/* <Month>Feb</Month>
        <Day>10</Day> */}
                <Img src={feb102023Image} alt="feb102023.jpg" />

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Industry_Talks_Webinar_February10">Industry Talks Webinar - February 10, 2023</a>
   <h5>  Dr. Gabor Melli, VP of Engineering, AI/ML at San Francisco-based
          Medable joined us for our first industry talk webinar of 2023! Gabor
          Melli is a seasoned professional with a proven track record of leading
          teams and driving positive change within organizations. His background
          includes implementing evidence-based solutions and facilitating change
          at large enterprises such as Sony PlayStation ... <Button isDarkMode={isDarkMode}><Link to="/blog/Industry_Talks_Webinar_February10" className="read-more-link"> Read More
      </Link></Button> </h5> </Event>

</PastEvent>
{/*8th Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    {/* <Month>Dec</Month>
        <Day>13</Day> */}
                <Img src={trainee_talk_2Image} alt=" trainee_talk_2.jpg" />

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Trainee_Talks_Webinar_December13">Trainee Talks Webinar - December 13, 2022</a>
   <h5>      Trainee Talks is a monthly webinar series featuring CREATE SE4AI
          trainees sharing their research topics in software engineering and AI.{" "}
      
          This time, Queen's University Master's student Ernesto Lang Oreamuno
          joined us and spoke about Documentation Practices of Third-Party
          Models and Datasets.
          Immediately following, Rached Bouchoucha, École Polytechnique ...<Button isDarkMode={isDarkMode}><Link to="/blog/Trainee_Talks_Webinar_December13" className="read-more-link"> Read More
      </Link></Button> </h5> </Event>

</PastEvent>
{/*9th  Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    {/* <Month>Nov</Month>
        <Day>18</Day> */}
                  <Img src={telecom2Image} alt=" telecom2.jpg" />

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Industry_Talks_Webinar_November18">Industry Talks Webinar - November 18, 2022</a>
   <h5>    CREATE SE4AI is pleased to present
        AI Adoption in Telecom Networks
          as part of our Industry Talks webinar series.
 
          Did you know that revenue generated from AI automation in telecom
          networks is expected to reach USD 200 billion by 2027? What are some
          of the current challenges Ericsson, a global leader in ICT solutions
          faces as they adopt new technologies in AI and ML ... <Button isDarkMode={isDarkMode}><Link to="/blog/Industry_Talks_Webinar_November18" className="read-more-link"> Read More
      </Link></Button></h5> </Event>

</PastEvent>
{/*10th Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    {/* <Month>Nov</Month>
        <Day>4</Day> */}
                <Img src={trainee_talk_1Image} alt="trainee_talk_1.jpg" />   
               

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Trainee_Talks_Webinar_November4">Trainee Talks Webinar - November 4, 2022</a>
   <h5> Our monthly CREATE SE4AI Trainee Talks webinar series
          kicked off with 2 graduate Software Engineering students presenting
          their research.
   
          In the first of our series of trainee-led webinars, we invited 2
          graduate students to deliver their research topics to the broader
          public ...  <Button isDarkMode={isDarkMode}> <Link to="/blog/Trainee_Talks_Webinar_November4" className="read-more-link"> Read More
      </Link></Button></h5> </Event>

</PastEvent>
{/*11th Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    {/* <Month>Jun</Month>
        <Day>03</Day> */}
            <Img src={retreat_groupImage} alt="retreat_group.jpg" />

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/CREATE_SE4AI_Retreat_June3">CREATE SE4AI Retreat - June 3, 2022</a>
   <h5>  Our 1st annual CREATE SE4AI Program Retreat is a wrap! It was an
          inspiring day of celebrating our collective accomplishments and
          exchanging ideas amongst an amazing team of students, professors and
          industry partners, live and in person at the Chateau Vaudreuil. The
          future is so bright for this group of talented trainees, they’re gonna
          need shades ...   <Button isDarkMode={isDarkMode}>         
           <Link to="/blog/CREATE_SE4AI_Retreat_June3" className="read-more-link"> Read More
      </Link></Button>  </h5> </Event>

</PastEvent>
{/*12th Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    {/* <Month>Apr</Month>
        <Day>12</Day> */}
                  <Img src={olivierImage} alt="olivier.jpg" />

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Guest_Speaker_Webinar_April12">Guest Speaker Webinar - April 12, 2022</a>
   <h5>   CREATE SE4AI trainees, profs and partners enjoyed a webinar presented
          by Olivier Blais, co-founder and VP of Decision Science at Moov AI in
          Montréal. Olivier spoke about "Delivering High Quality Machine
          Learning Models" including ...<Button isDarkMode={isDarkMode}><Link to="/blog/Guest_Speaker_Webinar_April12 " className="read-more-link"> Read More
      </Link></Button> </h5> </Event>

</PastEvent>
{/*13th Event*/}
<PastEvent isDarkMode={isDarkMode}>
    <Calinder isDarkMode={isDarkMode}>
    {/* <Month>Feb</Month>
        <Day>03</Day> */}
<Img src={sumon_biswasImage} alt="sumon_biswas.jpg" />

   </Calinder>
<Event isDarkMode={isDarkMode}>
    <a href="/blog/Guest_Speaker_Webinar_February3">Guest Speaker Webinar - February 3, 2022</a>
   <h5>      CREATE SE4AI hosted a webinar by Sumon Biswas, PhD Candidate at Iowa
          State University on "Understanding and Reasoning Fairness of Machine
          Learning Pipeline". Sumon Biswas is a Computer Science Ph.D. candidate at Iowa State
            University (ISU) and a Research Assistant in Laboratory for Software
            Design at ISU under the supervision of Professor Hridesh Rajan. His
            research interests ... <Button isDarkMode={isDarkMode}> <Link to="/blog/Guest_Speaker_Webinar_February3"  className="read-more-link"> Read More</Link></Button> </h5> </Event>

</PastEvent>
</Main>
</Grid>
    </Container>
    )

}
export default Events
const Container = styled.div`
   margin-top: 3px;
   /* margin-left:70px;  */
/* border:2px solid red; */
font-family: "Open Sans", sans-serif;
/* padding-bottom: 20px; */
/* width: 100%; */
display: flex;
font-family: system-ui, -apple-system, 'Segoe UI', Roboto, Ubuntu, Cantarell, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Helvetica', 'Arial', sans-serif, BlinkMacSystemFont;
  /* border: ${(props) =>
    props.isDarkMode ? "  0px solid #404040" : "  2px solid #f4f0ec"}; */
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
    height:100%;

  /* width: 100%; */
  /* @media screen and (max-width: 768px) {
  margin-left:0px;
  display:flex; 
  flex-wrap:wrap;

} */


`;

const Img = styled.img`
width:100%;
text-align:center;
/* width: 150px;  */
 height:100%;
/* border:2px solid orange; */
  /* padding-top: 20px; */
  /* padding-bottom:20px; */
  @media screen and (max-width: 480px) {
height:280px;
width:350px;

margin-left:-380px;}
`;

// const Image = styled.div`
// flex-wrap: wrap;
// width:100%;
// height:120px;

//  max-width: 150px;  

// `;
const Main = styled.div`
  width: 100%;
margin-top:16px;  
  color: ${(props) => (props.isDarkMode ? "white" : "#484848")};
  /* margin: 0 auto; */
height:100%;
  /* background-color: ${(props) => (props.isDarkMode ? "#181818" : "#ffffff")};  */
/* border:2px solid pink; */
/* padding-left:600px; */
@media screen and (max-width: 480px) {
  /* margin-left:-350px; */
  /* padding-left:-500px; */
  max-width:480px;
  
}
@media screen and (min-width: 1700px) {
/* border:2px solid green; */
align-items: center;
    margin-left: calc(27% - 150px); 
  

}
`
const Title = styled.h2`
  font-weight: 700;
  display: flex;
  flex-wrap: wrap;
 margin-top:-18px;
  padding-top:50px;
  font-size: 45px;
  padding-bottom: 80px;
  border-bottom: 2px solid ${(props) => (props.isDarkMode ? "#212529" : "#f0f0f0")};
  color: ${(props) => (props.isDarkMode ? "#ffffff" : "#484848")};
  background-color: ${(props) => (props.isDarkMode ? "#242526" : "#ffffff")};
  width: 100%; /* Set the width to 100% */
h2{
  /* border:2px solid yellow;  */
margin-left:220px;


}
@media screen and (max-width: 480px) {
  margin-left:-200px;
}
`;
  const UpcomingEvents=styled.div`
  margin-left:380px;
  display : flex; 
flex-direction:row;
width:600px;
height:150px;
  /* height:190px; */
  border:2px solid orange;
  display: flex;
  /* flex-wrap: wrap; */
  margin-top: 50px;
  /* margin-bottom:10px; */
  /* padding-left:120px; */
  font-size: 2em; 
   font-weight: bold;
  /* color: ${(props) => (props.isDarkMode ? "#ffffff" : "white")}; */
  h5{
    
margin-left:-240px;
font-size: 14px;    line-height: 3px;
    letter-spacing: 0;
    font-weight: normal;
    /* padding: 14px 0 0 0; */
    font-family: 'GillSansMTPro',sans-serif;
margin-top:50px;
/* border:2px solid green; */

  a {  
    font-family: 'GillSansMTPro',sans-serif;
    font-size: 14px; 
color: #bb5a7d;
text-decoration: none;
font-weight:normal;  

}

a:hover {
text-decoration: underline;
}

  }
;`



const PastEvent=styled.div`
display : flex; 
flex-direction:row;
/* text-align:center; */
height:150px;
/* align-items:center; */
/* padding-left:280px; */
@media screen and (max-width: 480px) {
padding-left:15px;
  max-width:360px;
  display : flex; 
/* margin-top:5px; */
flex-wrap:wrap;
/* border:2px solid blue; */
height:620px;
margin-bottom:-90px;

}
 `

 const Calinder=styled.div`
 /* border:2px solid green; */
 width:130px;
 height:130px;
 margin-left:380px;
 padding-top:-2px;
 `
 const Day=styled.div` 
    font-family: Arial,sans-serif;
    font-weight: bold;
    font-size: 42px;
    line-height: 48px;
    color: #bb5a7d;
    /* padding-left:30px; */
 `
 const Month=styled.div`
 /* border:2px solid orange; */
 font-family: 'GillSansMTProMedium',sans-serif;
 font-weight:normal;
 font-size:24px;
 color: #bb5a7d;
`
//  const Event =styled.div``


 const Subtitle=styled.div`
  /* text-align:center;
  align-items:center; */
 /* height:190px; */
margin-left:380px;
 display: flex;
 /* flex-wrap: wrap; */
 margin-top: 40px;
 margin-bottom:10px;
/* text-align:center; */
 font-size: 1em;  font-weight: bold;
 @media screen and (max-width: 480px) {
  margin-left:20px;
  /* margin-top:10px; */
}
 /* color: ${(props) => (props.isDarkMode ? "#ffffff" : "white")}; */
 `
 const Event=styled.div`
 /* border:2px solid black ; */
 /* border:2px solid orange; */
 display :flex; 
 flex-direction:column;
 height:20px ;
 margin-left:20px;
 /* border:2px solid green; */
 width:600px;
  a{
  display: flex;
    flex-direction: row;
    /* font-size:25px;  */
 color: ${(props) => (props.isDarkMode ? "white" : "black")};
 text-decoration: none;
    /* color: #bb5a7d; */
    /* font-size: 17px; */
    font-weight: bold;
    font-family: 'GillSansMTProBoldCondensed',sans-serif;
    font-size: 19px;
    /* line-height: 23px; */
    letter-spacing: .4px; 
    &:hover {
    color: #bb5a7d;
    cursor: pointer;
  } }
  h5{
    margin-top: -5px;
    font-size: 15px;
    /* line-height:6px; */
    letter-spacing: 0;
    font-weight: normal;
    padding: 14px 0 0 0;
    font-family: 'GillSansMTProBoldCondensed',sans-serif;

  }

  @media screen and (max-width: 480px) {
  /* margin-left:350px; */
  margin-top:-75px;
max-width:380px;
/* display :flex;  */

margin-left:5px;
}




 `
 const Button=styled.button`
 background-color:inherit;
 border:none;
font-weight:normal;
 /* display:flex; 
 flex-direction:row; */
 /* width:450px; */
 /* border:2px solid blue; */
 /* font-size: 10px; */
    /* line-height: 3px; */
    letter-spacing: 0;
/* height:20px; */
    /* padding: 14px 0 0 0; */
    font-family: 'GillSansMTProBoldCondensed',sans-serif;
 .read-more-link {
   color: ${(props) => (props.isDarkMode ? "white" : "black")};
   font-size: 15px;   
    font-family: 'GillSansMTProBoldCondensed',sans-serif;
    font-weight:700;


 }
 .read-more-link:hover {
   color:#bb5a7d;
   /* text-decoration:line; */
 }`
