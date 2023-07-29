/// <reference types="cypress" />

const el = require('./menuElements').menuElements
const data = require("../../fixtures/menus.json")

class Menu {

    selectForYouPage() {
        cy.get(el.MNU_FOR_YOU)
            .contains(data.forYou)
            .should("be.visible")
            .click()
    }
}

export default new Menu()