import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer"; // For detecting scroll position
import item from "./assets/doodle_items.png";

function About() {
  // Intersection observer to track when the section is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  // Define animations based on whether the section is in view
  const flipInX = useSpring({
    transform: inView ? "rotateX(0deg)" : "rotateX(90deg)",
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });

  const slideInRight = useSpring({
    transform: inView ? "translateX(0%)" : "translateX(100%)",
    opacity: inView ? 1 : 0,
    config: { duration: 1000 },
  });

  return (
    <>
      <div className="about">
        <div className="container py-5" id="about__section">
          <div className="row align-items-center" ref={ref}>
            {/* Responsive column for image with flip animation */}
            <div className="col-md-6 col-12 text-center">
              <animated.img
                src={item}
                style={flipInX}
                className="img-fluid"
                width={350}
                alt="Doodle items"
              />
            </div>

            {/* Responsive column for text with slide-in animation */}
            <div className="col-md-6 col-12 align-self-center mt-4 mt-md-0">
              <animated.h2 style={slideInRight} className="text-dark">
                About <span>Me</span>
              </animated.h2>
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
