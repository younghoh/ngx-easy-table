/// <reference types="Cypress" />

context('Pinned column', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/pinned');
    },
  );
  it('by default first column is pinned', () => {
    cy
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1)').should('have.class', 'ngx-table__header-cell pinned-left')
      .get('#table > tbody > tr:nth-child(2) > td:nth-child(1)').should('have.class', 'pink')
    ;
  });
  it('uses API to set 2nd column pinned', () => {
    cy
      .get('#setColumn2Pinned').click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1)').should('have.class', 'ngx-table__header-cell pinned-left')
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(2)').should('have.class', 'ngx-table__header-cell pinned-left')
      .get('#setColumn2UnPinned').click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1)').should('have.class', 'ngx-table__header-cell pinned-left')
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(2)').should('have.class', 'ngx-table__header-cell')
    ;
  });
});
