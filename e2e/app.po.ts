import { browser, by, element } from 'protractor';

export class AppPage {

  constructor() {
  }

  refresh() {
    return browser.get('/');
  }

  getTable() {
    return element
      .all(by.className('ngx-table'))
      .all(by.css('tbody tr'));
  }

  getTableFirstRow() {
    return element
      .all(by.className('ngx-table'))
      .all(by.css('tbody tr:nth-child(1)'))
      .get(0);
  }

  async getTablePhoneFirstValue() {
    return element
      .all(by.className('ngx-table'))
      .all(by.css('tbody tr:nth-child(1) > td:nth-child(1)'));
  }

  getTableAgeFirstValue() {
    return element
      .all(by.className('ngx-table'))
      .all(by.css('tbody tr:nth-child(1) > td:nth-child(2)'))
      .get(0);
  }

  async globalSearch(query: string) {
    return await element
      .all(by.id('search'))
      .get(0)
      .sendKeys(query);
  }

  async searchByName(name: string) {
    return await element
      .all(by.css('input[type=text]'))
      .get(4)
      .sendKeys(name);
  }

  async clickSortByPhone() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.css('ngx-table > div > div:nth-child(2) > table > thead > tr:nth-child(1) > th:nth-child(1)'))
      .click();
  }

  async clickSortByAge() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.css('ngx-table > div > div:nth-child(2) > table > thead > tr:nth-child(1) > th:nth-child(2)'))
      .click();
  }

  async getPagination() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('pagination'))
      .all(by.css('li'));
  }

  async clickPaginationPrev() {
    return await element
      .all(by.css('pagination-template ul li:nth-child(1)'))
      .click();
  }

  async clickPaginationNext() {
    return await element
      .all(by.css('pagination-template ul li:last-child'))
      .click();
  }

  async clickPagination2nd() {
    return await element
      .all(by.css('pagination-template ul li:nth-child(3)'))
      .click();
  }

  async click5Rows() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(1)'))
      .click();
  }

  async click10Rows() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(2)'))
      .click();
  }

  async click25Rows() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(3)'))
      .click();
  }

  async click50Rows() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(4)'))
      .click();
  }

  async click100Rows() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(5)'))
      .click();
  }
}
