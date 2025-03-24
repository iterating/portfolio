/**
 * Portfolio Data Configuration
 * Contains projects data for the portfolio section
 */

export const portfolioData = {
  sectionTitle: "projects",
  sectionHeading: "Featured",
  sectionHeadingSpan: "Projects",
  projects: [
    {
      id: 1,
      title: "LA Film Lab Ordering System",
      link: "https://lafilmlab.com",
      image: "assets/images/portfolio.FilmLab.kiosk.png",
      type: "portfolio-full",
      animation: "fade-up",
      categories: ["NodeJS", "Nuxt/Vue.js", "Typescript", "PostgresSQL"]
    },
    {
      id: 2,
      title: "Medical Decision Tools",
      link: "https://sirscalc.vercel.app/",
      image: "assets/images/portfolio.sirscalc.gif",
      type: "portfolio-half",
      animation: "fade-up",
      categories: ["Python", "Flask", "React", "RESTful APIs"]
    },
    {
      id: 3,
      title: "Placenotes Location First Social Platform",
      link: "https://placenotes.vercel.app/",
      image: "assets/images/portfolio.placenotes.checklist.jpg",
      type: "portfolio-half",
      animation: "fade-right",
      categories: ["React Native", "Redux", "GraphQL", "MongoDB"]
    },
    {
      id: 4,
      title: "Query Builder",
      link: "https://querybuilder.vercel.app/",
      image: "assets/images/portfolio.querybuilder.gif",
      type: "portfolio-half",
      animation: "fade-right",
      categories: ["React", "MySQL / MongoDB / PostgresSQL", "NodeJS"]
    },
    {
      id: 5,
      title: "Greater Boston Snow Removal Business Platform",
      link: "https://greaterbostonsnowremoval.com",
      image: "assets/images/portfolio.GBSnow.1.png",
      type: "portfolio-half",
      animation: "fade-up",
      categories: ["Typescript", "NodeJS", "Microservices Architecture"]
    },
    {
      id: 6,
      title: "Tableau Data Cleaner",
      link: "https://tableaucleaner.com",
      image: "assets/images/portfolio.tableaucleaner.screenshot.png",
      type: "portfolio-half",
      animation: "fade-up",
      categories: ["React", "NodeJS"]
    }
  ]
};
