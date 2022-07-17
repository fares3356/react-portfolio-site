import React from "react";

function Resume() {
  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Resume</h1>
      </div>
      <div className="bottom-spacing">
        <a href={require("../assets/files/Fares-Akhtar-CV.pdf")} download>
          <h4>Download My Resume</h4>
        </a>
      </div>
      <div>
        <h5>Front-End Skills</h5>
        <ol>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>Bootstrap</li>
          <li>React</li>
        </ol>
        <br></br>
        <h5>Back-End Skills</h5>
        <ol>
          <li>APIs</li>
          <li>NodeJS</li>
          <li>Express</li>
        </ol>
        <br></br>
        <h5>Dev Tool Proficiencies</h5>
        <ol>
          <li>Git</li>
          <li>npm</li>
          <li>Jest</li>
          <li>Webpack</li>
        </ol>
        <br></br>
        <h5>Database Proficiencies</h5>
        <ol>
          <li>MySQL</li>
          <li>Sequelize</li>
          <li>MongoDB</li>
          <li>Mongoose</li>
        </ol>
      </div>
    </section>
  );
}

export default Resume;
