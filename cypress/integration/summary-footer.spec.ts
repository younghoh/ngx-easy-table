/// <reference types="Cypress" />

context('Summary footer', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/summary-footer');
    },
  );

  it('has 40 items in the first th', () => {
    cy.get('#table2 > div > #table > tfoot > tr > th:nth-child(1)')
      .contains('Total items: 40');
  });
  it('has 1200 items in the second th', () => {
    cy.get('#table2 > div > #table > tfoot > tr > th:nth-child(2)')
      .contains('Summary: 1200');
  });
});
