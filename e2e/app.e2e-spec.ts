import { AppPage } from './app.po';

describe('table', () => {
  const page: AppPage = new AppPage();
  let data;

  beforeEach(() => {
    data = page.getTable();
  });
  describe('pagination', () => {
    it('should display 10 rows when default configuration', async () => {
      const table = await data.getText();
      expect(table.length).toEqual(10);
      const row = await data.get(0).getText();
      expect(row).toEqual('+1 (949) 527-2108\n' +
        '36\n' +
        'KONGENE\n' +
        'Deanne Contreras\n' +
        'false');
    });
    it('should pagination NEXT button show next 10 elements', async () => {
      await page.clickPaginationNext();
      const row = await data.get(0).getText();
      expect(row).toEqual('+1 (902) 500-3665\n' +
        '28\n' +
        'CALCULA\n' +
        'Wilson Hatfield\n' +
        'true');
    });
    it('should pagination PREV button show previous 10 elements', async () => {
      await page.clickPaginationPrev();
      const row = await data.get(0).getText();
      expect(row).toEqual('+1 (949) 527-2108\n' +
        '36\n' +
        'KONGENE\n' +
        'Deanne Contreras\n' +
        'false');
    });
    it('should display 10 rows from 2 page, when pagination "2" clicked', async () => {
      await page.clickPagination2nd();
      const table = await data.getText();
      expect(table.length).toEqual(10);
      const row = await data.get(0).getText();
      expect(row).toEqual('+1 (902) 500-3665\n' +
        '28\n' +
        'CALCULA\n' +
        'Wilson Hatfield\n' +
        'true');
    });
  });
  describe('row amount', () => {
    it('should display 5 rows when row amount clicked to 5', async () => {
      await page.click5Rows();
      const table = await data.getText();
      expect(table.length).toEqual(5);
    });
    it('should display 10 rows when row amount clicked to 10', async () => {
      await page.click10Rows();
      const table = await data.getText();
      expect(table.length).toEqual(10);
    });
    it('should display 25 rows when row amount clicked to 25', async () => {
      await page.click25Rows();
      const table = await data.getText();
      expect(table.length).toEqual(25);
    });
    it('should display 50 rows when row amount clicked to 50', async () => {
      await page.click50Rows();
      const table = await data.getText();
      expect(table.length).toEqual(50);
    });
    it('should display more than 50 rows when row amount clicked to 100', async () => {
      await page.click100Rows();
      const table = await data.getText();
      expect(table.length).toBeGreaterThan(50);
    });
  });
});
