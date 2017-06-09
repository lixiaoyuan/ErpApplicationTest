import { ErpApplicationPage } from './app.po';

describe('erp-application App', () => {
  let page: ErpApplicationPage;

  beforeEach(() => {
    page = new ErpApplicationPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
