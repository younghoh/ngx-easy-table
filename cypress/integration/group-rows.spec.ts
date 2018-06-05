/// <reference types="Cypress" />

context('Group rows', () => {
  before(() => {
      cy.visit('http://127.0.0.1:4201/#/group-rows');
    },
  );

  it('group rows by active status', () => {
    cy.get('#content > div > app-group-rows > div.form-group > label:nth-child(6)')
      .click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1) > div')
      .contains('true (21)')
      .get('#table > tbody > tr:nth-child(2) > td:nth-child(1) > div')
      .contains('false (19)')
      .get('#content > div > app-group-rows > div.form-group > label:nth-child(3)')
      .click()
      .get('#table > tbody > tr:nth-child(1) > td:nth-child(1) > div')
      .contains('36 (4)');
  });
});
