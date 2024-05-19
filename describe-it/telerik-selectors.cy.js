/// <reference types="cypress"/>
describe('selectors', () => {
    it('find selectors for html elements', () => {
        cy.visit("https://www.telerik.com/support/demos")
        cy.get("h1").contains("Demos")
        cy.get('[href="#testing"]')
        cy.get("#conversational-ui")
        cy.get(".TK-Footer-Link").eq(6)
        cy.get(".TK-Footer-List-Social")
        
            
        });
    })