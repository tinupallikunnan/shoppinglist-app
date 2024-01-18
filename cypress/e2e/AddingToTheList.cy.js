describe('Shopping cart app testing using cypress', () => {
  it('Visits app page and perform tests on elements', () => {
    cy.visit('../../index.html');

// Query to go to the app website, enter item to be added to the list
// Checking if item is present in the list
cy.get("[input-cy=inputBox]")
    .type("apples");
cy.get("[button-cy=addButton]").click();
cy.get("#list-container")
    .should("contain", "apples");
    
  })
})