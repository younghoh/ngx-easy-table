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

  getPagination() {
    return element
      .all(by.className('ngx-container'))
      .all(by.id('pagination'))
      .all(by.css('li'));
  }

  async click5Rows() {
    return element
      .all(by.className('ngx-container'))
      .all(by.id('rowAmount'))
      .all(by.css('li:nth-child(1)'))
      .click();
  }

  async click10Rows() {
    return browser.executeScript('window.scrollTo(0,0);').then(function () {
      element
        .all(by.className('ngx-container'))
        .all(by.id('rowAmount'))
        .all(by.css('li:nth-child(2)'))
        .click();
    });
  }

  async click25Rows() {
    return browser.executeScript('window.scrollTo(0,10000);').then(function () {
      element
        .all(by.className('ngx-container'))
        .all(by.id('rowAmount'))
        .all(by.css('li:nth-child(3)'))
        .click();
    });
  }

  async click50Rows() {
    return browser.executeScript('window.scrollTo(0,10000);').then(function () {
      element
        .all(by.className('ngx-container'))
        .all(by.id('rowAmount'))
        .all(by.css('li:nth-child(4)'))
        .click();
    });
  }

  async click100Rows() {
    return browser.executeScript('window.scrollTo(0,10000);').then(function () {
      element
        .all(by.className('ngx-container'))
        .all(by.id('rowAmount'))
        .all(by.css('li:nth-child(5)'))
        .click();
    });
  }
}
