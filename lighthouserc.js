// lighthouserc.js

module.exports = {
  ci: {
    collect: {
      url: [
        'https://teachforamerica.org',
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
