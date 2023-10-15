'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';

import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';
import FileUploadBox from './fileUpload';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
  <section className={`${styles.flexCenter} sm:pl-16 pl-6`} id="Dropbox">
    <FileUploadBox />
    </section>
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
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

      <a href="/https://tailwindcss.com/docs/hover-focus-and-other-states#target">
      <img src="map.png" alt="Description" />
    </a>

      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;