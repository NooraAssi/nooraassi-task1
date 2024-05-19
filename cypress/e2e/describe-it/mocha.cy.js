/// <reference types="cypress"/>
describe ("check create new account", () => {
    beforeEach(() => {
            cy.visit("https://magento.softwaretestingboard.com/")
            cy.get("#search").type("shirt {enter}")
            cy.get(".product-item-info").eq(1).click()
            cy.get("#option-label-size-143-item-168").click()
            cy.get("#option-label-color-93-item-57").click()
            cy.get("#product-addtocart-button").click()
            
      
    })
    it('verify that all fields are visible in creat new account page', () => {
        cy.get(".counter-number").should("be.visible")

        it.only('delete product', () => {
            cy.get(".action showcart").click()
            cy.get(".action delete").click
        });
    })
})