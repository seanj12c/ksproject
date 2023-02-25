import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Founders from "./components/Founders";
import Contactus from "./components/Contactus";
import Process from "./components/Process";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Process />
      <Founders />
      <Contactus />
    </>
  );
}

export default App;
