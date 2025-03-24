import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { servicesData } from './servicesData'

export default function Services() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="services-area page-section scroll-to-page" id="services">
        <div className="custom-container">
            <div className="services-content content-width">
                <div className="section-header">
                    <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                        <i className="las la-stream"></i> {servicesData.sectionTitle}
                    </h4>
                    <h1 className="scroll-animation" data-aos='fade-up'>{servicesData.sectionHeading} <span>{servicesData.sectionHeadingSpan}</span></h1>
                </div>

                <div className="services-items">
                    {servicesData.services.map((service) => (
                        <div className="service-item scroll-animation" data-aos='fade-up' key={service.id}>
                            <i className={service.icon}></i>
                            <h2>{service.title}</h2>
                            <p>{service.description}</p>
                            <span className="projects">{service.projects}</span>
                        </div>
                    ))}
                </div>    
            </div>
        </div>
    </section>
  )
}
