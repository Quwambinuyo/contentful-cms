import React from "react";
import heroImg from "../assets/hero.svg";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby prism retro heirloom kickstarter. Trust fund iPhone
            whatever keytar sriracha jawn. Gentrify flexitarian yr hell of
            hammock retro bitters live-edge. Blog asymmetrical stumptown irony
            poke man bun. Pinterest craft beer everyday carry bicycle rights
            normcore, meggings cupping copper mug yr chillwave direct trade air
            plant.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
