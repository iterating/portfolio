import React from 'react';
import { config } from '../../config';
import LazyImage from './LazyImage';

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <h1>Jonathan Young</h1>
        <span className="designation">Full Stack Engineer & Web Developer</span>
      </div>
      <LazyImage 
        className="me" 
        src={'assets/images/profile.professional.portrait.jpg'} 
        alt="Jonathan Young" 
        loading="lazy"
      />
      <h2 className="email">jyoung0696@gmail.com</h2>
      <h2 className="address"></h2>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        <li>
          <a href="https://www.linkedin.com/in/jonathan-young-a571a2223/"><i className="lab la-linkedin-in"></i></a>
        </li>
        <li>
          <a href="https://twitter.com/JonYoung_Dev"><i className="lab la-twitter"></i></a>
        </li>
        <li>
          <a href="https://github.com/Jyoung-Research"><i className="lab la-github"></i></a>
        </li>
        <li>
          <a href="#"><i className="lab la-stack-overflow"></i></a>
        </li>
      </ul>
      <a
        href="mailto:jyoung0696@gmail.com"
        className="theme-btn"
        style={{ marginBottom: '5px' }}
      >
        <i className="las la-envelope"></i> Email me
      </a>
      <br />
      <a
        href={config.getAssetPath('assets/jonathanyoung.cv.tech.pdf')}
        className="theme-btn"
        style={{ marginBottom: '5px' }}
      >
        <i className="las la-paper-plane"></i> Resume
      </a>
      <p className="copyright">&copy; {new Date().getFullYear()} Jonathan Young.</p>
    </div>
  );
}
