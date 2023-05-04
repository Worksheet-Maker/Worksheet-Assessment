const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "baseUrl":"https://standards.myworksheetmaker.com/",
    // defaultCommandTimeout:40000,
    // requestTimeout:30000,
    // responseTimeout:50000,
    // pageLoadTimeout:100000,
    // viewportWidth:1500,
     viewportHeight:1000,
    //specPattern:"cypress/e22/**/*.cy{js,jsx,ts,tsx}",
    "chromeWebSecurity":false,
  },
});
