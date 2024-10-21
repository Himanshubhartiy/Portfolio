import React from "react";
import { useSpring, animated } from "@react-spring/web";
import { useInView } from "react-intersection-observer"; // For detecting scroll position
import doodle from "./assets/doodles.png";

function Home() {
  // Intersection observer to track when the section is in view
  const [ref, inView] = useInView({
    triggerOnce: true, // Trigger only once when it comes into view
    threshold: 0.1, // Trigger when 10% of the element is in view
  });

  // Spring animations for text and image with condition based on inView
  const slideInLeft = useSpring({
    transform: inView ? "translateX(0%)" : "translateX(-100%)",
    config: { duration: 800 },
  });

  const slideInUp = useSpring({
    transform: inView ? "translateY(0%)" : "translateY(100%)",
    config: { duration: 1000, delay: 900 },
  });

  const slideInUpFast = useSpring({
    transform: inView ? "translateY(0%)" : "translateY(100%)",
    config: { duration: 200, delay: 900 },
  });

  const fadeInImage = useSpring({
    opacity: inView ? 1 : 0,
    config: { duration: 1000, delay: 500 },
  });

  return (
    <>
      <div className="container home" ref={ref}>
        <div className="row align-items-center">
          {/* Use responsive classes for better adaptation */}
          <div className="col-md-8 col-12">
            {/* Animating the heading */}
            <animated.h1 style={slideInLeft} className="pt-4">
              <span>Hi,</span> I AM HIMANSHU <span>BHARTIY</span>
            </animated.h1>
            {/* Animating the subheading */}
            <animated.h3 style={slideInUp} className="mt-3">
              Web Developer
            </animated.h3>
            <hr />
            {/* Another animation for Software Engineer */}
            <animated.h3 style={slideInUpFast}>
              <span>Software Engineer</span>
            </animated.h3>
          </div>
          {/* Adjust image column for different screen sizes */}
          <div className="col-md-4 col-12 position-relative">
            {/* Animating the image */}
            <animated.img
              src={doodle}
              style={fadeInImage}
              className="mt-5 img-fluid"
              alt="Doodle"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
