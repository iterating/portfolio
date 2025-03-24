import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { pricingData } from './pricingData.js'

export default function Pricing() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="pricing-area page-section scroll-to-page" id="pricing">
            <div className="custom-container">
                <div className="pricing-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-dollar-sign"></i> {pricingData.sectionTitle}
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>{pricingData.sectionHeading} <span>{pricingData.sectionHeadingSpan}</span></h1>
                    </div>

                    <div className="pricing-table-items">
                        <div className="row">
                            {pricingData.packages.map((pkg, index) => (
                                <div className="col-md-6 scroll-animation" data-aos={index === 0 ? 'fade-up' : 'fade-left'} key={pkg.id}>
                                    <div className="pricing-table">
                                        <div className="pricing-table-header">
                                            <div className="top d-flex justify-content-between align-items-start">
                                                <h4>{pkg.type}</h4>
                                                <p className="text-right">{pkg.description.split('\n').map((line, i) => (
                                                    <React.Fragment key={i}>
                                                        {line}
                                                        {i < pkg.description.split('\n').length - 1 && <br />}
                                                    </React.Fragment>
                                                ))}</p>
                                            </div>
                                            <h1>{pkg.price} <span>{pkg.unit}</span></h1>
                                        </div>
                                        <ul className="feature-lists">
                                            {pkg.features.map((feature, i) => (
                                                <li key={i}>{feature}</li>
                                            ))}
                                        </ul>
                                        <a href={pkg.ctaLink} className="theme-btn">{pkg.ctaText}</a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="info scroll-animation" data-aos='fade-up'>
                            {pricingData.contactInfo.text.split('\n').map((line, i) => (
                                <React.Fragment key={i}>
                                    {line}
                                    {i < pricingData.contactInfo.text.split('\n').length - 1 && <br />}
                                </React.Fragment>
                            ))} <a href={pricingData.contactInfo.linkUrl}>{pricingData.contactInfo.linkText}</a>
                        </p>
                    </div>
                </div>
            </div>
    </section>
  )
}
