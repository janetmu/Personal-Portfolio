import React from "react";
import "./contact.css";

import { Container, Row, Col } from "reactstrap";

const Contact = () => {
  return (
    <section id="contacto">
      <Container>
        <Row className="py-5 mt-4 justify-content-evenly">
          <Col lg="12" className="contact_box text-center py-5">
            <h3>Contáctame</h3>
          </Col>
          <Col
            lg="2"
            md="6"
            sm="6"
            className="single_info_box text-center contact_container"
          >
            <a
              href="https://api.whatsapp.com/send?phone=+573015723929&text=Hola%20Janet,%20vi%20tu%20CV%20Dev"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-whatsapp-line contact-icon mt-3 mb-4"></i>
            </a>
            <h5 className="mb-1">Whastapp</h5>
            <p>+57 3015723929</p>
          </Col>
          <Col
            lg="2"
            md="6"
            sm="6"
            className="single_info_box text-center contact_container"
          >
            <i className="ri-cellphone-line contact-icon mt-3 mb-4"></i>
            <h5 className="mb-1">Celular</h5>
            <p>+57 3193990912</p>
          </Col>
          <Col
            lg="2"
            md="6"
            sm="6"
            className="single_info_box text-center contact_container"
          >
            <a
              href="mailto:janetmaru.jm@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="ri-mail-line contact-icon mt-3 mb-4"></i>
            </a>

            <h5 className="mb-1">Email</h5>
            <p>janetmaru.jm@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
