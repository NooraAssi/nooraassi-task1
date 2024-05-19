/// <reference types="cypress"/>
describe("check new account page",() =>{
    it('validate all fields in create new account page', () => {
        cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
        cy.contains("span", "Create New Customer Account").should("be.visible")
        cy.contains("span", "Personal Information").should("be.visible")
        cy.contains("span", "Sign-in Information").should("be.visible")

        cy.contains("span", "First Name").should("be.visible")
        cy.contains("span", "Last Name").should("be.visible")
        cy.contains("span", "Email").should("be.visible")
        cy.contains("span", "Password").should("be.visible")
        cy.contains("span", "Confirm Password").should("be.visible")

        cy.get("#password-strength-meter").should("be.visible").and("contain", "Password Strength")
        cy.get("button").contains("Create an Account").should("be.visible")
        cy.get(".fieldset.create.account").should("have.attr","data-hasrequired","* Required Fields")

        cy.get("#firstname").should("be.visible")
        cy.get("#lastname").should("be.visible")
        cy.get("#email_address").should("be.visible")
        cy.get("#password").should("be.visible")
        cy.get("#password-confirmation").should("be.visible")

        //functinallity



        it.only('validate functionallity', () => {
            cy.visit("https://magento.softwaretestingboard.com/customer/account/create/")
            cy.get("#firstname").type("noora")
            cy.get("#lastname").type("assi")
            cy.get("#email_address").type("assinoora@gmail.com")
            cy.get("#password").type("0598374000@n")
            cy.get("#password-confirmation").type("0598374000@n")
            cy.get(".fieldset create account").click()
            
        });

        
    });

}


)