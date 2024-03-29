import React, { useRef, useEffect } from "react";
import "./hero-section.css";

import { Container, Row, Col } from "reactstrap";

import { init } from "ityped";

import heroImg from "../../assests/images/hero-img.png";

const HeroSection = () => {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      backDelay: 1500,
      showCursor: true,
      strings: [
        "Janet Marulanda Usma",
        "Web Apps Developer",
        "de Medellín, Colombia",
      ],
    });
  }, []);

  return (
    <section className="hero_section align-content-center" id="inicio">
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero_img">
              <img src={heroImg} alt="mi foto" className="w-100" />
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="hero_content mt-4 py-5">
              <span className="mb-5 mt-4">
                <h3 className="mb-5">¡Hola... Bienvenido a mi espacio!</h3>
              </span>

              <h2 className="hero_title mt-1 mb-4">
                Soy <span ref={textRef}></span>
              </h2>

              <p>
                Soy una profesional muy competente, orientada al logro de
                resultados y al servicio al cliente. Tengo un altísimo nivel de
                compromiso y responsabilidad. Me apasionan los retos, la mejora
                continua y sentir que aporto valor con mis acciones tanto a
                nivel personal como profesional.
              </p>

              <div className="hero_btns d-flex align-items-center gap-4 mt-5">
                <button className="btn1">
                  <a href="./cv_janet_marulanda_usma_dev.pdf" download={""}>
                    <i className="ri-file-download-line"></i>
                    Descargar CV
                  </a>
                </button>
                <button className="btn hire_btn">
                  <a
                    href="https://api.whatsapp.com/send?phone=+573015723929&text=Hola%20Janet,%20vi%20tu%20CV%20Dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="ri-whatsapp-line"></i>
                    Contáctame
                  </a>
                </button>
              </div>
            </div>
          </Col>
          <Col>
            <div className="home_social grid">
              <span className="home_contact">Conectemos</span>
              <div className="home_social">
                <br></br>
                <a
                  href="http://www.linkedin.com/in/janet-marulanda-usma-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-linkedin-fill"></i>
                </a>
                <a
                  href="https://github.com/janetmu"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-github-fill"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=+573015723929&text=Hola%20Janet,%20vi%20tu%20CV%20Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="ri-whatsapp-line"></i>
                </a>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
