import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./About.module.css";
import WOW from "wowjs";
import "animate.css/animate.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Fade from 'react-reveal/Fade';
import config from 'react-reveal/globals';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';



function About() {

  const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = [
  <div className={classes.item} data-value="1">
  <h4 className={classes.singlefaqh4}>Mother Room</h4>
  <p>A room dedicated for the mother plants</p>
<br />
</div>,

<div className={classes.item} data-value="1">
<h4 className={classes.singlefaqh4}>Nursery Room</h4>
<p>Greenhouse areas for seedlings</p>
<br />
</div>,

<div className={classes.item} data-value="1">
<h4 className={classes.singlefaqh4}>Drying Room</h4>
<p>Integral part of cannabis production, and necessary for its  drying process.</p>
<br />
</div>,

<div className={classes.item} data-value="1">
<h4 className={classes.singlefaqh4}>Safe Room</h4>
<p>Integral part of cannabis production, and necessary for its  drying process.</p>
<br />
</div>,

<div className={classes.item} data-value="1">
<h4 className={classes.singlefaqh4}>Irrigation Room</h4>
<p>Integral part of cannabis production, and necessary for its  drying process.</p>
<br />
</div>,

<div className={classes.item} data-value="1">
<h4 className={classes.singlefaqh4}>Vegetative Room</h4>
<p>Integral part of cannabis production, and necessary for its  drying process.</p>
<br />
</div>,

<div className={classes.item} data-value="1">
<h4 className={classes.singlefaqh4}>Electric Room</h4>
<p>Integral part of cannabis production, and necessary for its  drying process.</p>
<br />
</div>,

<div className={classes.item} data-value="1">
<h4 className={classes.singlefaqh4}>Staff Room</h4>
<p>Integral part of cannabis production, and necessary for its  drying process.</p>
<br />
</div>,

<div className={classes.item} data-value="1">
<h4 className={classes.singlefaqh4}>Nutrients and Tools Room</h4>
<p>Integral part of cannabis production, and necessary for its  drying process.</p>
<br />
</div>,

<div className={classes.item} data-value="1">
<h4 className={classes.singlefaqh4}>Offices</h4>
<p>Integral part of cannabis production, and necessary for its  drying process.</p>
<br />
</div>,
    
    

];

  config({ ssrFadeout: true });

    const particlesInit = async (main) => {
        console.log(main);
    
        // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
        // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
        // starting from v2 you can add only the features you need reducing the bundle size
        await loadFull(main);
      };
    
      const particlesLoaded = (container) => {
        console.log(container);
      };
  return (
    
    <Fade bottom>
    <div className={`${classes.welcomeArea} wow fadeInUp`} id="about">
      
      <Container>
      <Row>
        <Col xs={12} md ={12} className={`${classes.heading} wow fadeInLeft text-center`}>
          <Fade left>
            <h5>ABOUT WEEDEFI</h5>
            </Fade>
            </Col>
        </Row>
        <Row>
          <Col xs={12} md={6} className="self-center">
            <Fade Left>
            <div className={`${classes.welcomeRight} wow fadeInLeft`}>
              <div className={classes.welcomeText}>
                <h1 >
                Introducing a real-world business model to the
                  <h1 className={classes.animateCharcter}>
                  BLOCKCHAIN
                  </h1>
                </h1>
                <h4>backed by "real world" economics and a cannabis farm. Holding a contract with us entitles you to:</h4>
                
                           
                           <li>USDC-based 100% reliable staking rewards.</li><br />
                            <li>Fixed annual returns of 25% regardless of market conditions.</li>
                            <br />
                            <li>An emerging ecosystem that we're attempting to create.</li><br />
                            <li>A community of knowledgeable investors, entrepreneurs, and businesspeople.</li>
                         
              </div>
             
            </div>
            </Fade>
          </Col>
          <Col xs={12} md={6} className="wow fadeInUp">
            <Fade bottom>
            <div className="welcome-img">
              <img src="img/farm.png" alt="" />
            </div>
            </Fade>
          </Col>
        </Row>

        
      </Container>
      
    </div>
    <div className={classes.space60}></div>
    </Fade>
);
}

export default About;
