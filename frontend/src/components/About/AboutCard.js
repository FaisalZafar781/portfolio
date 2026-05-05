import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Faisal Zafar </span>
            from <span className="purple"> Islamabad, Pakistan.</span>
            <br />
            I am a <span className="purple">Software Engineer</span> with 2+ years of experience delivering
            cross-platform mobile and web applications across mobility, logistics, bioinformatics,
            and cloud automation domains.
            <br />
            Currently working at <span className="purple">Stack Pinnacle</span>, proficient in
            Flutter, Django, FastAPI, Python, and AWS, with hands-on expertise in security
            hardening, observability, and DevOps pipelines.
            <br />
            I have completed <span className="purple">BCE from NUST</span>.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Video Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Football
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Faisal Zafar</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
