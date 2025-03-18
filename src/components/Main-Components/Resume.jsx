import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section className="resume-area page-section scroll-to-page" id="resume">
      <div className="custom-container">
        <div className="resume-content content-width">
          <div className="section-header">
            <h4 className="subtitle scroll-animation" data-aos="fade-up">
              <i className="las la-briefcase"></i> Resume
            </h4>
            <h1 className="scroll-animation" data-aos="fade-up">
              <span>Experience</span>
            </h1>
          </div>

          <div className="resume-timeline">
            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2024 - Present</span>
              <h2>Software Engineer (contract)</h2>
              <p>LA Film Lab and Studio, Los Angeles CA</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Developed full-stack solutions with component-driven architecture using TypeScript, Nuxt.js, and Node.js with Supabase</li>
                <li>Developed automated data synchronization API endpoint between Square's e-commerce platform and Supabase database</li>
                <li>Implemented real-time event architecture with SSE and REST APIs achieving &lt;100ms latency</li>
                <li>Developed optimized order management system that reduced processing time by 25%</li>
              </ul>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2021 - 2024</span>
              <h2>Web Developer (contract)</h2>
              <p>Greater Boston Snow Removal, Boston MA</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Architected and implemented scalable microservices platform that transformed company into Boston's market leader</li>
                <li>Designed event-driven microservices architecture using TypeScript and Node.js, achieving 99.9% uptime</li>
                <li>Built location-based worker matching system using Google Cloud API and MongoDB geospatial indexing</li>
                <li>Implemented robust security infrastructure with JWT-based authentication and role-based access control</li>
              </ul>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2018 - 2020</span>
              <h2>Operations Manager</h2>
              <p>Greater Boston Snow Removal, Boston MA</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Led operations transformation resulting in 500% revenue growth while maintaining 100% client retention</li>
                <li>Managed 6-person team and implemented route optimization system</li>
                <li>Leveraged Excel and Tableau to create comprehensive dashboards for KPI tracking</li>
                <li>Developed custom analytics tools to track team performance and route efficiency</li>
              </ul>
            </div>

            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2014 - 2015</span>
              <h2>Clinical User Specialist Intern</h2>
              <p>Vecna Healthcare, Burlington MA</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Developed EMR user interfaces that reduced clinical documentation time by 35%</li>
                <li>Spearheaded UI/UX improvements that increased user satisfaction by 40%</li>
                <li>Reduced system deployment time by 60% through automation with Ansible</li>
                <li>Maintained 99.9% uptime for critical healthcare systems</li>
              </ul>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2011 - 2013</span>
              <h2>Research Assistant in Vaccine Immunology</h2>
              <p>Vaccine Immunotherapy Center, Massachusetts General Hospital, Boston MA</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Performed groundbreaking transplant immunology research</li>
                <li>Utilized Python to perform statistical analyses of data from in-vitro and microarray experiments</li>
                <li>Programmed 'Cellbot', an automated cell counting program in Java and ImageJ</li>
                <li>Published in American Journal of Transplantation</li>
              </ul>
            </div>

            <br />
            <h1 className="scroll-animation" data-aos="fade-up">
              Education
            </h1>

            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2024</span>
              <h2>Per Scholas</h2>
              <p>Software Engineering Track, GPA: 4.0</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Completed intensive training in enterprise software development practices and Agile methodologies</li>
                <li>Achieved top performance (4.0 GPA) while applying existing development experience to new projects</li>
              </ul>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date">2015 - 2018</span>
              <h2>University Of Massachusetts Chan Medical School</h2>
              <p>M.D. Candidate</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Won American College of Physicians National Abstract Competition</li>
                <li>Published in ACP Impact and presented at Digestive Disease Interventions</li>
                <li>Applied statistical analysis and diagnostic frameworks to complex problem-solving</li>
              </ul>
            </div>

            <div className="item scroll-animation" data-aos="fade-right">
              <span className="date">2007 - 2010</span>
              <h2>Tufts University</h2>
              <p>B.Sc. GPA: 3.7</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Graduated Magna Cum Laude with Thesis Honors</li>
                <li>Published research in Organic and Biomolecular Chemistry</li>
                <li>Managed IT infrastructure as Computer Lab Administrator</li>
              </ul>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <span className="date"></span>
              <h2>Choate Rosemary Hall</h2>
              <p></p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>American Invitational Mathematics Examination (AIME) Qualifier</li>
                <li>Recognized for exceptional analytical skills and mathematical modeling</li>
                <li>Demonstrated advanced problem-solving capabilities</li>
              </ul>
            </div>

            <br />
            <h1 className="scroll-animation" data-aos="fade-up">
              Skills
            </h1>

            <div className="skills-container scroll-animation" data-aos="fade-up" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', marginTop: '20px' }}>
              {[
                'Typescript/Javascript',
                'LangChain',
                'Python, Flask, Numpy, Scipy',
                'GraphQL, RESTful web services',
                'PostgreSQL, MySQL, MongoDB',
                'React, Nuxt, Vue',
                'HTML5/CSS3',
                'AWS, EC2, DynamoDB',
                'Docker',
                'Git, Linux environments',
                'Figma, Illustrator, Photoshop',
                'Excel, Tableau'
              ].map((skill, index) => (
                <div 
                  key={index} 
                  style={{ 
                    backgroundColor: 'rgba(255, 255, 255, 0.1)', 
                    padding: '8px 15px', 
                    borderRadius: '20px',
                    fontSize: '0.85rem'
                  }}
                >
                  {skill}
                </div>
              ))}
            </div>

            <br />
            <h1 className="scroll-animation" data-aos="fade-up">
              Projects
            </h1>

            <div className="item scroll-animation" data-aos="fade-right">
              <h2>Clinical Decision Support Tools</h2>
              <p>A collection of medical calculators and decision support tools</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Built with JavaScript and Python</li>
                <li>Implemented evidence-based algorithms for clinical decision making</li>
                <li>Created intuitive user interfaces for healthcare providers</li>
              </ul>
            </div>

            <div className="item scroll-animation" data-aos="fade-left">
              <h2>Query Builder</h2>
              <p>Platform for data analysts and developers to execute custom queries</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Supports PostGreSQL, MySQL, and MongoDB databases</li>
                <li>Created data visualizer for query results</li>
                <li>Reusable and customizable templates for data analysis</li>
              </ul>
            </div>

            <div className="item scroll-animation" data-aos="fade-right">
              <h2>Placenotes</h2>
              <p>Location-based social platform with geofencing and real-time notifications</p>
              <ul style={{ listStyleType: 'disc', paddingLeft: '20px', fontSize: '0.9rem' }}>
                <li>Full-stack React/Node.js application with GraphQL subscriptions</li>
                <li>Implemented high-performance data architecture with geospatial indexing</li>
                <li>Integrated Tiptap rich text editor with markdown support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
