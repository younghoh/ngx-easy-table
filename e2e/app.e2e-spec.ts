import { AppPage } from './app.po';

describe('table', () => {
  const page: AppPage = new AppPage();
  let data;
  let pagination;

  beforeEach(() => {
    data = page.getTable();
    pagination = page.getPagination();
  });

  describe('pagination', () => {
    it('should display next 10 rows when pagination "2" clicked', async () => {
      await pagination.get(2).click();
      const table = await data.getText();
      expect(table.length).toEqual(10);
    });
    it('should display 5 rows when pagination "2" clicked and row amount set to 5', async () => {
      await page.click5Rows();
      await pagination.get(2).click();
      const table = await data.getText();
      expect(table.length).toEqual(5);
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

  it('should get first row from table', () => {
    const firstRow = data.get(0);
    firstRow.getText().then((row) => {
      expect(row)
        .toEqual('+1 (949) 527-2108\n' +
          '36\n' +
          'KONGENE\n' +
          'Deanne Contreras\n' +
          'false');
    });
  });
});
