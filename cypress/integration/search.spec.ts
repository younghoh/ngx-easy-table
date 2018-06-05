/// <reference types="Cypress" />

context('Search', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/search');
    },
  );

  it('gets correct company name when "COLAIRE" typed', () => {
    cy.get('#search_company')
      .type('COLAIRE').should('have.value', 'COLAIRE')
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1) > div')
      .contains('+1 (998) 546-2953')
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(3) > div')
      .contains('COLAIRE');
  });
  it('gets correct age when "34" typed', () => {
    cy.get('#search_company')
      .type('{selectall}{backspace}').should('have.value', '')
      .get('#search_age')
      .type('34').should('have.value', '34')
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1) > div')
      .contains('+1 (939) 530-3189')
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(3) > div')
      .contains('MARKETOID');
  });
});
