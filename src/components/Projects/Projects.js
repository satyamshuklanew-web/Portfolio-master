import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import artsumz from "../../Assets/Projects/artsumz.png";
import weather from "../../Assets/Projects/weather.png";
import ems from "../../Assets/Projects/ems.png";
import split from "../../Assets/Projects/split.png";
import blinkit from "../../Assets/Projects/blinkit.png";
import bitsOfCode from "../../Assets/Projects/blog.png";
import assetsStudio from "../../Assets/Projects/asset-studio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects pulled from my GitHub work on{" "}
          <strong className="purple">Satyam070</strong>.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={split}
              imageVariant="balanced"
              title="ExpenseTracker FE"
              description="Frontend expense tracking application focused on managing shared expenses and user-friendly budgeting flows, with direct access to the GitHub source and Android APK download."
              ghLink="https://github.com/satyamshuklanew-web/ExpenseTracker-FE"
              demoLink="https://github.com/satyamshuklanew-web/Splitexpense-App/releases/download/v1.0.0/application-23b05577-190d-45f2-9fe7-45c1a74b717f.apk"
              demoText="Download"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Ramai"
              description="Ramai is an AI-powered healthcare mobile application that helps streamline patient care. Built using React Native (Expo), FastAPI, and OpenAI, it focuses on delivering user-friendly healthcare experience."
              demoLink="https://play.google.com/store/apps/details?id=com.ramai2025.omvad&hl=en_IN"
              demoText="Download"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={assetsStudio}
              isBlog={false}
              title="Assets Studio"
              description="An asset-focused web workspace for preparing Android app assets, including launcher icons, splash assets, adaptive layers, feature graphics, and WebP outputs in a client-side toolset."
              ghLink="https://github.com/satyamshuklanew-web/adaptive-icon-website"
              demoLink="https://assetsstudio.netlify.app/"
              demoText="Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ems}
              isBlog={false}
              title="EMS FullStack"
              description="A full-stack employee management system project covering core CRUD workflows and structured end-to-end application development."
              ghLink="https://github.com/Satyam070/EMS-FullStack-SatyamShukla"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={artsumz}
              isBlog={false}
              title="Article Summariser"
              description="A web application focused on summarizing article-heavy pages for faster reading and better understanding through a cleaner content consumption flow."
              ghLink="https://github.com/Satyam070/ArticleSummariser"
              demoLink="https://article-summariser-weld.vercel.app/login"
              demoText="Demo"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blinkit}
              isBlog={false}
              title="Blinkit UI"
              description="A modern Flutter UI project built to recreate a scalable, responsive grocery app experience with a strong focus on clean mobile interface design."
              ghLink="https://github.com/Satyam070/Blinkit-UI"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="A weather application focused on presenting forecast information in a clean and accessible interface with straightforward user interactions."
              ghLink="https://github.com/Satyam070/weather_app"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
