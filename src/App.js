import React from "react";
import Layout from "./components/Layout/Layout";
import About from "./pages/About/About";
import Tech from "./pages/Tech/Tech";

const App = () => {
  return (
    <>
      <Layout />
     <div className="container">
     <About />
     <Tech />
     </div>
    </>
  );
};

export default App;
