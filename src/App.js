import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Tech from "./pages/Tech/Tech";
import Projects from "./pages/Projects/Projects";

const App = () => {
  return (
    <>
      <Layout />
     <div className="container">
     <About />
     <Tech />
     <Projects />
     </div>
    </>
  );
};

export default App;
