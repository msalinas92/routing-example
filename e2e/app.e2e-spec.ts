import { Holaangular2Page } from './app.po';

describe('holaangular2 App', () => {
  let page: Holaangular2Page;

  beforeEach(() => {
    page = new Holaangular2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
