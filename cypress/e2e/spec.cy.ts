/// <reference types="cypress" />
describe("Reg form", () => {
  it("enter some value", ()=> {
      cy.visit("https://qavbox.github.io/demo/signup/");
      cy.get("#username", {log:false}).type("binoy");
      cy.get("input[name='home']", {log: false}).click();
  })

  it("Delaying the calls", () => {
    cy.visit('https://qavbox.github.io/demo/delay/')
    cy.get("input[value='Try me!']").click()
    cy.get('#delay', {timeout:5000}).should('have.text', "I appeared after 5 sec")
  })

  // get browser element value | text | any properties in cypress
  

})