import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Tech from "./pages/Tech/Tech";
import Projects from "./pages/Projects/Projects";
import Education from "./pages/Education/Education";
import Work from "./pages/Work/Work";
import Contact from "./pages/Contact/Contact";

const App = () => {
  return (
    <>
      <Layout />
     <div className="container">
     <About />
     <Education />
     <Work />
     <Tech />
     <Projects />
     <Contact />
     </div>
    </>
  );
};

export default App;
