import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Timeline.module.css";
import WOW from "wowjs";
import "animate.css/animate.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Chrono } from "react-chrono";
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import HorizontalTimeline from 'react-horizontal-timeline';
import Zoom from 'react-reveal/Zoom';


function Timelines() {
    const items = [{
        title: "Jan 2022",
        cardTitle: "RESEARCH",
        cardDetailedText:["Together with the rapidly developing worldwide industry of decentralized finance, we have started exploring the marketing of cannabis.", 
        "Cannabis and Cryptocurrency industries are one of the most popular research areas nowadays."],
       
      
      },{
        title: "Feb 2022",
        cardTitle: "TEAM ASSEMBLY AND IDEA DEVELOPMENT",
        cardDetailedText:["We have gathered a highly skilled group of people. Each of our team members has experience in his or her area of expertise. ",
         "Ideas were developed jointly, much like the branches of a tree, all connected but contributing separately." ,
         "We worked with our team by adding ideas, refining them, and collaborating with everyone to create the best possible solution."],
       
      
      },{
        title: "Feb 2022",
        cardTitle: "FINACIAL STUDIES",
        cardDetailedText:["We began a financial analysis of the current reward tokens and how they are inconvenient for the holder due to inflation.", "Additionally, we looked into stable coins, stable staking payouts, and ways to address the aforementioned issue."],
       
      
      },{
        title: "Mar 2022",
        cardTitle: "BLOCKCHAIN SELECTION AND RESEARCH",
        cardDetailedText:"One of the most difficult jobs was choosing the ideal blockchain. In addition to wanting an ecosystem where we could create the ideal solution for our holders, we also sought one that would support our vision and ideals. We chose SOLANA because, in our opinion, it is the ideal blockchain to kick in a revolution within the NFT industry while also give the NFT technology a new purpose.",
       
      
      },{
        title: "Apr 2022",
        cardTitle: "ALGORITHM DEVELOPMENT",
        cardDetailedText:"We began developing an algorithm that would transform NFT technology and use it as actual shares of a real company, allowing our holders to receive stable rewards for the rest of their lives. All while paying for the share with a stable coin.",
       
      
      },{
        title: "May 2022",
        cardTitle: "BRAND IDENTITY + COMPANY VISION",
        cardDetailedText:["We wanted to create a company vision that would help guide the company's future. When the company vision resonates with customers, it reflects and supports the business strategy, differentiates from competitors, and energizes and inspires employees and partners.", 
      "To create our brand identity, we worked on visible elements of a brand such as color, design, and logo that identify and distinguish the brand in the minds of consumers."],
       
      
      },{
        title: "May 2022",
        cardTitle: "PROJECT GREENPAPER",
        cardDetailedText:"We wrote a paper that concisely informs readers about the cannabis and decentralized finance industries, as well as the current problem with the NFT world, and we presented them with our perspective on the matter. We created it to help readers understand the problem by presenting and explaining how our solution would benefit all users, real-world investors, and the cryptocurrency community as a whole.",
       
      
      },{
        title: "Jun 2022",
        cardTitle: "DEVELOPMENT / DESIGN",
        cardDetailedText:"The staking platform DAPP, the minting  DAPP, and our website were all under development by our team after months of research and the completion of our algorithm and greenpaper.",
       
      
      },{
        title: "Aug 2022",
        cardTitle: "WEBSITE LAUNCH",
        cardDetailedText:"Our website is now available to the public.",
       
      
      },
      ,{
        title: "TBA 2022",
        cardTitle: "WE'RE LIVE!",
        cardDetailedText:"Mint is now Live!",
       
      
      },
      ,{
        title: "AFTER LAUNCH",
        cardTitle: "FARM CONSTRUCTION",
        cardDetailedText:"We will begin constructing the farm in Northern Macedonia.",
       
      
      },
      ,{
        title: "6 mos. AFTER LAUNCH",
        cardTitle: "LIVE STREAM PROTOCOL LAUNCH",
        cardDetailedText:"You, as an investor, will get access to the Northern Macedonian farm and plants through the live stream protocol.",
       
      
      },
      ,{
        title: "6 mos. AFTER LAUNCH",
        cardTitle: "FLIGHT GIVEAWAY WINNERS ANNOUCEMENT",
        cardDetailedText:["Five randomly selected investors will receive flights to Northern  Macedonia.", "The investors will tour the WeeDeFi farm and keep a close eye on their shares."],
       
      
      },{
        title: "6 mos. AFTER LAUNCH",
        cardTitle: "FIRST HARVEST + INITIAL REWARDS ISSUE",
        cardDetailedText:["Our first cannabis harvest will be prepared once the farm has been built and six months have passed since the project's inception.", "Then, for the first time, our investors will be able to redeem their USDC rewards."],
       
      
      },
      {
        title: "TBA",
        cardTitle: "DAO CREATION",
        cardDetailedText:"Our goal is to establish a community-led, decentralized autonomous organization without a centralized leadership. It is totally transparent and independent. Members of the DAO will have a voice in all future initiatives and endeavors of the group. The DAO seeks to attract new startups by utilizing the technology we developed after launching WeeDeFi.",
       
      
      },
      {
        title: "12 mos. AFTER LAUNCH",
        cardTitle: "SECOND HARVEST + FIRST ANNUAL REPORT",
        cardDetailedText:["We will be able to harvest the second crop 12 months from the project's inception.", "WeeDeFi's farm in Northern Macedonia will have its first annual report available to the general public"],
       
      
      },

      {
        title: "TBA",
        cardTitle: "DAO PLATFORM AND ECOSYSTEM DEVELOPMENT",
        cardDetailedText:["With the help of our technology, we want to create a platform for our DAO where any member with a good idea may realize it.", "Consider it a starting point for startups or projects that want to begin issuing shares on the blockchain. Something that we proudly innovated."],
       
      
      },
    ];

     


  return (
    
   
    <div className={`${classes.roadmaparea} ${classes.sectionpadding} wow fadeInUp`} id="roadmap" >
      <Zoom>
        <Container>
        
        <Row>
        <Col xs lg md ={12} className= "text-center">
            
              <div className={classes.heading}>
                <h5>HISTORY TIMELINE</h5>
                <div className={classes.space10} />
                <h1><b>Project Roadmap</b></h1>
              </div>
              <div className= {`${classes.space60} d-none d-sm-block`}  />
            
          </Col>
          </Row>
        </Container>
        <Container>

      
      

        <div style={{ width: 'auto', height: '50vh' }}>
        <Chrono items={items} mode="VERTICAL_ALTERNATING" showAllCardsHorizontal  useReadMore cardPositionHorizontal="BOTTOM"  cardHeight={50}  theme={{
    primary: 'black',
    secondary: 'black',
    cardBgColor: 'black',
    cardForeColor: 'white',
    titleColor: 'white',
    titleColorActive: 'white',
  }}  buttonTexts={{
    first: 'Jump to First',
    last: 'Jump to Last',
    next: 'Next',
    previous: 'Previous',
  }} fontSizes={{
    cardSubtitle: '0 rem',
    cardText: '0.8rem',
    cardTitle: '1rem',
    title: '1rem',
  }} >

    </Chrono>
    </div>
   
        
          {/* <div className={`${classes.roadmapcarousel} ${classes.owlcarousel} `} >
            <div className={classes.roadmapitem}>
              <div className={`${classes.singleroadmap} ${classes.roadleft} text-center `} >
                <div className={classes.singleroadmapimg}>
                  <img src="img/roadmap-1.png" alt="" />
                </div>
                <div className={classes.space30} />
                <div className={classes.roadmaptext}>
                  <p>01.03.2017</p>
                  <div className={classes.space10} />
                  <h5>Concept and whitepaper</h5>
                  <p>The recording starts with the patter of a summer squall. Later, a drifting tone like
                    that of a in token.</p>
                </div>
              </div>
            </div>
            <div className= {`${classes.roadmapitem} align-self-center `} >
              <div className= {`${classes.singleroadmap} ${classes.roadright} `}>
                <Row>
                    <Col xs lg md = {5} className="align-self-center">
                
                
                  
                    <div className={classes.singleroadmap}>
                      <img src="img/roadmap-2.png" alt="" />
                    </div>
                
                  </Col>
                  <Col xs lg md = {7}>
                  
                    <div className={classes.roadmaptext}>
                      <p>21.06 .2017</p>
                      <h5>Recruitment of Our team</h5>
                      <p>The recording starts with the patter of a summer squall. Later, a drifting
                        tone like that of a in token.</p>
                    </div>
                  
                  </Col>
                
                </Row>
              </div>
            </div>
            <div className={classes.roadmapitem}>
              <div className= {`${classes.singleroadmap} ${classes.roadleft} text-center `}>
                <div className={classes.singleroadmapimg}>
                  <img src="img/roadmap-4.png" alt="" />
                </div>
                <div className={classes.space30} />
                <div className={classes.roadmaptext}>
                  <p>31.08.2017</p>
                  <div className={classes.space10} />
                  <h5>Core Development</h5>
                  <p>The recording starts with the patter of a summer squall. Later, a drifting tone like
                    that of a in token.</p>
                </div>
              </div>
            </div>
            <div className={`${classes.roadmapitem} align-self-center`}>
              <div className= {`${classes.singleroadmap} ${classes.roadright}`}>
                <Row>
                <Col xs lg md = {5} className="align-self-center">   
                  
                    <div className={classes.singleroadmapimg}>
                      <img src="img/roadmap-5.png" alt="" />
                    
                  </div>
                  </Col>
                  <Col xs lg md = {7}>
                    <div className={classes.roadmaptext}>
                      <p>31.11.2017</p>
                      <h5>Main Development</h5>
                      <p>The recording starts with the patter of a summer squall. Later, a drifting
                        tone like that of a in token.</p>
                    </div>
                  </Col>
                
                </Row>
              </div>
            </div>
            <div className="roadmapitem">
              <div className="singleroadmap text-center roadleft">
                <div className="singleroadmapimg">
                  <img src="img/roadmap-4.png" alt="" />
                </div>
                <div className="space30" />
                <div className="roadmaptext">
                  <p>31.08.2017</p>
                  <div className="space10" />
                  <h5>Core Development</h5>
                  <p>The recording starts with the patter of a summer squall. Later, a drifting tone like
                    that of a in token.</p>
                </div>
              </div>
            </div>
            <div className="roadmapitem align-self-center">
              <div className="singleroadmap roadright">
                <div className="row">
                  <div className="col-5 align-self-center">
                    <div className="singleroadmapimg">
                      <img src="img/roadmap-5.png" alt="" />
                    </div>
                  </div>
                  <div className="col-7">
                    <div className="roadmaptext">
                      <p>31.11.2017</p>
                      <h5>Main Development</h5>
                      <p>The recording starts with the patter of a summer squall. Later, a drifting
                        tone like that of a in token.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
         */}
        </Container>
        </Zoom>
      </div>
     
      
);
}

export default Timelines;
