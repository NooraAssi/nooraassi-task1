/// <reference types="cypress"/>
describe ("check create new account", () => {
    it('verify that all fields are visible in creat new account page', () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.get(".page-title")
        cy.get("span").contains("Personal Information").should("be.visible")
        cy.get("span").contains("First Name").should("be.visible") 
        cy.get("span").contains("Last Name").should("be.visible")   
        cy.contains("span", "Sign-in Information").should("be.visible")
        cy.contains("span", "Email").should("be.visible")
        cy.contains("span", "Password").should("be.visible")
        cy.contains("span", "Confirm Password").should("be.visible")
        cy.get("#password-strength-meter")
        cy.contains("button", "Create an Account").should("be.visible")
        cy.get("#firstname").should("be.visible")
        cy.get(".fieldset create account").should("be.visible")

        it.only('validate tha the user', () => {
            cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
            cy.get("#firstname").type("nora")
            cy.get("#lastname").type("assi")
            cy.get("#email_address").type("assinoora@gmail.com")
            cy.get("#password").type(12345677)
            cy.get("#password-confirmation").type(12345677)
            cy.get(".fieldset create account").click()
            

            
        });
    })
})