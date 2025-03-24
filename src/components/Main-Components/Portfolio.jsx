import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import LazyImage from '../Global-content/LazyImage';
import { config } from '../../config';
// import Lightbox from 'lightbox2';
// import 'lightbox2/dist/css/lightbox.min.css';
// import 'lightbox2/dist/js/lightbox.js';

export default function Portfolio() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    // Lightbox.option({
    //   resizeDuration: 200,
    //   fadeDuration: 600,
    //   imageFadeDuration: 600,
    //   wrapAround: true,
    // });
  }, []);
  return (
    <section
      className="portfolio-area page-section scroll-to-page"
      id="portfolio"
    >
      <div className="custom-container">
        <div className="portfolio-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-grip-vertical"></i> projects
            </h4>
            <h1 className="scroll-animation">
              Featured <span>Projects</span>
            </h1>
          </div>

          <div className="row portfolio-items">
            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-full">
                <div className="portfolio-item-inner">
                  <a
                    href="https://lafilmlab.com"
                    data-lightbox="example-1"
                  >
                    <img
                      src={config.getAssetPath('assets/images/portfolio.FilmLab.kiosk.png')}
                      alt="LA Film Lab Ordering System"
                      loading="lazy"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>NodeJS</a>
                    </li>
                    <li>
                      <a disabled>Nuxt/Vue.js</a>
                    </li>
                    <li>
                      <a disabled>Typescript</a>
                    </li>
                    <li>
                      <a disabled>PostgresSQL</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://lafilmlab.com">
                    LA Film Lab Ordering System
                  </a>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
            <div className="portfolio-item portfolio-half">
            <div className="portfolio-item-inner">
            <a href="https://sirscalc.vercel.app/" data-lightbox="example-1">
                    <img
                      src={config.getAssetPath('assets/images/portfolio.medicalc.screenshot.clean.png')}
                      alt="Medical Decision Tools"
                      loading="lazy"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>Python</a>
                    </li>
                    <li>
                      <a disabled>Flask</a>
                    </li>
                    <li>
                      <a disabled>React</a>
                    </li>
                    <li>
                      <a disabled>RESTful APIs</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://sirscalc.vercel.app/">Medical Decision Tools</a>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-right">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a href={config.getAssetPath('assets/images/portfolio.placenotes.checklist.jpg')} data-lightbox="example-1" loading="lazy">
                  <img src={config.getAssetPath('assets/images/portfolio.placenotes.checklist.jpg')} alt="Placenotes" 
                  loading="lazy"
                  />
                  </a>


                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>React Native</a>
                    </li>
                    <li>
                      <a disabled>Redux</a>
                    </li>
                    <li>
                      <a disabled>GraphQL</a>
                    </li>
                    <li>
                      <a disabled>MongoDB</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://placenotes.vercel.app/">Placenotes Location First Social Platform</a>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-right">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a href="https://querybuilder.vercel.app/" data-lightbox="example-1" loading="lazy">  
                    <img src={config.getAssetPath('assets/images/portfolio.querybuilder.screenshot.1.png')} alt="Query Builder" 
                    loading="lazy"
                    />
                  </a>

                  {/* <img src="../assets/images/portfolio2.jpg" alt="Portfolio" /> */}

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>React</a>
                    </li>
                    <li>
                      <a disabled>MySQL / MongoDB / PostgresSQL</a>
                    </li>
                    <li>
                      <a disabled> NodeJS </a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://querybuilder.vercel.app/">Query Builder</a>
                </h2>
              </div>
            </div>

            {/* <div className="col-md-6 scroll-animation" data-aos="fade-left">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href={config.getAssetPath('assets/images/portfolio3.jpg')}
                    data-lightbox="example-1"
                    loading="lazy"
                  >
                    <img
                      src={config.getAssetPath('assets/images/portfolio3.jpg')}
                      alt="Portfolio"
                      loading="lazy"
                    />
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>NodeJS</a>
                    </li>
                    <li>
                      <a disabled>ExpressJS</a>
                    </li>
                    <li>
                      <a disabled>RxJS</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://www.taskly-dashboard.com">Event Vans</a>
                </h2>
              </div>
            </div> */}

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  <a
                    href={config.getAssetPath('assets/images/portfolio.GBSnow.1.png')}
                    loading="lazy"
                    data-lightbox="example-1"
                  >
                    <img src={config.getAssetPath('assets/images/portfolio.GBSnow.1.png')} 
                    alt="portfolio" 
                    loading="lazy"/>
                  </a>

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>Typescript</a>
                    </li>
                    <li>
                      <a disabled>NodeJS</a>
                    </li>
                    <li>
                      <a disabled>Microservices Architecture</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://greaterbostonsnowremoval.com">
                    Greater Boston Snow Removal Business Platform
                  </a>
                </h2>
              </div>
            </div>

            <div className="col-md-12 scroll-animation" data-aos="fade-up">
              <div className="portfolio-item portfolio-half">
                <div className="portfolio-item-inner">
                  {/* <a
                    href="../assets/images/portfolio5.jpg"
                    data-lightbox="example-1"
                  > */}
                  <img src={config.getAssetPath('assets/images/portfolio.tableaucleaner.screenshot.png')} 
                  alt="portfolio" 
                  loading="lazy"/>
                  {/* </a> */}

                  <ul className="portfolio-categories">
                    <li>
                      <a disabled>React</a>
                    </li>
                    <li>
                      <a disabled>NodeJS</a>
                    </li>
                  </ul>
                </div>
                <h2>
                  <a href="https://tableaucleaner.com">Tableau Data Cleaner</a>
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
