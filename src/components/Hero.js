import avatar from "../asset/img/avatar.png"

const Hero = () => {



    return (
        
        <section className="hero" id="home">
            <div className="test"></div>






            <div className="container">
            
                
                <div className="hero-img">
                    <img src={avatar} alt="profile"/>
                </div>
                <div className="hero-content">


                

 
                    <h2>
                        Bonjour je suis Alexis 
                    </h2>
                    <span > j'aime traduire les problèmes et les idées complexes en expériences numériques agréables et mémorables.</span>
                </div>
            </div>
            
        </section>


    );
};

export default Hero;