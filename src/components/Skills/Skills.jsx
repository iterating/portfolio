import React,{useEffect} from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { config } from '../../config'
import { skillsData } from './skillsData'

export default function Skills() {
    useEffect(()=>{
        AOS.init({duration:1000})
    },[])
  return (
    <section className="skills-area page-section scroll-to-page" id="skills">
            <div className="custom-container">
                <div className="skills-content content-width">
                    <div className="section-header">
                        <h4 className="subtitle scroll-animation" data-aos='fade-up'>
                            <i className="las la-shapes"></i> my skills
                        </h4>
                        <h1 className="scroll-animation" data-aos='fade-up'>My <span>Stack</span></h1>
                    </div>

                    <div className="row skills text-center">
                        {skillsData.map((skill, index) => (
                            <div key={index} className="col-md-3 scroll-animation" data-aos={skill.animation}>
                                <div className="skill">
                                    <div className="skill-inner">
                                        <i className={`${skill.icon}`} style={{ fontSize: '50px', height: '10px', width: '50px' }}></i>
                                    </div>
                                    <p className="name">{skill.name}</p>
                                </div>
                            </div>
                        ))}
                    </div>    
                </div>
            </div>
    </section>
  )
}
