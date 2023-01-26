/// <reference types="Cypress" />;

describe("My Fourth Test Suite", () => {
  it("My Fourth Test case", () => {
    // check boxes
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#alertbtn").click();
    cy.get('[value="Confirm"]').click();
    // window:alert
    cy.on("window:alert", (str) => {
      // mocha
      expect(str).to.equal(
        "Hello , share this practice page and share your knowledge"
      );
    });
    cy.on("window:confirm", (str) => {
      // mocha
      expect(str).to.equal("Hello , Are you sure you want to confirm?");
    });
    // remove attribute
    cy.get("#opentab").invoke("removeAttr", "target").click();
    cy.url().should("include", "rahulshettyacademy");
    cy.go("back");
  });
});
