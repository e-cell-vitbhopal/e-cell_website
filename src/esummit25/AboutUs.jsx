import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./AboutUs.css";
import image1 from '../assets/image1.jpeg'
import image2 from '../assets/image2.jpeg'
const AboutUs = () => {
  const [ref1, inView1] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const [ref2, inView2] = useInView({
    threshold: 0.3,
    triggerOnce: false
  });

  const fadeInUpVariants = {
    hidden: {
      opacity: 0,
      x: -30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };
  const fadeInUpVariants2 = {
    hidden: {
      opacity: 0,
      x: +30
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="about">
      <h2 className="title">ABOUT US</h2>
      <div className="content">
        <motion.div
          ref={ref1}
          className="box"
          initial="hidden"
          animate={inView1 ? "visible" : "hidden"}
          variants={fadeInUpVariants}
        >
          <div className="image-container">
            <img 
              src={image1} 
              alt="Campus" 
            />
          </div>
          <p>
            E-Summit is the flagship event organised by the E-Cell, VIT Bhopal
            annually. It is one of the most awaited events hosted by the
            institute that witnesses massive participation nationwide. Through
            this event, we aim to ignite the entrepreneur inside students by
            bringing them together to compete in various competitions.
          </p>
        </motion.div>
        
        <motion.div
          ref={ref2}
          className="box"
          initial="hidden"
          animate={inView2 ? "visible" : "hidden"}
          variants={fadeInUpVariants2}
        >
          <p>
            E-Summit aims to help students develop an entrepreneurial mindset
            and we aim to go beyond talking just about mere businesses.{" "}
            Entrepreneurship is a spirit and that's what we celebrate
            here.
          </p>
          <div className="image-container">
            <img 
              src={image2}
              alt="Students" 
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;