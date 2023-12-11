import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="home-icon">
          <Link to="Home" smooth={true} duration={1000}>
            <FontAwesomeIcon icon={faHome} style={{ fontSize: '30px', cursor: 'pointer', color: 'white'}}/>
          </Link>
        </div>
        <Link to="skillSection" smooth={true} duration={1000}>
          <button style={{ marginRight: '10px' }} className="button-17">Skills</button>
        </Link>
        <Link to="projectSection" smooth={true} duration={1000}>
          <button style={{ marginRight: '10px' }} className="button-17">Projects</button>
        </Link>
        <Link to="ExperienceSection" smooth={true} duration={1000}>
          <button style={{ marginRight: '10px' }} className="button-17">Experience</button>
        </Link>
        <Link to="ContactSection" smooth={true} duration={1000}>
          <button style={{ marginRight: '10px' }} className="button-17">Contact me</button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
