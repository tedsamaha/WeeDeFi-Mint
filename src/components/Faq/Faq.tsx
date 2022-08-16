import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Faq.module.css";
import WOW from "wowjs";
import "animate.css/animate.min.css";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { Chrono } from "react-chrono";
import { Timeline, TimelineEvent } from '@mailtop/horizontal-timeline'
import { FaBug, FaRegCalendarCheck, FaRegFileAlt } from 'react-icons/fa'
import HorizontalTimeline from 'react-horizontal-timeline';
import Fade from 'react-reveal/Fade';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


function Faq() {

    const responsive = {
        0: { items: 1 },
        568: { items: 2 },
        1024: { items: 3 },
    };
    
    const items = [
        <div className={classes.item} data-value="1"><h4 className={classes.singlefaqh4}>What are contracts?
        </h4><p>Contracts, as we refer to our NFTs, grant the holder a portion of the farm's income at each harvest.</p>
        <p>We believe that the innovation underlying our contracts is the true essence of what NFTs are meant to be. A legitimate contract between two entities with purpose and real-world usage, not art or collections.</p>
        </div>,
        <div className={classes.item} data-value="1"><h4 className={classes.singlefaqh4}>What can I do with my contract?</h4>
        <p>Your contract represents your share in the  WeeDeFi Farm in North Macedonia. With our staking mechanism, you can stake your contract to receive yearly stable returns of 25%.</p>
        </div>,
        <div className={classes.item} data-value="1"><h4 className={classes.singlefaqh4}>How many contracts are there?</h4>
        <p>4,200 contracts are available in a constrained quantity.</p></div>,
        <div className={classes.item} data-value="1"><h4 className={classes.singlefaqh4}>How are the rewards stable?</h4>
        <p>No matter how the crypto market is doing, your staking rewards will always be stable. As our staking rewards coin, we are employing USD-C, a digital stablecoin that was pegged to the United States dollar. The reliability of your benefits is ensured by this as well as the capability of our contracts to be minted in USD-C.</p></div>,

    ];

    return (
        <div className= {`${classes.faqarea} wow fadeInUp`} id="faq">
            <Fade bottom>
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <div className="heading">
                <h5>FAQ</h5>
                <div className={classes.space10} />
                <h1><b>Frequently Asked Questions</b> </h1>
              </div>
              <div className={classes.space60} />
            </div>
          </div>
      
       

    
        </div>
        <AliceCarousel
        autoHeight  
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="default"
        
    
    />
      
        </Fade>
      </div>

    )
}

export default Faq;