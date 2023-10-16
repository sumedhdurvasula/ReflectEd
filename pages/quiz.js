'use client';


import { motion } from 'framer-motion';
import { TypingText } from '../components';

import './quiz.css';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import React from 'react';

class MyPage extends React.Component {
  render() {
    return (
      <section className={`${styles.paddings} relative z-10`}>
      <div className="gradient-02 z-0" />
        <header>
          <h1>Welcome to My React Page!</h1>
        </header>
        <section>
          <p>This is a simple example of a React web page.</p>
          <TypingText title="What is ReflectEd" textStyles="text-center" speed={200}/>
          <motion.p
            variants={fadeIn('up', 'tween', 0.2, 1)}
            className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
          >
            <span className="font-extrabold text-white">Reflect</span> 
            <span className="font-extrabold text-purple-300">Ed</span>

            <span className="font-extrabold text-white"> is a study tool which promotes positive learning experineces for individuals of all ages in all professions.
            The website employs advanced natural language processing algorithms to analyze and condense lengthy texts into concise summaries, saving students valuable time 
            and enhancing their comprehension of key concepts. </span>{' '}
          </motion.p>
        </section>
        <footer>
          <p>Thank you for visiting!</p>
        </footer>
      </section>
    );
  }
}

export default MyPage;