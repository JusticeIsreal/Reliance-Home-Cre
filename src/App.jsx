import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Doctors from "./components/FAQs";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";
import Reviews from "./components/Reviews";
import FAQs from "./components/FAQs";

const App = () => {
  return (
    <div style={{ overflow: "hidden" }}>
      <Navbar />

      <main>
        <div id="home">
          <Home />
        </div>

        <div id="about" >
          <About />
        </div>

        <div id="services">
          <Services />
        </div>

        <div id="reviews">
          <Reviews />
        </div>

        <div id="FAQs">
          <FAQs />
        </div>

        <div id="blog">
          <Blogs />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default App;
