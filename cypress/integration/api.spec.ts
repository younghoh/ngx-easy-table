/// <reference types="Cypress" />

context('API', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/api');
    },
  );
  it('clears all the inputs', () => {
    cy
      .get('#accordionHeaderInputs').click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1) > div').contains('+1 (949) 527-2108')
      .get('#table > tbody > tr:nth-child(2) > td:nth-child(1) > div').contains('+1 (882) 527-2652')
      .get('#buttonClearAllInputs').click({ force: true })
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1) > div').contains('+1 (949) 527-2108')
      .get('#table > tbody > tr:nth-child(2) > td:nth-child(1) > div').contains('+1 (878) 515-3653')
    ;
  });
  it('changes styles of the row', () => {
    cy
      .get('#accordionHeaderRow').click()
      .get('#buttonPinkRow').click()
      .get('#table > tbody > tr:nth-child(1)').should('have.class', 'pink')
      .get('#buttonBlueRow').click()
      .get('#table > tbody > tr:nth-child(2)').should('have.class', 'blue')
    ;
  });
  it('uses API to go to 1 page of the pagination', () => {
    cy
      .get('#accordionHeaderPagination').click()
      .get('#buttonSetPagination2').click()
      .get('#table > tbody > tr:nth-child(1)').contains('+1 (902) 500-3665')
      .get('#buttonSetPagination3').click()
      .get('#table > tbody > tr:nth-child(1)').contains('+1 (882) 527-2652')
    ;
  });
  it('uses API to set given amount of visible rows', () => {
    cy
      .get('#accordionHeaderPagination').click()
      .get('#buttonSetPaginationDisplayLimit3').click()
      .get('#table > tbody > tr:nth-child(1)').contains('+1 (949) 527-2108')
      .get('#table > tbody > tr:nth-child(4)').should('not.be.visible')
      .get('#buttonSetPaginationDisplayLimit10').click()
      .get('#table > tbody > tr:nth-child(1)').contains('+1 (949) 527-2108')
      .get('#table > tbody > tr:nth-child(4)').should('be.visible')
    ;
  });
});
