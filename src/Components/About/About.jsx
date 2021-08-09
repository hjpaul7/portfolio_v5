import React from "react";

const About = () => {
  return (
    <div className="intro">
      <h3 className="display-4 mb-3 mt-4">About Me</h3>
      <hr />
      <h6 className="display-6 mb-3">
        JS | Typscript | React | HTML5 | CSS3 | C#
      </h6>
      <div className="icon-row mb-4">
        <div>
          <i
            className="devicon-javascript-plain icon-spacing"
            style={{ marginRight: "-2px" }}
          ></i>
        </div>
        <div>
          <i
            className="devicon-typescript-plain icon-spacing"
            style={{ marginRight: "5px" }}
          ></i>
        </div>
        <div>
          <i className="devicon-react-original icon-spacing"></i>
        </div>
        <div>
          <i className="devicon-html5-plain icon-spacing"></i>
        </div>
        <div>
          <i
            className="devicon-css3-plain icon-spacing"
            style={{ marginRight: "-7px" }}
          ></i>
        </div>
        <div>
          <i className="devicon-csharp-plain icon-spacing"></i>
        </div>
      </div>
      <p className="intro-text">
        I'm a Web Developer graduated from Eleven Fifty Academy in Indianapolis.
        I have a lot of ideas to push out and a passion for developing web apps
        that benefit the greater good and improve resources for the Indianapolis
        community. A few examples of projects I've worked on are Affordable
        Housing in Indiana and a revamp of the Indianapolis Narcotics Anonymous
        web page. The Affordable Housing Indiana project is a resource to
        provide find Section 8 and Section 42 in Indiana, and the Indianapolis
        Narcotics Anonymous project is to search, and find information about
        local meetings in Indianapolis.
      </p>
      <br />
      <p className="intro-text">
        I also enjoy building projects that help Eleven Fifty Academy. Current
        projects are listed below!
      </p>
      <br />
      <p className="intro-text">
        I'm looking forward to expanding my network and sending my resume out,
        which is downloadable below along with my LinkedIn and Github. Give me a
        visit, I always appreciate opinions on my work on GitHub. Let's
        collaborate?
      </p>
      <a
        href="https://www.linkedin.com/in/hustin-jeffers-3270571a8/"
        target="_blank"
        className="card-link"
        style={{
          fontSize: "14px",
          color: "lightcoral",
          textDecoration: "none",
        }}
      >
        LinkedIn
      </a>
      <a
        href="files/Hustin-Jeffers.pdf"
        target="_blank"
        className="card-link"
        style={{
          fontSize: "14px",
          color: "lightcoral",
          textDecoration: "none",
        }}
      >
        Resume
      </a>
    </div>
  );
};

export default About;
