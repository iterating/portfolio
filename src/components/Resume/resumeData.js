/**
 * Resume Data Configuration
 * Contains experience, education, skills and projects data for the portfolio
 */

export const resumeData = {
  experienceSection: {
    sectionTitle: "Resume",
    sectionHeading: "Experience",
    experiences: [
      {
        id: 1,
        date: "2024 - Present",
        title: "Software Engineer (contract)",
        company: "LA Film Lab and Studio, Los Angeles CA",
        accomplishments: [
          "Developed full-stack solutions with component-driven architecture using TypeScript, Nuxt.js, and Node.js with Supabase",
          "Developed automated data synchronization API endpoint between Square's e-commerce platform and Supabase database",
          "Implemented real-time event architecture with SSE and REST APIs achieving <100ms latency",
          "Developed optimized order management system that reduced processing time by 25%"
        ]
      },
      {
        id: 2,
        date: "2021 - 2024",
        title: "Web Developer (contract)",
        company: "Greater Boston Snow Removal, Boston MA",
        accomplishments: [
          "Architected and implemented scalable microservices platform that transformed company into Boston's market leader",
          "Designed event-driven microservices architecture using TypeScript and Node.js, achieving 99.9% uptime",
          "Built location-based worker matching system using Google Cloud API and MongoDB geospatial indexing",
          "Implemented robust security infrastructure with JWT-based authentication and role-based access control"
        ]
      },
      {
        id: 3,
        date: "2018 - 2020",
        title: "Operations Manager",
        company: "Greater Boston Snow Removal, Boston MA",
        accomplishments: [
          "Led operations transformation resulting in 500% revenue growth while maintaining 100% client retention",
          "Managed 6-person team and implemented route optimization system",
          "Leveraged Excel and Tableau to create comprehensive dashboards for KPI tracking",
          "Developed custom analytics tools to track team performance and route efficiency"
        ]
      },
      {
        id: 4,
        date: "2014 - 2015",
        title: "Clinical User Specialist Intern",
        company: "Vecna Healthcare, Burlington MA",
        accomplishments: [
          "Developed EMR user interfaces that reduced clinical documentation time by 35%",
          "Spearheaded UI/UX improvements that increased user satisfaction by 40%",
          "Reduced system deployment time by 60% through automation with Ansible",
          "Maintained 99.9% uptime for critical healthcare systems"
        ]
      },
      {
        id: 5,
        date: "2011 - 2013",
        title: "Research Assistant in Vaccine Immunology",
        company: "Vaccine Immunotherapy Center, Massachusetts General Hospital, Boston MA",
        accomplishments: [
          "Performed groundbreaking transplant immunology research",
          "Utilized Python to perform statistical analyses of data from in-vitro and microarray experiments",
          "Programmed 'Cellbot', an automated cell counting program in Java and ImageJ",
          "Published in American Journal of Transplantation"
        ]
      }
    ]
  },
  educationSection: {
    sectionHeading: "Education",
    educationItems: [
      {
        id: 1,
        date: "2024",
        institution: "Per Scholas",
        degree: "Software Engineering Track, GPA: 4.0",
        accomplishments: [
          "Completed intensive training in enterprise software development practices and Agile methodologies",
          "Achieved top performance (4.0 GPA) while applying existing development experience to new projects"
        ]
      },
      {
        id: 2,
        date: "2015 - 2018",
        institution: "University Of Massachusetts Chan Medical School",
        degree: "M.D. Candidate",
        accomplishments: [
          "Won American College of Physicians National Abstract Competition",
          "Published in ACP Impact and presented at Digestive Disease Interventions",
          "Applied statistical analysis and diagnostic frameworks to complex problem-solving"
        ]
      },
      {
        id: 3,
        date: "2007 - 2010",
        institution: "Tufts University",
        degree: "B.Sc. GPA: 3.7",
        accomplishments: [
          "Graduated Magna Cum Laude with Thesis Honors",
          "Published research in Organic and Biomolecular Chemistry",
          "Managed IT infrastructure as Computer Lab Administrator"
        ]
      },
      {
        id: 4,
        date: "",
        institution: "Choate Rosemary Hall",
        degree: "",
        accomplishments: [
          "American Invitational Mathematics Examination (AIME) Qualifier",
          "Recognized for exceptional analytical skills and mathematical modeling",
          "Demonstrated advanced problem-solving capabilities"
        ]
      }
    ]
  },
  skillsSection: {
    sectionHeading: "Skills",
    skills: [
      "Typescript/Javascript",
      "LangChain",
      "Python, Flask, Numpy, Scipy",
      "GraphQL, RESTful web services",
      "PostgreSQL, MySQL, MongoDB",
      "React, Nuxt, Vue",
      "HTML5/CSS3",
      "AWS, EC2, DynamoDB",
      "Docker",
      "Git, Linux environments",
      "Figma, Illustrator, Photoshop",
      "Excel, Tableau"
    ]
  },
  projectsSection: {
    sectionHeading: "Projects",
    projects: [
      {
        id: 1,
        title: "Clinical Decision Support Tools",
        description: "A collection of medical calculators and decision support tools",
        details: [
          "Built with JavaScript and Python",
          "Implemented evidence-based algorithms for clinical decision making",
          "Created intuitive user interfaces for healthcare providers"
        ]
      },
      {
        id: 2,
        title: "Query Builder",
        description: "Platform for data analysts and developers to execute custom queries",
        details: [
          "Supports PostGreSQL, MySQL, and MongoDB databases",
          "Created data visualizer for query results",
          "Reusable and customizable templates for data analysis"
        ]
      }
    ]
  }
};
