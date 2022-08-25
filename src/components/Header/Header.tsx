import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import classes from "./Header.module.css";
import { MenuIcon } from "@heroicons/react/solid";
import Fade from 'react-reveal/Fade';

function Header() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
  const changeHeaderScroll = () => {
    if (window.scrollY >= 80) setScrolled(true);
    else {
      setScrolled(false);
    }
  };

  window.addEventListener("scroll", changeHeaderScroll);

  const handleMobileMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <Fade top>
    <div
      className={`${classes.headerArea} ${classes.headerAbsolate} ${
        scrolled ? classes.skrollableAfter : ""
      } wow fadeInDown`}
      // className="header-area wow fadeInDown header-absolate"
      id="nav" /* data-0="position:fixed;"
        data-top-top="position:fixed;top:0;" data-edge-strategy="set" */
    >
      <Container>
        <Row>
          <Col xs={4} className="d-block d-md-none">
            <div className={classes.mobileMenu}>
              <button onClick={handleMobileMenuOpen}>
                <MenuIcon className="text-white/80 hover:text-white h-7 w-7" />
              </button>
              <div
                className={`${
                  isMobileMenuOpen
                    ? classes.mobileMenuOpen
                    : classes.mobileMenuClosed
                } ${classes.mobileMenuContent}`}
              >
                <ul id="slick-nav">
                  <li>
                    <a className="scroll" href="#home">
                      home
                    </a>
                  </li>

                  <li>
                    <a className="scroll" href="#mint">
                      Mint
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#about">
                      About
                    </a>
                  </li>

                 

                  <li>
                    <a className="scroll" href="#farm">
                    Farm
                    </a>
                  </li>

                  <li>
                    <a className="scroll" href="#industry">
                      Industry
                    </a>
                  </li>

                
                  <li>
                    <a className="scroll" href="#roadmap">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="/docs/index.html" target="_blank">
                      GreenPaper
                    </a>
                  </li>

                  <li>
                    <a className="scroll" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#">
                      Live Stream <div className={classes.blink}></div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col xs={4} lg={2}>
            <div className={classes.logoArea}>
              <a href="#">
                <img src="img/logo.png" alt="" />
              </a>
            </div>
          </Col>
          <Col xs={4} lg={8} className="d-none d-lg-block">
            <div className={`${classes.mainMenu} text-center`}>
              <nav>
                <ul id="slick-nav">
                  <li>
                    <a className="scroll" href="#home">
                      home
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#mint">
                      Mint
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#about">
                      About
                    </a>
                  </li> 
                 

                  <li>
                    <a className="scroll" href="#farm">
                      Farm
                    </a>
                  </li>

                  <li>
                    <a className="scroll" href="#industry">
                      Industry
                    </a>
                  </li>

                
                  <li>
                    <a className="scroll" href="#roadmap">
                      Roadmap
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="#team">
                      Team
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="/docs/index.html" target="_blank">
                      GreenPaper
                    </a>
                  </li>

                  <li>
                    <a className="scroll" href="#faq">
                      FAQ
                    </a>
                  </li>
                  <li>
                    <a className="scroll" href="">
                      Live Stream <div className={classes.blink}></div>
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </Col>
          <Col xs={4} lg={2} className="text-right">
            <a href="#" className={`${classes.lobibtn} ${classes.gradientBtn}`}>
              Launch App
            </a>
          </Col>
        </Row>
      </Container>
    </div>
    </Fade>
  );
}

export default Header;
