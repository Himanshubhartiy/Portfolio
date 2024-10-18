import React from "react";
import project6 from "./assets/doodle_items.png";
import project1 from "./assets/project1.png";
import project2 from "./assets/project2.png";
import project3 from "./assets/project3.png";
import project4 from "./assets/project4.png";

function Project() {
  return (
    <>
      <div className="">
        <div className="bg-image project">
          <div className="container" id="project__section">
            <div>
              <h2 className="text-center wow animate__animated animate__zoomIn">
                My <span>Projects</span>
              </h2>
            </div>
            <div className="row mt-5">
              <div
                className="col-lg-6 col-md-12 text-center align-content-center wow animate__animated animate__flipInY"
                data-wow-duration="0.8s"
                data-wow-delay="0.1s"
              >
                <a
                  href="https://grabstar.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project1}
                    alt=""
                    className="project-card img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-6 col-md-12 align-self-center">
                <h3>01</h3>
                <a
                  href="https://grabstar.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light"
                >
                  <h4 className="mt-4">GrabStar</h4>
                </a>
                <p className="mt-4">
                  GrabStar is a project built with modern web development
                  technologies, featuring responsive design and engaging
                  animations. It was developed using <strong>Bootstrap</strong>{" "}
                  for its layout and styling, <strong>JavaScript</strong> for
                  interactive elements, and <strong>Framer Motion</strong> for
                  smooth, dynamic animations. The design was initially created
                  using <strong>Figma</strong> and then brought to life with{" "}
                  <strong>HTML5</strong>, <strong>CSS3</strong>, and{" "}
                  <strong>JavaScript</strong>. The website is hosted on{" "}
                  <strong>Netlify</strong> for fast, reliable performance.
                  Explore the website to see a seamless blend of creativity and
                  functionality in action.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 col-md-12 align-self-center">
                <h3>02</h3>
                <a
                  href="https://ukbazaar.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light"
                >
                  <h4 className="mt-4">Uk-Bazaar</h4>
                </a>
                <p className="mt-4">
                  Uk-Bazaar is an e-commerce platform dedicated to showcasing
                  the rich culture and heritage of Uttarakhand through locally
                  made products. Developed using <strong>ReactJS</strong> for
                  the front-end, <strong>Bootstrap</strong> for responsive
                  design, and hosted on <strong>Netlify</strong>, this website
                  offers an easy-to-navigate experience with a focus on
                  promoting local craftsmanship. The project includes smooth
                  animations, powered by <strong>Framer Motion</strong>, and
                  features such as a shopping cart, product filters, and
                  detailed product views, all while maintaining a modern and
                  user-friendly interface.
                </p>
              </div>
              <div
                className="col-lg-6 col-md-12 text-center align-content-center wow animate__animated animate__flipInY"
                data-wow-duration="0.8s"
                data-wow-delay="0.3s"
              >
                <a
                  href="https://ukbazaar.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project2}
                    alt=""
                    className="project-card img-fluid"
                  />
                </a>
              </div>
            </div>
            <div className="row mt-5">
              <div
                className="col-lg-6 col-md-12 text-center align-content-center wow animate__animated animate__flipInY"
                data-wow-duration="0.8s"
                data-wow-delay="0.5s"
              >
                <a
                  href="https://clashkick.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project3}
                    alt=""
                    className="project-card img-fluid"
                  />
                </a>
              </div>
              <div className="col-lg-6 col-md-12 align-self-center">
                <h3>03</h3>
                <a
                  href="https://clashkick.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light"
                >
                  <h4 className="mt-4">KickClash</h4>
                </a>
                <p className="mt-4">
                  KickClash is a dedicated platform designed for organizing
                  football tournaments and selling tickets. It brings together
                  players, fans, and sponsors to create thrilling football
                  experiences. The site simplifies tournament management for
                  players of all levels and features an easy ticketing system
                  for fans and sponsors. KickClash is built using technologies
                  such as Bootstrap, ReactJS ensuring a seamless user experience
                  across devices.
                </p>
              </div>
            </div>
            <div className="row mt-5">
              <div className="col-lg-6 col-md-12 align-self-center">
                <h3>04</h3>
                <a
                  href="https://kicknet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-decoration-none text-light"
                >
                  <h4 className="mt-4">KickNet</h4>
                </a>
                <p className="mt-4">
                  KickNet is an e-commerce platform specializing in football
                  sports T-shirts, designed to deliver high-quality, stylish
                  apparel for both fans and players. As the sole developer of
                  this project, I am utilizing a range of technologies to ensure
                  a smooth and dynamic user experience. KickNet is built with:
                  <br />
                  <strong>Frontend:</strong> Bootstrap for responsive design and
                  ReactJS for interactive UI elements.
                  <br />
                  <strong>Backend:</strong> Redis for fast, efficient caching,
                  and PHP for robust server-side logic.
                </p>
              </div>
              <div
                className="col-lg-6 col-md-12 text-center align-content-center wow animate__animated animate__flipInY"
                data-wow-duration="0.8s"
                data-wow-delay="0.7s"
              >
                <a
                  href="https://kicknet.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={project4}
                    alt=""
                    className="project-card img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Project;
