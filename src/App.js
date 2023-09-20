import React, { useState, useEffect } from "react";
import magicMouse from "magicmouse.js";

import Legales from "./pages/Legales";
import NotFound from "./pages/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";



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
			<Router>
				<Routes>
          <Route path="/" element={<Home />} />
					<Route path="*" element={<NotFound />} />
					<Route path="/legale" element={<Legales />} />
				</Routes>
			</Router>
		</div>
  );
}

export default App;
