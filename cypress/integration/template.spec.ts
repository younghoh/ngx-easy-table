/// <reference types="Cypress" />

context('Template', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/template');
    },
  );

  it('shows row template', () => {
    cy
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1)').contains('Deanne Contreras')
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(3) > div').contains('Company: KONGENE')
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(5) > span').contains('Phone: +1 (949) 527-2108')
    ;
  });
});
