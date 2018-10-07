/// <reference types="Cypress" />

context('Basic config', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/basic');
    },
  );

  it('gets correct phone when no config', () => {
    cy.get('#table > tbody > tr:nth-child(1) > td:nth-child(2) > div')
      .contains('+1 (949) 527-2108');
  });
});
