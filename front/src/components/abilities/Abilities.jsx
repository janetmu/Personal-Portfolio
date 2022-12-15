

import React from 'react';
import "./abilities.css";

import { Container, Row, Col} from "reactstrap";



const Abilities = () => {
  return (
    <section id="competencias">
      <Container>
        <Row className="align-content-center mt-4 mb-4 py-5">
          <Col lg="12" className="py-5 mt-4 mb-2" >
            <h3 className="ability text-center mt-4 py-3 mt-3 mb-2">Competencias</h3>
          </Col>

          <Col lg="6" md="6" className='mb-4'>
            <div className="abilities-container">
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Autogestión</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Visión estratégica</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Adaptabilidad y flexibilidad</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Orientación al resultado</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Orientación al cliente</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Resolución de problemas</h6>
              </div>
              
            </div>
          </Col>
          <Col lg="6" md="6" className='mb-4' >
            <div className="abilities-container">
              
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Capacidad de decisión</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Honestidad y transparencia</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Compromiso con la organización</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Trabajo en equipo y colaboración</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Creatividad e innovación</h6>
              </div>
              <div className="single_abilities">
                <span className="abilities-icon">
                  <i class="ri-check-line"></i>
                </span>
                <h6>Aprendizaje continuo</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
  
}

export default Abilities