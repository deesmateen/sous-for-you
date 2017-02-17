import { SousForYouPage } from './app.po';

describe('sous-for-you App', function() {
  let page: SousForYouPage;

  beforeEach(() => {
    page = new SousForYouPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
