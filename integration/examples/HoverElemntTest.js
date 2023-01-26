/// <reference types="Cypress" />;

describe("My Sixth Test Suite", () => {
  it("My Sixth Test case", () => {
    // check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("div.mouse-hover-content").invoke("show");
    cy.contains("Top").click();
    // cy.contains("Top").click({force: true});
    cy.url().should("include", "top");
  });
});
