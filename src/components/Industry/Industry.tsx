import React, { useState, PureComponent  } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Industry.module.css";
import WOW from "wowjs";
import "animate.css/animate.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Chrono } from "react-chrono";
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import HorizontalTimeline from 'react-horizontal-timeline';
import Slide from 'react-reveal/Slide';
import Fade from 'react-reveal/Fade';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LabelList, Label, LabelListProps, PieChart, Pie, Sector } from 'recharts';
import Faq from 'react-faq-component';

function Industry() {

    const faq = {
        title: "Frequently Asked Questions about the Global Legal Marijuana Market",
        rows: [
          {
            title: "What is the estimated value of the Global Legal Marijuana Market?",
            content: "The Global Legal Marijuana Market was estimated to be valued at $16.7 Billion in 2022. "
          },
          {
            title: "What is the growth rate of the Global Legal Marijuana Market?",
            content: "The growth rate of the Global Legal Marijuana Market is 25.5%, with an estimated value of $101.9 Billion by 2030."
          },
          {
            title: "What is the forecasted size of the Global Legal Marijuana Market?",
            content: "The Global Legal Marijuana Market is estimated to be worth $101.9 Billion by 2030."
          },
          {
            title: "Who are the key companies in the Global Legal Marijuana Market?",
            content: "Who are the key companies in the Global Legal Marijuana Market?"
          }]
      }
      
      
    const data = [
        {
          name: '2021',
          uv: 13.2,
         
          amt: 102,
        },
        {
          name: '2022',
          uv: 16.57,
        
          amt: 102,
        },
        {
          name: '2023',
          uv: 20.79,
         
          amt: 102,
        },
        {
          name: '2024',
          uv: 26.09,
         
          amt: 102,
        },
        {
          name: '2025',
          uv: 32.75,
          
          amt: 102,
        },
        {
          name: '2026',
          uv: 41.10,
          
          amt: 2500,
        },
        {
          name: '2027',
          uv: 51.57,
          
          amt: 102,
        },
        {
            name: '2028',
            uv: 64.73,
            
            amt: 102,
          },
          {
            name: '2029',
            uv: 81.23,
           
            amt: 102,
          },
          {
            name: '2030',
            uv: 101.95,
            
            amt: 102,
          },
      ];
      
      const pie = [
        { name: 'Medical', value: 80 },
        { name: 'Adult', value: 20 },
        
      ];

      const COLORS = ['#23562B', '#51A059'];

    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);
  return (
    <text x={x} y={y} fill="white" fontSize="1rem" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

    return (

    
      
        <div  className={classes.teambg}>
        {/*team area start*/}
        <div style={{"content":"\"\"","background":"url(/src/bg.png)", "backgroundSize":"fill"}} className={`${classes.teamarea} ${classes.sectionpadding} wow fadeInUp`}  id="industry">
            <Container>
            <Slide bottom>
          <Row>
          <Col xs md lg ={12} className="text-center">
            
              
                <div className={classes.heading}>
                  <h5>THE INDUSTRY</h5>
                 
                </div>
                <div className={classes.space60} />
              
              </Col>
            
            </Row>
            <Row>
       <Col xs={12} lg={12} md={12}>
       <div className={classes.welcomeText}>
                
                  <div className="text-center">
                  <h1 className={classes.animateCharcter}>
                    OVERVIEW
                  </h1>
                  <div className={classes.space20}></div>
                  </div>
                  </div>
       
       </Col>
       <Col xs={12} md={6} className="self-center">
       <h6 className="">The size of the legal marijuana market in the world was estimated at USD 13.2 billion in 2021, and it is anticipated to increase at a CAGR of 25.5% from 2022 to 2030. </h6>
       <br />
       <h6 className="">The main driving forces behind the market's expansion are an increase in the legalization of marijuana for medical and adult-use/recreational purposes as well as a rising demand for these products to treat chronic illnesses.</h6>
       <br />
       <h6 className="">It has been successfully utilized to treat patients with chronic pain, chemotherapy-induced nausea, Parkinson's, Alzheimer's, and other neurological disorders, among other conditions, according to a number of studies that have been conducted. The FDA and other groups have recently begun to embrace marijuana derivatives for the treatment of illnesses where it has shown promise.</h6>
       <div className={classes.space40}></div>
      
       
       
       </Col>

       <Col xs={12} md={6} className="self-center">
       <Fade Left>
         
         <div className={`${classes.welcomeRight} wow fadeInLeft `}>
        <div className="text-center">
        <ResponsiveContainer width="99%" height={300}>
         <BarChart width={150} height={40} data={data}  margin={{
                    top: 5, right: 20, left: 20, bottom: 5,
                }}>
         <XAxis stroke="white" dataKey="name" />
         <YAxis stroke="white" />
          <Bar dataKey="uv" fill="#23562B" label={{ fill: 'white', fontSize: '0.7rem' }}>   </Bar> 
        </BarChart>
      </ResponsiveContainer>
        </div>
      <h5 className="text-center">Global Legal Marijuana Market Size in billions of USD</h5>
         </div>
         </Fade>
       </Col>
       
       <Col xs={12} lg={12}>
       <div className={classes.space60}></div>
       <div className={classes.welcomeText}>
                
                  <div className="text-center">
                  <h1 className={classes.animateCharcter}>
                  APPLICATION INSIGHTS
                  </h1>
                  <div className={classes.space20}></div>
                  </div>
                  </div>
       
 
       <div className={classes.space40}></div>
       </Col>

       <Col xs={12} lg={6}>
      

       <Fade bottom>
         <div className="welcome-img">
            
         <ResponsiveContainer width="100%" height={200}>
         <PieChart width={200} height={200}>
            <Legend/>
          <Pie
            data={pie}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <h5 className="text-center">Global Legal Marijuana Market Share by application</h5>
         </div>
         </Fade>
         <div className={classes.space40}></div>
       </Col>
       <Col xs={12} md={6} className="wow fadeInUp" >
        
       <h6 className="">The size of the legal marijuana market in the world was estimated at USD 13.2 billion in 2021, and it is anticipated to increase at a CAGR of 25.5% from 2022 to 2030.In 2021, the medical segment's revenue share was over 80%. It is anticipated to expand steadily between 2022 and 2030.  </h6>
       <br />
       <h6>The recent legalization and decriminalization of marijuana for medical purposes can be used as justification for the expansion of this market. Due to its widespread availability and low cost, patients in certain geographical areas have been shown to prefer using marijuana for medical purposes.</h6>
      
        
       </Col>
     </Row>
     <Row>
     <Col xs={12} lg={12}>
       <div className={classes.space60}></div>
       <div className={classes.welcomeText}>
                
                  <div className="text-center">
                  <h1 className={classes.animateCharcter}>
                  REPORT &amp; FAQ
                  </h1>
                  <div className={classes.space20}></div>
                  </div>
                  </div>
       
 
       <div className={classes.space40}></div>
       </Col>

       <Col xs={12} lg={6}>
       <Faq style={{padding: '200px'}} data={faq} 
        styles={{
            bgColor: "transparent",
            titleTextColor: "red",
            rowTitleColor: "white",
            rowContentColor: "white",
            arrowColor: "#1CC315",
            rowContentPaddingTop: '10px',
        rowContentPaddingBottom: '10px',
        rowContentPaddingLeft: '50px',
        rowContentPaddingRight: '150px',

        }} 
       />
       
       </Col>
     </Row>

      </Slide>
          </Container>
        </div>
       
      </div>
    
        );
    }
    
    export default Industry;