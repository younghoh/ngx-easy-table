// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
Cypress.Commands.add('goToMenu', (name) => {
  cy.get(`#${name}`).click();
});
Cypress.Commands.add('goToMenuSort', () => {
  cy.get('#sort').click();
});
Cypress.Commands.add('goToMenuPersistState', () => {
  cy.get('#persist-state').click();
});
Cypress.Commands.add('tableRow', (row, column) => {
  cy.get(`#table > tbody > tr:nth-child(${row}) > td:nth-child(${column}) > div`);
});
Cypress.Commands.add('getInput', (name) => {
  cy.get(`#search_${name}`);
});
