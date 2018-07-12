/// <reference types="Cypress" />

context('Column template', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/col-template');
    },
  );

  it('phone column has green colour', () => {
    cy.get('#table > tbody > tr:nth-child(1) > td:nth-child(1) > div')
      .should('have.class', 'phone');
  });
});
