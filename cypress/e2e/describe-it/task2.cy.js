/// <reference types="cypress"/>
describe("check demo website", ()=>{
    
beforeEach(()=>{
    cy.login("admin@yourstore.com","admin")
    cy.wait(1500)
    cy.get("#nopSideBarPusher").click()
    cy.contains("Catalog").click()
    cy.get(".nav-item").contains("Products").last().click()
    cy.wait(3000)
});
    it('validate that the user can add new product in website', () => {
      
    cy.get("a.btn.btn-primary").click()
    cy.get("#Name").type("Laptop123")
    cy.screenshot({capture:"runner"})
    cy.get("#product-price-area > .col-md-9 > .k-widget > .k-numeric-wrap > .k-formatted-value").type(3000)
    cy.get(".k-multiselect-wrap.k-floatwrap").eq(0).type("Computers{uparrow}{enter}").wait(3000)
    cy.get(".alert.alert-success.alert-dismissable").should("contain","The new product has been added successfully.")
    });
    

    it('validate that the user can search for products in website', () => {

cy.get("#SearchProductName").type("Laptop123")
cy.get("#search-products").click()
        
    });

    it('validate that the user can delete a product in  website', () => {

        cy.get("#SearchProductName").type("Laptop123")  
        cy.get("#search-products").click()
        cy.get("input.mastercheckbox").first().check()
        cy.get("#delete-selected").click()
        cy.get("#delete-selected-action-confirmation-submit-button").click()
       // cy.get(".dataTables_empty").should("contain","No data available in table")
    });
})


 
