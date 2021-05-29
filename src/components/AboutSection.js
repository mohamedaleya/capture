import React from "react";
import home1 from "../img/home1.png";
import { About, Description, Hide, Image } from "../styles";
//Framer Motion
import { motion } from "framer-motion";

const AboutSection = () => {
  const titleAnim = {
    hidden: { opacity: 0 },
    show: { opacity: 11, transition: { duration: 2 } },
  };

  const container = {
    hidden: { x: 100 },
    show: { x: 0 },
  };

  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <motion.h2 variants={titleAnim} initial="hidden" animate="show">
              We work to make
            </motion.h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography or videography ideas that you have. We
          have professionals with amazing skills!
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="guy with a camera" />
      </Image>
    </About>
  );
};

//Styled Components

export default AboutSection;
