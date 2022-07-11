import React from "react";

function About() {
  return (
    <section>
      <div className="center" id="about">
        <h1 className="page-header">Who Is Fares?</h1>
      </div>
      <div className="center">
        <img
          src={require("../../assets/images/about-me.jpg")}
          alt="about-me"
          className="photo"
        />
      </div>
      <div>
        <p>
          I am a Mechanical Engineer graduate who is transitioning into the
          world of software development. I took the jump by enrolling into
          University of Toronto's Full Stack Developer Bootcamp where I learnt
          essential skills such as HTML, CSS, JavaScript, React, SQL, Node and
          more. I am known as an innovative problem solver passionate about
          developing apps, with a focus on creating beautiful front-end design.
          With each project, my aim is to best engage my audience for an
          impactful user experience.
        </p>
      </div>
    </section>
  );
}

export default About;
