import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import ecommerce from "../../Assets/Projects/ecommerce1.png";
import muslimway from "../../Assets/Projects/muslimway.png";
import lessonplanner from "../../Assets/Projects/lesson.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ecommerce}
              isBlog={false}
              title="Af Store"
              description="AfStore.com is a comprehensive e-commerce platform that offers a wide range of products, including electronics, fashion, home goods, and more. It provides users with a seamless shopping experience, featuring user-friendly navigation, secure payment options, and efficient order processing. With its commitment to quality and customer satisfaction, AfStore.com stands out as a reliable choice in the competitive e-commerce landscape."
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={muslimway}
              isBlog={false}
              title="The Muslim Way"
              description="The Muslim Way is a comprehensive online platform that serves as a one-stop destination for all things related to Islam. It offers a wide range of resources, including Prayers time, Quran, Hadith and Qibla Direction, aimed at educating and engaging users about Islamic teachings, culture, and practices. The platform emphasizes inclusivity and accessibility, making it a valuable resource for both Muslims and those interested in learning more about the faith."
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lessonplanner}
              isBlog={false}
              title="Lesson Planner GPT"
              description="Lesson Planner GPT is an innovative web application designed to assist educators in creating effective lesson plans. By leveraging the power of AI, it generates tailored lesson plans based on user inputs, ensuring that teachers can easily adapt their teaching strategies to meet the needs of their students. The platform's user-friendly interface and customizable features make it an invaluable tool for educators seeking to enhance their teaching methods."
              demoLink="https://yourpeak-ai-lessons-45879e5fb93e.herokuapp.com/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
