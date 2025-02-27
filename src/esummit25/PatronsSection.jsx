import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import './PatronsSection.css';
import chancellor from '../assets/patrons/VISHWANATHAN.jpeg'
import vc from '../assets/patrons/shankar vishwanathan.jpeg'
import avp from '../assets/patrons/kadambari vishwanathan.jpeg'
import pvc from '../assets/patrons/tb shridharan.jpeg'
import ar from '../assets/patrons/kk nair.jpeg'
import dsw from '../assets/patrons/anant kant shukla.jpeg'
import adsw1 from '../assets/patrons/chandan .jpeg'
import adsw2 from '../assets/patrons/saurabh_parasad.jpeg'
import fc from '../assets/patrons/bhakti parasar.jpeg'
import dfc from '../assets/patrons/margatharajan.jpeg'
const patrons = {
  top: [
    {
      name: 'Dr. G Viswanathan',
      designation: 'Chancellor',
      image: chancellor
    }
  ],
  secondRow: [
    {
      name: 'Dr. Shankar Viswananthan',
      designation: 'Vice Chancellor',
      image: vc
    },
    {
      name: 'Dr. Kadhambari Viswanathan ',
      designation: 'Assistant Vice President',
      image: avp
    }
  ],
  thirdRow: [
    {
      name: 'Dr. T.B. Sridharan',
      designation: 'Pro Vice Chancellor',
      image: pvc
    },
    {
      name: 'Dr K.K. Nair',
      designation: 'Acting Registrar',
      image: ar
    },
    {
      name: 'Dr. Anant Kant Shukla',
      designation: 'Director Of Student Welfare',
      image: dsw
    }
  ],
  bottomRow: [
    {
      name: 'Dr. Chandan Kumar Behra',
      designation: 'Assistant DSW (Technical)',
      image: adsw1
    },
    {
      name: 'Dr. Saurav Prasad',
      designation: 'Assistant DSW (Non-Technical)',
      image: adsw2
    },
    {
      name: 'Dr. Bhakti Parashar',
      designation: 'Faculty Coordinator',
      image: fc
    },
    {
      name: 'Dr. M. Maragatharajan',
      designation: 'Faculty Coordinator',
      image: dfc
    }
  ]
};

const PatronCard = ({ patron, index, delay }) => {
  const [ref, inView] = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <motion.div
      ref={ref}
      className="patron-card"
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: delay }}
    >
      <div className="patron-image-container">
        <img 
          src={patron.image} 
          alt={patron.name} 
          className="patron-image"
        />
      </div>
      <div className="patron-info">
        <h3 className="patron-name">{patron.name}</h3>
        <p className="patron-designation">{patron.designation}</p>
      </div>
    </motion.div>
  );
};

const PatronsSection = () => {
  return (
    <section className="patrons-section">
      <h2 className="patrons-title">Our Patrons</h2>
      <div className="pyramid-container">
        <div className="pyramid-row">
          {patrons.top.map((patron, index) => (
            <PatronCard 
              key={index} 
              patron={patron} 
              index={index} 
              delay={0.2}
            />
          ))}
        </div>
        <div className="pyramid-row">
          {patrons.secondRow.map((patron, index) => (
            <PatronCard 
              key={index} 
              patron={patron} 
              index={index} 
              delay={0.3 + (index * 0.1)}
            />
          ))}
        </div>
        <div className="pyramid-row">
          {patrons.thirdRow.map((patron, index) => (
            <PatronCard 
              key={index} 
              patron={patron} 
              index={index} 
              delay={0.4 + (index * 0.1)}
            />
          ))}
        </div>
        <div className="pyramid-row">
          {patrons.bottomRow.map((patron, index) => (
            <PatronCard 
              key={index} 
              patron={patron} 
              index={index} 
              delay={0.5 + (index * 0.1)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PatronsSection;