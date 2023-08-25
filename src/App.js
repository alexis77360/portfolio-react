import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import { useState, useEffect } from "react";


function App() {

  const [mousePosition, setMousePosition] = useState({ x: null, y: null });

  useEffect(() => {
    document.addEventListener("mousemove", (e) => {
      setMousePosition({ x: e.pageX, y: e.pageY });
    });
  }, []);

  return (
    <div className="App">
      <div
        className="cursor"
        style={{
          left: `${
            mousePosition.x > window.innerWidth - 15
              ? window.innerWidth - 15
              : mousePosition.x
          }px`,
          top: `${
            mousePosition.y > window.innerHeight - 15 
              ? window.innerHeight - 15
              : mousePosition.y
          }px`,

          
        }}
      >
      </div>
      <Navbar />
      <main>
        <Hero />
        


    </main>
    

    </div>
  );
}

export default App;
