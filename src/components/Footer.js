import React from "react";
import { Container, Row, Col, Form, Input, Button, Media } from "reactstrap";
import bincaLogo from "../images/Binca-Logo-Light.png";

const Footer = () => {
  return (
    <footer className="text-white py-3" style={{ backgroundColor: "#050e24" }}>
      <Container>
        <Media
          className="navbar-brand animated pulse d-block text-center m-0 py-3"
          href="#"
        >
          <Media object src={bincaLogo} width={50} height={50} alt="Logo" />
        </Media>
        <Row>
          <Col md={4}>
            <h5 className="page-footer-title">OPENING HOURS</h5>
            <p className="mb-0">Open daily from 8am</p>
            <p className="mb-0">Order Timings: Daily from 8am - 12pm</p>
            <p className="mb-0">Delivery Timings: Daily from 8am - 11am</p>
          </Col>
          <Col md={4} className="h-100 border-left-custom">
            <h5 className="page-footer-title mt-3 mt-md-0">LOCATION</h5>
            <address>
              Binaca &amp; Enjoy our Service
              <br />
              24 Akti Kampani St.
              <br />
              846 00, Mykonos, Muskat
              <br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
              <br />
              <abbr title="Email">E:</abbr> info@binca.com
            </address>
          </Col>
          <Col md={4} className="h-100 border-left-custom">
            <h5 className="page-footer-title mt-3 mt-md-0">FOLLOW US</h5>
            <div className="mb-3">
              <a className="footer-social mx-3" href="/" aria-label="facebook">
                <i className="fa fa-facebook" aria-hidden="true" />
              </a>
              <a className="footer-social" href="/" aria-label="tripadvisor">
                <i className="fa fa-twitter mx-2" aria-hidden="true" />
              </a>
              <a className="footer-social" href="/" aria-label="instagram">
                <i className="fa fa-instagram mx-3" aria-hidden="true" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="page-footer-copyright container-fluid text-center">
        © 2018 Grecko Bar &amp; Restaurant. All rights reserved.
        <br />
        Design &amp; Development by{" "}
        <a
          href="https://www.linkedin.com/in/rajashekar-chelimala/"
          target="blank"
        >
          Rajashekar Chelimala
        </a>{" "}
      </div>
    </footer>
  );
};

export default Footer;
