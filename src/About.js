import React from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import { Element } from 'react-scroll';
import Contact from './Contact';
function About() {
  return (
    <Element name="Home">
    <div>
      <Navbar />
      <p className="about">
        Hello, I am{' '}
        <span className="bold-orange">pavan sai</span> <p style={{ fontSize: '23px'}}>
         I am a Computer Science graduate student at Campbellsville University,
          graduating in May 2024. I am actively looking for software developer engineer roles.
        </p>
        <p style={{ fontSize: '23px' }}>
          I also have a computer science bachelor's degree from SRM University, India.
          My major is Artificial Intelligence and Machine Learning.
        </p>
        <div>
          <Skills />
          <Projects />
          <Experience />
          <Contact/>
        </div>
      </p>
    </div>
    </Element>
  );
}

export default About;
