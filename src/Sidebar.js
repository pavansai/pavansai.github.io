import React from 'react';
import './Sidebar.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa'; 

function Sidebar() {
  const iconSize = 30;
  const customColor = 'white';
  const iconStyle = { color: customColor }; 

  return (
    <div className='fixed-sidebar'>
      <div className="sidebar">
        <ul>
          <li>
            <a href="https://github.com/pavansai" target="_blank" rel="noopener noreferrer">
              <FaGithub size={iconSize} style={iconStyle} /> 
            </a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/pavan-sai-veeragandham-694339214/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin size={iconSize} style={iconStyle} /> 
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;

