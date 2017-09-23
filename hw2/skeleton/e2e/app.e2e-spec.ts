import { SwppHw2Page } from './app.po';

describe('swpp-hw2 App', () => {
  let page: SwppHw2Page;

  beforeEach(() => {
    page = new SwppHw2Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
