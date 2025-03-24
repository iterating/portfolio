/**
 * Pricing Data Configuration
 * Contains pricing packages data for the portfolio
 */

export const pricingData = {
  sectionTitle: "pricing",
  sectionHeading: "My",
  sectionHeadingSpan: "Pricing",
  packages: [
    {
      id: 1,
      type: "basic",
      description: "Have design ready to build?\nor small budget",
      price: "$49",
      unit: "/ hours",
      features: [
        "Need your wireframe",
        "Design with Figma, Framer",
        "Implement with Webflow, React, WordPress, Laravel/PHP",
        "Remote/Online",
        "Work in business days, no weekend.",
        "Support 6 months"
      ],
      ctaText: "pick this package",
      ctaLink: ""
    },
    {
      id: 2,
      type: "premium",
      description: "Not have any design?\nLeave its for me",
      price: "$99",
      unit: "/ hours",
      features: [
        "Don't need wireframe or anything",
        "Design with Figma, Framer from scratch",
        "Implement with Webflow, React, WordPress, Laravel/PHP",
        "Remote/Online",
        "Work with both weekend",
        "Support 12 months",
        "Your project alway be priority",
        "Customer care gifts"
      ],
      ctaText: "pick this package",
      ctaLink: ""
    }
  ],
  contactInfo: {
    text: "Don't find any package match with your plan!\nWant to setup a new tailor-made package for only you?.",
    linkText: "Contact Us",
    linkUrl: ""
  }
};
