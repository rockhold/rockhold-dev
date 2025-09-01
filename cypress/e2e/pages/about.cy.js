describe("About Page", () => {
  it("should load the About page", () => {
    cy.visit("/about");
    cy.contains("About").should("be.visible");
    cy.contains("Hi, I'm Brandon").should("be.visible");
  });
});
