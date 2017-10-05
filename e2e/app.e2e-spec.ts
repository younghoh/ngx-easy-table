import { AppPage } from './app.po';

describe('table', () => {
  let page: AppPage;
  let data;
  beforeEach(() => {
    page = new AppPage();
    page.navigateTo();
    data = page.getTable();
  });

  it('should display 10 rows when default config', () => {
    data.getText().then((table) => {
      expect(table.length).toEqual(10);
    });
  });

  it('should get first row from table', () => {
    const firstRow = data.get(0);
    expect(firstRow.getText())
      .toEqual('+1 (956) 488-3403 ARTWORLDS Hahn 33 $1,843.19 false');
  });
});
