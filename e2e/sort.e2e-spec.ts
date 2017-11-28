import { AppPage } from './app.po';

describe('table sort', () => {
  const page: AppPage = new AppPage();
  let data;

  beforeEach(() => {
    page.refresh();
    data = page.getTableFirstRow();
  });
  it('should display 10 rows and sort them asc/desc when sorted by phone', async () => {
    await page.clickSortByPhone();
    const sortAscRow = await data.getText();
    expect(sortAscRow).toEqual('+1 (800) 413-3813\n' +
      '24\n' +
      'EMERGENT\n' +
      'Phillips Fry\n' +
      'false');
    await page.clickSortByPhone();
    const sortDescRow = await data.getText();
    expect(sortDescRow).toEqual('+1 (998) 546-2953\n' +
      '37\n' +
      'COLAIRE\n' +
      'Marie Molina\n' +
      'false');
  });
  it('should display 10 rows and sort them asc/desc when sorted by age', async () => {
    await page.clickSortByAge();
    const phoneAsc = await page.getTableAgeFirstValue().getText();
    expect(phoneAsc).toEqual('20');

    await page.clickSortByAge();
    const phoneDesc = await page.getTableAgeFirstValue().getText();
    expect(phoneDesc).toEqual('40');
  });
});
