import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import magicMouse from "magicmouse.js";
import About from "./components/About";
import Work from "./components/Work";
import Cv from "./components/Cv";


function App() {
   const [activeSection, setActiveSection] = useState(null);



   useEffect(() => {
    magicMouse(); // Initialise MagicMouse.js ici
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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam rem illo voluptates odit, hic voluptate necessitatibus asperiores, ea dicta consectetur veniam tenetur, esse placeat! Quidem vero obcaecati tenetur amet? Consectetur.
        Reprehenderit quidem ipsa qui, totam obcaecati sit ipsum expedita, quas nulla nisi veritatis corporis impedit? Dicta commodi quis sint ut accusantium dolor temporibus. Eum culpa dolor delectus placeat nisi enim.
        Quam illo soluta fugit veniam quos dolore nam deleniti illum exercitationem necessitatibus earum unde saepe corrupti dolores sed odit, recusandae voluptas eveniet placeat labore voluptatum eos? Accusamus quis facilis quibusdam?
        Eligendi aliquam illum atque suscipit consectetur? Et necessitatibus in accusantium amet veritatis unde quibusdam laudantium repellendus, cumque, ab, vero porro iure est adipisci non nobis rerum tempora provident aut doloribus.
        Omnis, dolore? Ullam explicabo deleniti libero qui, odio necessitatibus quibusdam illo eos quam. Aliquam, possimus? Est accusantium repudiandae nulla id, consequatur nesciunt esse quidem error dicta neque, ducimus recusandae assumenda.
        Nihil saepe vero fugiat earum dicta veritatis similique magnam sit, suscipit quam tempora fuga a minus, magni ullam quis quo possimus, nobis asperiores? Dignissimos iusto quidem ea possimus ad harum.
        Autem ab delectus fugit aperiam quia fugiat itaque ratione nemo accusamus consequuntur fuga sapiente beatae, ut inventore quidem dignissimos reprehenderit in. Eveniet quibusdam, obcaecati dolorem quisquam omnis libero excepturi repudiandae!
        Blanditiis hic asperiores totam. Iusto fuga, sequi reiciendis dolores minus ipsa recusandae vitae iste fugit consequuntur distinctio nobis nesciunt totam qui aut incidunt. Ex aliquam, sunt sapiente aspernatur blanditiis nobis.
        Dicta vitae illum ipsam magni aut facilis! Delectus quo molestias quae possimus nulla tempore veritatis quidem aspernatur amet quod. Dicta neque repudiandae hic incidunt eos aliquam consequatur fuga odio officia.
        Nihil autem officiis, laboriosam perferendis dolorem mollitia eaque, dolor vero reiciendis excepturi saepe eius illum deserunt sed beatae recusandae fuga expedita explicabo officia! Fugiat accusantium voluptatem ratione praesentium, sed esse!
    </main>
    </div>
  );
}

export default App;
