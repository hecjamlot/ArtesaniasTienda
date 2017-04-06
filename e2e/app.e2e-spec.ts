import { ArtesaniasTiendaPage } from './app.po';

describe('artesanias-tienda App', () => {
  let page: ArtesaniasTiendaPage;

  beforeEach(() => {
    page = new ArtesaniasTiendaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
