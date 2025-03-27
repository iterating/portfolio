/**
 * Portfolio Data Configuration
 * Contains projects data for the portfolio section
 */

export const portfolioData = {
    sectionTitle: "websites",
    sectionHeading: "Client",
    sectionHeadingSpan: "Websites",
    projects: [
      {
        id: 1,
        title: "Dental Associates of Cape Cod",
        link: ["assets/images/portfolio.webdentist.dentalcapecod.desktop1.jpeg", "assets/images/portfolio.webdentist.dentalcapecod.desktop2.jpeg"],
        image: "assets/images/portfolio.webdentist.dentalcapecod.desktop2.jpeg",
        type: "portfolio-full",
        animation: "fade-up",
        categories: ["Wordpress", "PHP"],
        live: "https://www.dentalcapecod.com/",
      },
      {
        id: 3,
        title: "Worcester Dental Group",
        link: ["assets/images/portfolio.webdentist.worcesterdentistgroup.jpg", "assets/images/portfolio.webdentist.worcesterdentistgroup.desktop1.jpg", "assets/images/portfolio.webdentist.worcesterdentistgroup.desktop2.jpg"],
        image: "assets/images/portfolio.webdentist.worcesterdentistgroup.desktop2.jpg",
        type: "portfolio-full",
        animation: "fade-right",
        categories: ["Wordpress", "PHP"],
        live: "https://www.worcesterdentistgroup.com/",
      },
      {
        id: 4,
        title: "West Roxbury Dentistry",
        link: ["assets/images/portfolio.webdentist.westroxbury.png"],
        image: "assets/images/portfolio.webdentist.westroxbury.png",
        type: "portfolio-full",
        animation: "fade-up",
        categories: ["Vue.js", "Javascript", "Nuxt"]
      }
    ]
  };
  