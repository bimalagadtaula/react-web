import React from "react";
import { useNavigate } from "react-router-dom";
import { Animate } from "react-simple-animate";
import './style.scss';

const Home = () => {
  const navigate = useNavigate();

  const handleHireMeClick = () => {
    // Navigate to the contact page
    navigate('/contact');
  };

  return (
    <section id="home">
      <div className="home__text-wrapper">
        <h1 className="boldtxt">Hi, I'm Bimala,
          <br />
          <span className="developertxt">A frontend developer.</span>
        </h1>
      </div>

   
        <div className="home__contact-btn">   <Animate 
        play
        duration={1.5}
        delay={1.5}
        start={{
          transform: 'translateY(550px)',
          width:'90%',
        }}
        end={{
          width:'90%',
          transform: 'translateX(0px)',
        }}
      >
          <button
            className="button1"
            onClick={handleHireMeClick}
          >
            Hire me
          </button>
          </Animate> </div>
      
    </section>
  );
}

export default Home;
