const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // This is the base URL for your local development server.
    // Cypress will use this as a prefix for all `cy.visit()` or `cy.request()` commands.
    baseUrl: 'http://localhost:4321',

    // Default screen size for running tests.
    viewportWidth: 1280,
    viewportHeight: 720,

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});