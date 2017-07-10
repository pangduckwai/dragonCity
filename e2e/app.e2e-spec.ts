import { DragonCityPage } from './app.po';

describe('dragon-city App', () => {
  let page: DragonCityPage;

  beforeEach(() => {
    page = new DragonCityPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
