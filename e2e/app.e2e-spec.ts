import { EShoppingPage } from './app.po';

describe('eshopping App', () => {
  let page: EShoppingPage;

  beforeEach(() => {
    page = new EShoppingPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
