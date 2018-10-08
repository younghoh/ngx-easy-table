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
  it('gets correct name sorted by locale when "Name" clicked', () => {
    cy
      .get('#table > thead > tr > th:nth-child(4)').click()
      .get('#table > thead > tr > th:nth-child(4)').click()
      .get('#pagination-controls > pagination-template > ul > li:nth-child(5)').click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(4) > div').contains('Monica Frazier')
      .get('#table > tbody > tr:nth-child(2) > td:nth-child(4) > div').contains('Mónica Glover')
      .get('#table > tbody > tr:nth-child(3) > td:nth-child(4) > div').contains('Moody Blevins')
      .get('#table > tbody > tr:nth-child(4) > td:nth-child(4) > div').contains('Myles Blair')
    ;
  });
});
