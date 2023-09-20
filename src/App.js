import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import magicMouse from "magicmouse.js";
import About from "./components/About";
import Work from "./components/Work";
import Cv from "./components/Cv";
import Contact from "./components/Contact";
import Footer from "./components/Footer";


function App() {
   const [activeSection, setActiveSection] = useState(null);



   useEffect(() => {
    magicMouse(); //! Initialise MagicMouse.js ici
  }, []); 
  


  const handleScroll = () => {
    const currentPosition = window.scrollY + window.innerHeight / 2;

    const sections = document.querySelectorAll("section[id]");
    let newActiveSection = null;

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionBottom = sectionTop + section.offsetHeight;

      if (currentPosition >= sectionTop && currentPosition <= sectionBottom) {
        newActiveSection = section.id;
      }
    });

    setActiveSection(newActiveSection);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Work />
        <Cv />
        <Contact />
        <Footer />
        
    </main>
    </div>
  );
}

export default App;
