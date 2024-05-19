/// <reference types="cypress"/>
describe ("add to wishlist", ()=> {
    it('validate that the user can add to wishlist', () => {
        cy.loginToMagento("CypressUser@gmail.com","test@123")
    });
})
