import React from "react";
import doodle from "./assets/doodles.png";

function Home() {
  return (
    <>
      <div className="container home">
        <div className="row align-items-center">
          {/* Use responsive classes for better adaptation */}
          <div className="col-md-8 col-12">
            <h1 className="pt-4 wow animate__animated animate__slideInLeft">
              <span>Hi,</span> I AM HIMANSHU <span>BHARTIY</span>
            </h1>
            <h3
              className="mt-3 wow animate__animated animate__slideInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.7s"
            >
              Web Developer
            </h3>
            <hr />
            <h3
              className="wow animate__animated animate__slideInUp"
              data-wow-duration="0.8s"
              data-wow-delay="0.1s"
            >
              <span>Software Engineer</span>
            </h3>
          </div>
          {/* Adjust image column for different screen sizes */}
          <div className="col-md-4 col-12 position-relative">
            <img src={doodle} className="mt-5 img-fluid" alt="Doodle" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
