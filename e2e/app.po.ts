import { browser, by, element } from 'protractor';

export class AppPage {

  constructor() {
    browser.get('/');
  }

  refresh() {
    return browser.get('/');
  }

  getTable() {
    return element
      .all(by.className('ngx-table'))
      .all(by.css('tbody tr'));
  }

  async getPagination() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('pagination'))
      .all(by.css('li'));
  }

  async clickPaginationPrev() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('pagination'))
      .all(by.css('li:first-child'))
      .click();
  }

  async clickPaginationNext() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('pagination'))
      .all(by.css('li:last-child'))
      .click();
  }

  async clickPagination2nd() {
    return await element
      .all(by.className('ngx-container'))
      .all(by.id('pagination'))
      .all(by.css('li:nth-child(3)'))
      .click();
  }

  async click5Rows() {
    await browser.executeScript('window.scrollTo(0,3000);');
    return await  element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(1)'))
      .click();
  }

  async click10Rows() {
    await browser.executeScript('window.scrollTo(0,3000);');
    return await  element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(2)'))
      .click();
  }

  async click25Rows() {
    await browser.executeScript('window.scrollTo(0,3000);');
    return await  element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(3)'))
      .click();
  }

  async click50Rows() {
    await browser.executeScript('window.scrollTo(0,3000);');
    return await  element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(4)'))
      .click();
  }

  async click100Rows() {
    await browser.executeScript('window.scrollTo(0,3000);');
    return await  element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(5)'))
      .click();
  }
}
