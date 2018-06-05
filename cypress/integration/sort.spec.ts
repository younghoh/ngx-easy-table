/// <reference types="Cypress" />

context('Sort', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/sort');
    },
  );

  it('gets correct company name when "Company" clicked', () => {
    cy.get('#table > thead > tr > th:nth-child(3)')
      .click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1) > div')
      .contains('+1 (934) 551-2224')
      .get('#table > thead > tr > th:nth-child(3)')
      .click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(3) > div')
      .contains('ARCHITAX');
  });
});
