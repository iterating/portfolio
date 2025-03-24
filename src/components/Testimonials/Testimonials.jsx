import React, { useRef, useEffect } from "react";
// import OwlCaraousel from '../../assets/js/owl.carousel.js'
// import 'owl.carousel/dist/assets/owl.carousel.min.css'
// import 'owl.carousel/dist/assets/owl.theme.default.min.css'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { config } from '../../config'
import { testimonialsData } from './testimonialsData';

export default function Testimonials() {
    
    const carouselRef = useRef(null);

    useEffect(() => {
        AOS.init({duration:1000})
    }, [])

    const handlePrevClick = () => {
        carouselRef.current.prev();
    }

    const handleNextClick = () => {
        carouselRef.current.next();
    }
  
  return (
    <section className="testimonial-area page-section scroll-to-page" id="testimonial">
            {/* <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script> */}

            {/* <script src="https://code.jquery.com/jquery-3.6.4.slim.min.js" integrity="sha256-a2yjHM4jnF9f54xUQakjZGaqYs/V1CYvWpoqZzC2/Bw=" crossorigin="anonymous"></script> */}


            <div className="custom-container">
                <div className="testimonial-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="lar la-comment"></i> {testimonialsData.sectionTitle}
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>{testimonialsData.sectionHeading} <span>{testimonialsData.sectionHeadingSpan}</span></h1>
                    </div>    
                    <div className="testimonial-slider-wrap scroll-animation" data-aos='fade-up'>

                        <OwlCaraousel className="owl-carousel testimonial-slider owl-theme" smartSpeed="450" items="1" dots={false} ref={carouselRef}>
                            {testimonialsData.testimonials.map((testimonial, index) => (
                                <div className="testimonial-item" key={testimonial.id}>
                                    <div className="testimonial-item-inner">
                                        <div className="author d-flex align-items-center">
                                            <img src={config.getAssetPath(testimonial.image)} alt="portfolio"/>
                                            <div className="right">
                                                <h3>{testimonial.author}</h3>
                                                <p className="designation">{testimonial.designation} <span>{testimonial.company}</span></p>
                                            </div>
                                        </div>
                                        <p>"{testimonial.quote}"</p>

                                        <a href={testimonial.projectLink} className="project-btn">Project</a>
                                    </div>
                                </div>
                            ))}
                        </OwlCaraousel>
                        <div className="testimonial-footer-nav">
                            <div className="testimonial-nav d-flex align-items-center">
                                <button className="prev" onClick={handlePrevClick} ><i className="las la-angle-left"></i></button>
                                <div id="testimonial-slide-count"><span className="left">1</span> /{testimonialsData.testimonials.length}</div>
                                <button className="next" onClick={handleNextClick} ><i className="las la-angle-right"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </section>
  )
}