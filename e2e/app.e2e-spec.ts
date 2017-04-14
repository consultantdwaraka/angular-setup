import { AngularSetupPage } from './app.po';

describe('angular-setup App', function() {
  let page: AngularSetupPage;

  beforeEach(() => {
    page = new AngularSetupPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
