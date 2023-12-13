import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import images from './Images/giphy.gif';
import About from './About';
import Skills from './Skills';
import './App.css';

export default function App() {
  return (
    <div className='app-container' style={{ height: '4500px' }}>
      <img className='Gifadjustment' src={images} alt="My Gif" />
        <About/>
    </div>
  );
}
