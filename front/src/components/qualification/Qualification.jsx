

import React from 'react';
import "./qualification.css";

import { Container, Row, Col} from "reactstrap";

const developmentQualificationData = [
  {
    title: "Front End Dev",
    institution: "ONE - Oracle Next Education ( En curso )",
  },

  {
    title: "Desarrollo de Aplicaciones Web",
    institution: "Universidad de Antioquia ( Noviembre 2022 )",
  },

  {
    title: "Desarrollo de Software",
    institution: "Universidad de Antioquia ( Septiembre 2022 )",
  },

  {
    title: "Programación Básica en Lenguaje Java",
    institution: "Universidad de Antioquia ( Julio 2022 )",
  },

  {
    title: "Fundamentos de Programación en Lenguaje Python",
    institution: "Universidad de Antioquia ( Mayo 2022 )",
  },

  {
    title: "Programa Global de Talento Digital - Transformación Digital",
    institution: "Ruta N - Alibaba Group ( Diciembre 2021 )",
  },

  {
    title: "Especialista en Finanzas, Preparación y Evaluación de Proyectos",
    institution: "Universidad de Antioquia ( Noviembre 2006 )",
  },

  {
    title: "Contaduría",
    institution: "Universidad de Antioquia ( Febrero 2000 )",
  },
];



const Qualification = () => {
  return (
    <section id="formación">
      <Container>
        <Row className="align-content-center mt-4 py-5">
          <Col lg="12" className="mt-4 mb-4">
            <h3 className="text-center py-3 mt-3">Formación</h3>
          </Col>

          <Col lg="6" md="6">
            <h4 className="text-center mb-3">Estudios</h4>
            <div className="studies-container">
              {developmentQualificationData.map((item, index) => (
                <div className="single_studies" key={index}>
                  <span className="studies-icon">
                    <i class="ri-honour-line"></i>
                  </span>
                  <h6>{item.title}</h6>
                  <h5>{item.institution}</h5>
                </div>
              ))}
            </div>
          </Col>

          <Col lg="6" md="6" className="mt-5 py-5">
            <h4 className="text-center mt-5 mb-2 py-3 mt-3 ">
              Certificaciones
            </h4>
            <div className="certifications-container">
              <div className="single_studies">
                <span className="studies-icon">
                  <i class="ri-honour-line"></i>
                </span>
                <h6>Scrum Foundation Profesional Certificate SFPC</h6>
                <h5>Vencimiento Octubre 2024</h5>
              </div>
            </div>

            <h4 className="text-center mb-2 mt-5 py-3">Idiomas</h4>
            <div className="certifications-container">
              <div className="single_studies">
                <span className="studies-icon">
                  <i class="ri-honour-line"></i>
                </span>
                <h6>Inglés</h6>
                <h5>B2: Intermedio Alto</h5>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  
}

export default Qualification