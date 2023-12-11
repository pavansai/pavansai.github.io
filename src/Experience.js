import React from "react";
import { Element } from 'react-scroll';
import './Experience.css';

const Experience = () => {
  return (
    <Element name="ExperienceSection">
      <div>
        <h2 style={{ color: '#000000', paddingTop:'120px', fontFamily:'sans-serif' }} className="ExperienceContainer">Experience</h2>
        <div className="ExperienceBox">
          <div className="Box Box1">
            <div style={{ paddingTop: '10px', paddingLeft: '45px' }}>
              <p style={{ fontWeight: 'bolder', margin: 0 }}>Impetus Technologies, Inc</p>
              <p style={{ fontWeight: 'lighter', margin: 0 }}>Software Engineer Intern</p>
              <p style={{ fontWeight: 'lighter', fontSize: '15px', marginTop: '7px' }}>Mar' 2022 - Aug' 2022</p>
            </div>
          </div>
          <div className="Box Box2">
            <div style={{ paddingTop: '10px', paddingLeft: '50px' }}>
              <p style={{ fontWeight: 'bolder', margin: 0 }}>Jaaji Technologies</p>
              <p style={{ fontWeight: 'lighter', margin: 0 }}>Software Engineer Intern</p>
              <p style={{ fontWeight: 'lighter', fontSize: '15px', marginTop: '7px' }}>May' 2021 - Dec' 2021</p>
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Experience;

