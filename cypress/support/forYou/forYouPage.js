/// <reference types="cypress" />

const el = require('./forYouElements').forYouElements
const data = require("../../fixtures/forYouPage.json")

class ForYouPage {

    clickAccreditedNetworK() {
        cy.get(el.BTN_WHERE_TO_USE_MY_CARD)
            .contains(data.btn_whereToUseMyCard)
            .should("be.visible")
            .click({ scrollBehavior: false })

        cy.get(el.LBL_ACCREDITED_NETWORK)
            .scrollIntoView()

        cy.wait(6000)

        cy.fixture('urls').then((value) => {
            cy.url().should('include', value.forYou)
        });

        this.imageExist()
    }

    imageExist(){
        cy.get(el.IMG_MAP).should('be.visible')
    }
}

export default new ForYouPage()