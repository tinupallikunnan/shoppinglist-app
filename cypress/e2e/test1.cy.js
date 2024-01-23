describe('Visits shopping app page and tests the elements', () => {
  it('successfully loads', () => {
    cy.visit('../../index.html') 

    // Checking if the 'add' button exists
    // Checking if an item in the list is ticked off
    // Checking if the delete button removes an item from the list
  
    cy.contains("[button-cy=addButton]", "Add").should("be.visible").click();

    cy.get("[input-cy=inputBox]").type("bananas");
    cy.get("[button-cy=addButton]").click();
    cy.get("#list-container").should("contain", "bananas");

    cy.get("li").click();
    cy.get('[class=checked]').should("be.visible")

    cy.get("span").click();
    cy.get("#list-container").should("contain", "");
  });
})

  
