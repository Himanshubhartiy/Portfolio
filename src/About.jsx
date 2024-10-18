import React from "react";
import item from "./assets/doodle_items.png";

function About() {
  return (
    <>
      <div className="about">
        <div className="container py-5" id="about__section">
          <div className="row align-items-center">
            {/* Responsive column for image */}
            <div className="col-md-6 col-12 text-center wow animate__animated animate__flipInX">
              <img
                src={item}
                className="img-fluid"
                width={350}
                alt="Doodle items"
              />
            </div>

            {/* Responsive column for text */}
            <div className="col-md-6 col-12 align-self-center mt-4 mt-md-0">
              <h2 className="text-dark wow animate__animated animate__slideInRight">
                About <span>Me</span>
              </h2>
              <p className="mt-3">
                <span className="fs-2">Hi!</span> I'm a software developer with
                a diploma in Computer Science Engineering. I love creating
                websites and web applications that are user-friendly and
                visually appealing. I’ve worked on several projects, including a
                football tournament website, an e-commerce platform for
                Uttarakhand's cultural products, and a tourism site for
                Dehradun. I’m always eager to learn new skills and stay updated
                with the latest technologies. I’m excited about the future and
                look forward to working on innovative projects. Feel free to
                reach out if you'd like to connect!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
