import React, { useState, useEffect } from 'react';
import { Element } from 'react-scroll';
import ProjectImage1 from './Images/projectImage1.png';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Project.css';

const Projects = () => {
  const [isDescriptionVisible1, setDescriptionVisibility1] = useState(false);

  const toggleDescription1 = () => {
    setDescriptionVisibility1(!isDescriptionVisible1);
  };
  const closeDescription = (event) => {

    if (
      isDescriptionVisible1 &&
      event.target.closest('.project-box-1') === null &&
      event.target.closest('.project-dialogue-1') === null
    ) {
      setDescriptionVisibility1(false);
    }
  };
  useEffect(() => {
    document.addEventListener('click', closeDescription);
    return () => {
      document.removeEventListener('click', closeDescription);
    };
  }, [isDescriptionVisible1]);
  return (
    <Element name="projectSection">
      <div>
        <h2 style={{ color: '#000000', paddingTop:'120px', fontFamily:'sans-serif' }} className='project-container'>
          Projects
        </h2>
        <div className='projects-section'>
          <div className='project-box project-box-1' onClick={toggleDescription1}>
            <div className='project-content'>
              <div className='project-image-container'>
                <img className='project-image' src={ProjectImage1} alt="Project 1" />
                <p style={{marginTop:'60%', marginLeft:'50px', marginRight:0}}>reactBeachResort</p>
                <p style={{marginTop:'3%', marginRight:'10px', marginLeft:'20px'}}className="project-text-container">React.js</p>
                <p style={{marginRight:'10px'}}className="project-text-container">JavaScript</p>
                <p className="project-text-container">Netlify</p>

              </div>
              {isDescriptionVisible1 && (
                <>
                  <div className='overlay visible' onClick={toggleDescription1}></div>
                  <div className='project-dialogue-1 visible'>
                    <div className='project-text'>
                      <p>This is dynamic beach resort website developed with React.js,
                         featuring efficient state management with React Context API.
                         Deployed on Netlify with GitHub integration
                         for continuous deployment and easy hosting.
                        </p>
                        <p>
                          <a href="https://github.com/pavansai/reactBeachResort" target="_blank" rel="noopener noreferrer">
                          <FaGithub size={30} style={{ marginRight: '5px' }} />
                          </a>
                          </p>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </Element>
  );
};
export default Projects;
