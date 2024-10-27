import { useState } from "react";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Project from "./Project";
import Skills from "./Skills";
import Contact from "./Contact";
import Video from "./Video";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Project />
                <Skills />
                <Contact />
              </>
            }
          />
          <Route path="/video" element={<Video />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
