/// <reference types="cypress"/>
describe ("check the fields in sign up page", ()=> {
    it('find selectors', () => {
        cy.visit("https://demo.productionready.io/#/register")
        cy.get(".navbar-brand")
        cy.contains("Home")
        cy.get(".nav-item").contains("Sign up")
        cy.contains("h1","Sign up")
        cy.contains("Have an account")
        cy.get(".form-group").eq(0)
        cy.get(".form-group").eq(1)
        cy.get(".form-group").eq(2)
        cy.get("[type='submit']")
        cy.contains("footer","conduit")
        cy.get(".logo-font")
        cy.get(".attribution")
       
    });
})
