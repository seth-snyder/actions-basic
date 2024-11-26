// lighthouserc.js

module.exports = {
  ci: {
    collect: {
      url: [
        'https://www.teachforamerica.org/',
        'https://www.teachforamerica.org/what-we-do/our-work',
        'https://www.teachforamerica.org/what-we-do/our-impact',
        'https://www.teachforamerica.org/donate',
        'https://www.teachforamerica.org/faqs',
        'https://www.teachforamerica.org/what-we-do/our-organization',
        'https://www.teachforamerica.org/press',
        'https://www.teachforamerica.org/ignite-fellowship',
        'https://www.teachforamerica.org/apply/application-process',
        'https://www.teachforamerica.org/join-us',
        'https://www.teachforamerica.org/teach-for-america-corps',
        'https://www.teachforamerica.org/where-we-work',
        'https://www.teachforamerica.org/contact-us',
        'https://www.teachforamerica.org/accessibility',
        'https://www.teachforamerica.org/stories/how-change-happens',
        'https://www.teachforamerica.org/the-terms-of-use-agreement',
        'https://www.teachforamerica.org/eligibility/',
        'https://www.teachforamerica.org/tfa-careers',
        'https://www.teachforamerica.org/privacy-policy'
        
        // ex) 'http://localhost:3000'
        // add additional urls to audit
      ],
      numberOfRuns: 1,
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};
