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
      await page.globalSearch('+1 (949)');
      const row = await data.getText();
      expect(row).toEqual('+1 (949) 527-2108\n' +
        '36\n' +
        'KONGENE\n' +
        'Deanne Contreras\n' +
        'false');
    });
  });
  describe('search', () => {
    it('should find 1 row when filtering by name', async () => {
      await page.searchByName('Scott Barker');
      const row = await data.getText();
      expect(row).toEqual('+1 (939) 530-3189\n' +
        '34\n' +
        'MARKETOID\n' +
        'Scott Barker\n' +
        'false');
    });
  });
});
