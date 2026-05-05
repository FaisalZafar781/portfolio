import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

const experiences = [
  {
    company: "Stack Pinnacle",
    period: "Feb 2025 – Present",
    role: "Software Engineer",
    tech: "Flutter, Angular, Python, AWS, Node.js, Flask",
    points: [
      "Contributed to 4+ production-grade projects across mobility, logistics, bioinformatics, and cloud automation in cross-functional agile teams with Git feature-branch workflows, code reviews, and CI pipelines.",
      "Built SwyftBooking — a multi-module booking platform (rideshare, freight, travel, accommodations) with responsive Flutter UIs, multi-role booking flows, real-time tracking via Google Maps and WebSocket, improving navigation responsiveness by 30%.",
      "Led automation for CIC – Company in Clouds: engineered Python workflows to extract, transform, and map complex schemas from Excel and PDF sources into standardised Excel outputs packaged as ZIP files — cutting manual processing time by 40%.",
      "Hardened Legionella Web (Flask bioinformatics platform) with CSRF protection, SQL injection mitigation via ORM/parameterised queries, Flask-Talisman security headers, secure session cookies, rate limiting, and input validation — reducing vulnerability surface by 40%.",
      "Integrated Sentry and OpenTelemetry APM with Prometheus metrics (request latency, HTTP error counters, business logic metrics); configured /health endpoint with DB and Azure AD checks — improving observability by 35%.",
      "Established structured JSON logging with environment-driven log levels, data access logging, and compliance logging, migrating from file-based to centralised logging architecture.",
      "Automated local environment setup via Makefile workflows; managed Trivy-driven container vulnerability fixes and GitHub-driven dependency updates, maintaining zero critical CVEs.",
    ],
  },
  {
    company: "Techup-24",
    period: "Nov 2024 – Jan 2025",
    role: "Flutter Developer",
    tech: "Flutter, Firebase, Google Maps",
    points: [
      "Built Brodgram — a sports event management app supporting event hosting, participation, and ticketing with real-time sync, reaching production deployment within 2 months.",
      "Integrated Google Maps for event location rendering and Firebase Realtime Database for instant cross-device updates, reducing data latency by 25%.",
      "Adopted Provider-based state management and delivered user profile and settings modules on schedule.",
    ],
  },
];

function Experience() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Work <strong className="purple">Experience</strong>
        </h1>
        <p style={{ color: "white" }}>
          My professional journey so far.
        </p>
        {experiences.map((exp, idx) => (
          <Row key={idx} style={{ justifyContent: "center", paddingBottom: "20px" }}>
            <Col md={10}>
              <div className="experience-card">
                <div className="experience-header">
                  <div>
                    <h3 className="purple">{exp.company}</h3>
                    <h5 style={{ color: "white", marginBottom: "4px" }}>{exp.role}</h5>
                    <p style={{ color: "rgba(255,255,255,0.55)", fontSize: "0.9em", fontStyle: "italic", marginBottom: 0 }}>
                      {exp.tech}
                    </p>
                  </div>
                  <div className="experience-period">{exp.period}</div>
                </div>
                <ul className="experience-points">
                  {exp.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
        ))}
      </Container>
    </Container>
  );
}

export default Experience;
