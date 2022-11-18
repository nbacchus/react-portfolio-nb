import React from "react";
import headshot from "../../assets/about-pics/headshot.JPG";

function About() {
  return (
    <section>
      <h1 id="about">Get to Know Me</h1>
      <img src={headshot} style={{ width: "50%" }} alt="Nadia headshot" />
      <p>
        Hello, I'm Nadia. Currently, I'm enrolled in the University of Miami
        Coding Bootcamp. I am taking the course because I would like to pivot my
        current career path. In college I took a basic coding class that covered
        HTML and CSS but I am excited to further expand my knowledge. My
        background in marketing and specifically graphic design will allow me to
        excel in this class and hopefully obtain a job in the UX/UI field.
      </p>
    </section>
  );
}

export default About;
