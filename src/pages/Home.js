import React from 'react';
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import Work from "../components/Work";
import Cv from "../components/Cv";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
    return (
        <div className='app'>
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
};

export default Home;