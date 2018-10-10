/// <reference types="Cypress" />

context('Dynamic configuration', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/dynamic-configuration');
    },
  );

  it('collapses details row', () => {
    cy
      .get('#table > tbody > tr:nth-child(2) > td:nth-child(1) > div').contains('+1 (878) 515-3653')
      .get('#table > tbody > tr:nth-child(2) > td:nth-child(2) > div').contains('32')
      .get('#content > div > app-dynamic-configuration > div:nth-child(3) > div > div > label:nth-child(4)').click()
      .get('#table > tbody > tr:nth-child(2) > td > div > h2').contains('+1 (949) 527-2108')
      .get('#table > tbody > tr:nth-child(2) > td > div > h5').contains('Deanne Contreras - 36')
    ;
  });
});
