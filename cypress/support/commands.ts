/// <reference types="Cypress" />

declare global {
  namespace Cypress {
    interface Chainable<Subject = any> {
      goToMenu: (name: string) => Cypress.Chainable<JQuery>;
      goToMenuSort: () => Cypress.Chainable<JQuery>;
      goToMenuPersistState: () => Cypress.Chainable<JQuery>;
      tableRow: (tr: number, td: number) => Cypress.Chainable<JQuery>;
      getInput: (name: string) => Cypress.Chainable<JQuery>;
    }
  }
}

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
