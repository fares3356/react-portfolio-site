import React from "react";
import Project from "./Project";

function Portfolio() {
  const projects = [
    {
      name: "Get There",
      description:
        "GetThere™ is an application that acts as a facilitator to help you plan your travels quickly and effectively. It is Trivago-like, in the sense that it helps users sort through various options and steps all on one site, instead of making the user do all that research on their own.",
      image: "get-there.png",
      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com/codeproject11/Get-There",
      deployed: "https://codeproject11.github.io/Get-There/",
    },
    {
      name: "Lazy Plant Caretaker: Indoor Plant Care Guide",
      description:
        "Do you want to spice up your workspace? Add a little green? But are you afraid you dont know how to take care of some of these plants? Well look no further. The Lazy Plant Caretaker is your one stop solution to find plants that YOU can take care of.",
      image: "lazy-plant.png",
      technologies: [
        "HTML/CSS",
        "JavaScript",
        "Node.js",
        "Handlebars.js",
        "Express & Sequelize",
        "Heroku",
      ],
      github: "https://github.com/project02group12/lazy-plant-caretaker",
      deployed: "https://lazy-plant-caretaker.herokuapp.com/",
    },
    {
      name: "Weather Dashboard",
      description:
        "A weather dashboard that shows current weather and five-day weather forecast for any city.",
      image: "weather-dashboard-image.png",
      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com/fares3356/server-side-weather-app",
      deployed: "https://fares3356.github.io/server-side-weather-app/",
    },
    {
      name: "Password Generator",
      description:
        "This is an application that allows you to generate a password from 8 to 128 characters based on criteria you select.",
      image: "password-generator-image.png",
      technologies: ["HTML/CSS", "JavaScript"],
      github: "https://github.com/fares3356/password-generator-",
      deployed: "https://fares3356.github.io/password-generator-/",
    },
    {
      name: "Note Taker",
      description:
        "This application allows the user to enter notes and as they save, they appear in the sidebar on the left. Notes can be deleted by clicking the trash can next to the corresponding note.",
      image: "note-taker-image.png",
      technologies: ["HTML/CSS", "JavaScript", "Express.js"],
      github: "https://github.com/fares3356/Expressjs-Note-Taker",
      deployed: "https://fa-note-taker.herokuapp.com/",
    },
  ];

  return (
    <section>
      <div className="center">
        <h1 className="page-header">My Portfolio</h1>
      </div>
      <div>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[0]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[1]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[2]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[3]}></Project>
          </li>
        </ul>
        <ul className="flex-row mobile-row">
          <li className="padding">
            <Project projects={projects[4]}></Project>
          </li>
          <li className="padding">
            <Project projects={projects[5]}></Project>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;
