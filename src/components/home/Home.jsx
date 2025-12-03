import React from 'react';
import { motion } from '../../lib/framerMotion';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import propic from '../../assets/Propic (2).png';

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

function Home() {
  return (
    <motion.section
      className='home section'
      id='home'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div className='home__container container grid'>
        <motion.div
          className='home__content grid'
          variants={containerVariants}
          initial='hidden'
          animate='visible'
        >
          <motion.div variants={itemVariants}>
            <Social />
          </motion.div>
          <div 
            className='home__img' 
            style={{ 
              backgroundImage: `url(${propic})`,
              backgroundRepeat: 'no-repeat',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              boxShadow: 'inset 0 0 0 9px rgb(255 255 255 / 30%)',
              width: '300px',
              height: '300px',
              borderRadius: '60% 40% 30% 70%/60% 30% 70% 40%',
              animation: 'profile__animate 8s ease-in-out infinite 1s',
              justifySelf: 'center',
            }}
          />
          <motion.div variants={itemVariants}>
            <Data />
          </motion.div>
        </motion.div>
        <motion.div variants={itemVariants} initial='hidden' animate='visible'>
          <ScrollDown />
        </motion.div>
      </div>
    </motion.section>
  );
}

export default Home;
