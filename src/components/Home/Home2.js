import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I'm a <strong className="purple">Software Engineer</strong>{" "}
              passionate about building scalable mobile and web applications
              that solve real-world problems. Over time, I've worked across
              different technologies and found my strength in creating
              high-quality, user-focused products.
              <br />
              <br />
              I'm proficient in
              <i>
                <b className="purple">
                  {" "}
                  JavaScript, TypeScript, C++, Python, Node.js, React.js,
                  React Native, Expo, and Spring Boot{" "}
                </b>
              </i>
              and I enjoy working across both frontend and backend development.
              <br />
              <br />
              My key areas of interest include
              <i>
                <b className="purple">
                  {" "}Mobile Application Development, Full-Stack Development,
                  AI-powered Applications, and System Design{" "}
                </b>
              </i>
              .
              <br />
              <br />
              Whenever possible, I love building end-to-end projects using{" "}
              <i>
                <b className="purple">React Native</b>,{" "}
                <b className="purple">Node.js</b>, and modern web technologies
              </i>
              , while continuously exploring new tools and best practices to
              improve performance and developer experience.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
