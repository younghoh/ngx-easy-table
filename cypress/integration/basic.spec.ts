/// <reference types="Cypress" />

context('Basic config', () => {
  before(() => {
      cy.visit('localhost:4200');
    },
  );

  it('gets correct phone when no config', () => {
    cy.get('#table > tbody > tr:nth-child(1) > td:nth-child(1) > div')
      .contains('+1 (949) 527-2108');
  });
});
