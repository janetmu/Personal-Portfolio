import React from "react";
import "./skills.css";

import { Container, Row, Col } from "reactstrap";

const Skills = () => {
  return (
    <section id="conocimientos">
      <Container>
        <Row className="py-2 justify-content-evenly">
          <Col lg="12" className="mt-4 mb-4 py-4 skills_container"></Col>
          <h3 className="text-center mb-3 py-5">Conocimientos</h3>

          <Col lg="2" md="6" sm="6">
            <h4 className="text-center mb-4">Lenguajes</h4>
            <div className="skills-container">
              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg"
                    alt="javascript"
                    width="23"
                    height="23"
                  />
                </span>
                <h6 className="mt-4">JavaScript</h6>
              </div>
              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-4">Java</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-4">Python</h6>
              </div>
            </div>
          </Col>

          <Col lg="2" md="6" sm="6">
            <h4 className="text-center mb-4">Front-End</h4>
            <div className="skills-container">
              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-4">Html</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-4">Css</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/bootstrap/bootstrap-plain-wordmark.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-4">Bootstrap</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/react/react-original-wordmark.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-4">ReactJS</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://www.vectorlogo.zone/logos/git-scm/git-scm-icon.svg"
                    alt="javascript"
                    width="25"
                    height="25"
                  />
                </span>
                <h6 className="mt-4">Git</h6>
              </div>
            </div>
          </Col>

          <Col lg="2" md="6" sm="6">
            <h4 className="text-center mb-4">Back-End</h4>
            <div className="skills-container">
              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-4">Node.js</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <h6 className="logo_express mt-3">express</h6>
                </span>
                <h6 className="mt-2">Express.js</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-3">MongoDB</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://www.vectorlogo.zone/logos/springio/springio-icon.svg"
                    alt="javascript"
                    width="23"
                    height="23"
                  />
                </span>
                <h6 className="mt-3">SpringBoot</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-3">MySQL</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://raw.githubusercontent.com/devicons/devicon/master/icons/postgresql/postgresql-original-wordmark.svg"
                    alt="javascript"
                    width="30"
                    height="30"
                  />
                </span>
                <h6 className="mt-3">Postgres</h6>
              </div>

              <div className="single_skills">
                <span className="skills_img">
                  <img
                    src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
                    alt="javascript"
                    width="22"
                    height="22"
                  />
                </span>
                <h6 className="mt-3">Postman</h6>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
