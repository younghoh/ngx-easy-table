import { AppPage } from './app.po';

describe('table', () => {
  const page: AppPage = new AppPage();
  let data;

  beforeEach(() => {
    page.refresh();
    data = page.getTableFirstRow();
  });
  describe('global search', () => {
    it('should find 1 row when global filtering by phone', async () => {
      await page.globalSearch('+1 (917)');
      const row = await data.getText();
      expect(row).toEqual('+1 (917) 448-2782\n' +
        '40\n' +
        'VETRON\n' +
        'Wallace Patton\n' +
        'true');
    });
  });
  describe('search', () => {
    it('should find 1 row when filtering by name', async () => {
      await page.searchByName('Baldwin');
      const row = await data.getText();
      expect(row).toEqual('+1 (853) 562-3369\n' +
        '38\n' +
        'ENTROFLEX\n' +
        'Baldwin Burnett\n' +
        'true');
    });
  });
});
