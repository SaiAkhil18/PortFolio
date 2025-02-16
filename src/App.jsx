import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Companies from "./components/Companies/Companies";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Experience from "./components/Experience/Experience";
import Projects from "./components/Projects/Projects";
import Education from "./components/Experience/Education";

const App = () => {
  return (
    <div className="">
      <Navbar />
      <Hero />
      <Companies/>
      <Experience/>
      <Skills/>
      <Education/>
      <Projects/>
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
