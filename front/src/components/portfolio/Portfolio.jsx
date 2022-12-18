import React from "react";
import "./portfolio.css";

import { Container, Row, Col } from "reactstrap";

import tienda_virtual from "../../assests/images/tienda_virtual.jpeg";
import sistema_de_gestion from "../../assests/images/sistema_de_gestion.jpeg";
import portafolio_personal from "../../assests/images/portafolio_personal.jpeg";

/*const portfolioData = [
  {
    imgUrl: tienda_virtual,
    title: "Tienda Virtual",
    url: "https://github.com/ScrumTech-Agency/PostresLowCarbs",
  },

  {
    imgUrl: sistema_de_gestion,
    title: "Sistema de Gestión de Ingresos y Gastos",
    url: "https://github.com/janetmu/Sistema-de-Gestion-de-Ingresos-y-Gastos",
  },

  {
    imgUrl: portafolio_personal,
    title: "Portafolio Personal",
    url: "https://github.com/janetmu/Personal-Portfolio",
  },
];*/


const Portfolio = () => {
  return (
    <section id="proyectos">
      <Container>
        <Row className="mt-5 py-5 justify-content-evenly">
          <Col lg="12" className="portfolio_top text-center mt-5 py-5">
            <h3 className="mt-4 mb-1 py-3">Proyectos</h3>
          </Col>

          <Col lg="3" md="6" sm="6">
            <div className="work_card">
              <img
                src={tienda_virtual}
                alt="tienda virtual"
                className="work_img"
              />
              <h1 className="work_title mt-4 mb-2">Tienda Virtual</h1>

              <div className="portfolio_item_details">
                <ul className="details_info">
                  <li>
                    Lenguaje: <span> JavaScript</span>
                  </li>
                  <li>
                    Frontend: <span> Html - Css - React</span>
                  </li>
                  <li>
                    Backend: <span> Node - Express - MongoDB</span>
                  </li>
                  <li>
                    Otros: <span> Postman - Git</span>
                  </li>

                  <li>
                    <a
                      href="https://youtu.be/7MG2gOEZmHI?autoplay=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-video-fill work_button-icon"></i>
                      Ver Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="work_card">
              <img
                src={sistema_de_gestion}
                alt="Sistema de Gestión de Ingresos y Gastos"
                className="work_img"
              />
              <h1 className="work_title mt-4 mb-2">
                Sistema de Gestión de Ingresos y Gastos
              </h1>

              <div className="portfolio_item_details">
                <ul className="details_info">
                  <li>
                    Lenguaje: <span> Java</span>
                  </li>
                  <li>
                    Frontend: <span> Html - Bootstrap</span>
                  </li>
                  <li>
                    Backend: <span> Spring Boot - Postgres</span>
                  </li>
                  <li>
                    Otros: <span> Postman - Git </span>
                  </li>
                  <li>
                    <a
                      href="https://youtu.be/n4saBrxfiOE?autoplay=1"
                      target="_blank"
                      rel="noreferrer"
                    >
                      <i className="ri-video-fill work_button-icon"></i>
                      Ver Demo
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col lg="3" md="6" sm="6">
            <div className="work_card">
              <img
                src={portafolio_personal}
                alt="portafolio"
                className="work_img"
              />
              <h1 className="work_title mt-4 mb-2">Portafolio Personal</h1>

              <div className="portfolio_item_details">
                <ul className="details_info mb-4">
                  <li>
                    Lenguaje: <span> JavaScript</span>
                  </li>
                  <li>
                    Frontend: <span> Html - Css - React</span>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
