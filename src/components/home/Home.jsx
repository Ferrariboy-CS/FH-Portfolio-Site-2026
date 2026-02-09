import React from 'react';
import { motion } from '../../lib/framerMotion';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
const propic = '/Fessy Grad - 02.jpg';

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
          <div className='profile-card'>
            <div 
              className='profile-card__image' 
              style={{ backgroundImage: `url(${propic})` }}
            >
              <div className='profile-card__info'>
                {/* <span className='profile-card__name'>Ferrariboy</span>
                <span className='profile-card__role'>Software Developer</span> */}
              </div>
            </div>
          </div>
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
