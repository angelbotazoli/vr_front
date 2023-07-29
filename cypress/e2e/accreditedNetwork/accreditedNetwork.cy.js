/// <reference types="cypress" />

import Menu from '../../support/menu/menu'
import ForYouPage from '../../support/forYou/forYouPage'

context('Accredited network page', () => {

  describe('Access the accredited network of my vr card', () => {

    beforeEach(() => {
      cy.accessSite()
    });

    afterEach(() => {
      cy.screenshot()
    });

    it('To access the accredited networK', () => {
      Menu.selectForYouPage()
      ForYouPage.clickAccreditedNetworK()
    });
  });
});