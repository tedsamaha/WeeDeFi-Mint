import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Team.module.css";
import WOW from "wowjs";
import "animate.css/animate.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Chrono } from "react-chrono";
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import HorizontalTimeline from 'react-horizontal-timeline';
import Slide from 'react-reveal/Slide';


function Team() {

    return (

    
      
        <div  className={classes.teambg}>
        {/*team area start*/}
        <div style={{"content":"\"\"","background":"url(/src/bg.png)", "backgroundSize":"fill"}} className={`${classes.teamarea} ${classes.sectionpadding} wow fadeInUp`}  id="team">
            <Container>
            <Slide bottom>
          <Row>
          <Col xs md lg ={12} className="text-center">
            
              
                <div className={classes.heading}>
                  <h5>CORE TEAM</h5>
                  <div className={classes.space10} />
                  <h1>Meet the masterminds</h1>
                </div>
                <div className={classes.space60} />
              
              </Col>
            
            </Row>
            <div className="container-fluid px-5 py-5">
       
        <div className="row justify-content-center">
          <div className="col-xl-3 col-md-6 col-12 mb-4">
            <div className={`${classes.card} text-center rounded-0 border-0`} id="card1">
              <div className="hex-img mt-5 mb-4">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="img1" patternUnits="userSpaceOnUse" width={100} height={100}>
                      <image xlinkHref="img/labib.png" x={-25} width={150} height={100} />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img1)" />
                </svg>
              </div>
              <h2 className="card-name">Labib</h2>
              {/* <p className="position">Co-Founder</p> */}
              
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12 mb-4">
            <div className={`${classes.card} text-center rounded-0 border-0`} id="card2">
              <div className="hex-img mt-5 mb-4">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="img2" patternUnits="userSpaceOnUse" width={100} height={100}>
                      <image xlinkHref="img/este.png" x={-25} width={150} height={100} />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img2)" />
                </svg>
              </div>
              <h2 className="card-name">Jad</h2>
              {/* <p className="position">Co-Founder </p> */}
              
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12 mb-4">
            <div className={`${classes.card} text-center rounded-0 border-0`} id="card3">
              <div className="hex-img mt-5 mb-4">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="img3" patternUnits="userSpaceOnUse" width={100} height={100}>
                      <image xlinkHref="img/ted.png" x={-25} width={150} height={100} />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img3)" />
                </svg>
              </div>
              <h2 className="card-name">Ted</h2>
              {/* <p className="position">CTO</p> */}
              
            </div>
          </div>
          <div className="col-xl-3 col-md-6 col-12 mb-4">
            <div className={`${classes.card} text-center rounded-0 border-0`} id="card4">
              <div className="hex-img mt-5 mb-4">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="img4" patternUnits="userSpaceOnUse" width={100} height={100}>
                      <image xlinkHref="img/aline.png" x={-25} width={150} height={100} />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img4)" />
                </svg>
              </div>
              <h2 className="card-name">Aline</h2>
              {/* <p className="position">Creative Art Director</p> */}
              
            </div>
          </div>
          {/* <div className="col-xl-3 col-md-6 col-12 mb-4">
            <div className={`${classes.card} text-center rounded-0 border-0`} id="card4">
              <div className="hex-img mt-5 mb-4">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="img4" patternUnits="userSpaceOnUse" width={100} height={100}>
                      <image xlinkHref="img/superman-4.jpg" x={-25} width={150} height={100} />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img4)" />
                </svg>
              </div>
              <h2 className="card-name">John Hary</h2>
              <p className="position">Founder &amp; CEO</p>
              
            </div>
          </div>
           <div className="col-xl-3 col-md-6 col-12 mb-4">
            <div className={`${classes.card} text-center rounded-0 border-0`} id="card4">
              <div className="hex-img mt-5 mb-4">
                <svg viewBox="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="img4" patternUnits="userSpaceOnUse" width={100} height={100}>
                      <image xlinkHref="img/superman-4.jpg" x={-25} width={150} height={100} />
                    </pattern>
                  </defs>
                  <polygon points="50 1 95 25 95 75 50 99 5 75 5 25" fill="url(#img4)" />
                </svg>
              </div>
              <h2 className="card-name">John Hary</h2>
              <p className="position">Founder &amp; CEO</p>
              
            </div>
          </div> */}
        </div>
      </div>

      </Slide>
          </Container>
        </div>
       
      </div>
    
        );
    }
    
    export default Team;