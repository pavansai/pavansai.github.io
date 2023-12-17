import React from 'react';
import Navbar from './Navbar';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import { Element } from 'react-scroll';
import Sidebar from './Sidebar';
import Contact from './Contact';
import Footer from './Footer';
function About() {
  return (
    <Element name="Home">
    <div > 
      <Navbar />
      <div className="about">
        Hello, I am{' '}
        <span className="bold-orange">pavan sai</span> <p style={{ fontSize: '23px'}}>
         I am a Computer Science graduate student at Campbellsville University,
          graduating in May 2024. I am actively looking for software developer engineer roles.
        </p>
        <p style={{ fontSize: '23px' }}>
          I also have a computer science bachelor's degree from SRM University, India.
          My major is Artificial Intelligence and Machine Learning.
        </p>
          <Skills />
          <Projects />
          <Experience />
          <Contact/>
          <Sidebar/>
          <Footer/>
      </div>
    </div>
    </Element>
  );
}

export default About;
