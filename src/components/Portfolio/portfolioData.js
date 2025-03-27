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
      type: "portfolio-half",
      animation: "fade-up",
      categories: ["NodeJS", "Nuxt/Vue.js", "Typescript", "Webhooks","PostgresSQL"]
    },
    {
      id: 2,
      title: "Greater Boston Snow Removal Business Platform",
      link: "https://greaterbostonsnowremoval.com",
      image: "assets/images/portfolio.gbsm.map.gif",
      type: "portfolio-full",
      animation: "fade-up",
      categories: ["Typescript", "NodeJS", "Microservices Architecture", "AWS"]
    },
    {
      id: 3,
      title: "Medical Decision Tools",
      link: "https://sirscalc.vercel.app/",
      image: "assets/images/portfolio.sirscalc.gif",
      type: "portfolio-full",
      animation: "fade-right",
      categories: ["Python", "Flask", "React", "REST APIs"]
    },
    {
      id: 4,
      title: "Placenotes Location First Social Platform",
      link: "https://placenotes.vercel.app/",
      image: "assets/images/portfolio.placenotes.checklist.jpg",
      type: "portfolio-full",
      animation: "fade-right",
      categories: ["React", "GraphQL", "MongoDB", "JWT Auth", "AWS"]
    },
    {
      id: 5,
      title: "Query Builder",
      link: "https://querybuilder.vercel.app/",
      image: "assets/images/portfolio.querybuilder.gif",
      type: "portfolio-full",
      animation: "fade-up",
      categories: ["React", "MySQL / MongoDB / PostgresSQL", "NodeJS"]
    },
    {
      id: 6,
      title: "Tableau Data Cleaner",
      link: "https://tableaucleaner.com",
      image: "assets/images/portfolio.tableaucleaner.screenshot.png",
      type: "portfolio-full",
      animation: "fade-left",
      categories: ["React", "Typescript", "NodeJS", "ETL Pipeline"]
    }
  ]
};
