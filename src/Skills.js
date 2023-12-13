import React from 'react';
import { FaWeight } from 'react-icons/fa';
import { Element } from 'react-scroll';
const Skills = () => {
  return (
    <Element name="skillSection">
      <div >
        <h2 className='skills-container' style = {{marginBottom:'-20px',color: '#000000', paddingTop:'120px',fontFamily:'sans-serif'}} > Skills </h2>
        <div className="languages-container">
          <h3 style={{ fontWeight: 'lighter', marginBottom:'2px' }}> Programming Languages </h3>
          <div className="skills-list" style = {{marginBottom:'-10px'}}>
            <div >
            <p className="skill-item">C++</p>
            <p className="skill-item">Java</p>
            <p className="skill-item">JavaScript</p>
            <p className="skill-item">TypeScript</p>
            <p className="skill-item">Next.js</p>
            <p className="skill-item">Python</p>
            </div>
          </div>
        </div>
        {/* Frameworks/Libraries */}
        <div className="frameworks-container">
          <h3  style={{ fontWeight: 'lighter', marginBottom:'2px' }} >Frameworks/Libraries</h3>
          <div className="skills-list" style = {{marginBottom:'-10px'}}>
            <div>
            <p className="skill-item">React.js</p>
            <p className="skill-item">React native</p>
            <p className="skill-item">Springboot</p>
            <p className="skill-item">GraphQL</p>
            <p className="skill-item">RESTful API</p>
            </div>
          </div>
        </div>
        {/* Tools */}
        <div className="tools-container">
          <h3 style={{ fontWeight: 'lighter', marginBottom:'2px' }} >CS fundamentals</h3>
          <div className="skills-list" style = {{marginBottom:'-10px'}}>
            <div className='skill-around'>
            <p className="skill-item">Object-Oriented Programming (OOP)</p>
            <p className="skill-item">Data Structures</p>
            <p className="skill-item">Algorithms</p>
            </div>
          </div>
          <h3 style={{ fontWeight: 'lighter', marginBottom:'2px' }} >Tools/Platforms</h3>
          <div className="skills-list" style = {{marginBottom:'-10px'}}>
            <div className='skill-around'>
            <p className="skill-item">Git</p>
            <p className="skill-item">Visual studio</p>
            <p className="skill-item">Github</p>
            <p className="skill-item">Canva</p>
            <p className="skill-item">Intellij</p>
            </div>
          </div>
          <h3 style={{ fontWeight: 'lighter', marginBottom:'7px' }} >Networking</h3>
          <div className="skills-list" style = {{marginBottom:'-10px'}}>
            <div className='skill-around'>
            <p className="skill-item">TCP/IP</p>
            </div>
            </div>
        </div>
      </div>
    </Element>
  );
};
export default Skills;

