import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Services from "./components/Services";
import Founders from "./components/Founders";
import Contactus from "./components/Contactus";
import Process from "./components/Process";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Services />
      <Process />
      <Founders />
      <Contactus />
      <Footer />
    </>
  );
}

export default App;
