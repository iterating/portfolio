import React from 'react';
import { config } from '../../config';

export default function Lsb() {
  return (
    <div className="left-sidebar">
      <div className="sidebar-header d-flex align-items-center justify-content-between">
        <h1>Jonathan Young</h1>
        <span className="designation">Full Stack Engineer & Web Developer</span>
      </div>
      <img className="me" src={config.getAssetPath('assets/images/profile.professional.portrait.jpg')} alt="Jonathan Young" />
      <h2 className="email">jyoung0696@gmail.com</h2>
      <h2 className="address"></h2>
      <ul className="social-profile d-flex align-items-center flex-wrap justify-content-center">
        {/* <li>
          <a href="https://twitter.com/">
            <i className="lab la-twitter"></i>
          </a>
        </li> */}
        <li>
          <a href="https://www.linkedin.com/in/iterating/">
            <i className="lab la-linkedin"></i>
          </a>
        </li>
        {/* <li>
          <a href="https://instagram.com/">
            <i className="lab la-instagram"></i>
          </a>
        </li> */}
        <li>
          <a href="https://github.com/iterating">
            <i className="lab la-github"></i>
          </a>
        </li>
      </ul>
      <a
        href="mailto:jyoung0696@gmail.com"
        className="theme-btn"
        style={{ marginBottom: '5px' }}
      >
        <i className="las la-envelope"></i> Hire Me!
      </a>
      <br />
      <a
        href={config.getAssetPath('assets/jonathanyoung.cv.tech.pdf')}
        className="theme-btn"
        style={{ marginBottom: '5px' }}
      >
        <i className="las la-paper-plane"></i> Resume
      </a>
    </div>
  );
}
