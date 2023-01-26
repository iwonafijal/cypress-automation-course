/// <reference types="Cypress" />;

describe("My Third Test Suite", () => {
  it("My Third Test case", () => {
    // test case
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/");
    cy.get("#checkBoxOption1")
      .check()
      .should("be.checked")
      .and("have.value", "option1");
    cy.get("#checkBoxOption1").uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').check(["option2", "option3"]);

    cy.get("select").select("option2").should("have.value", "option2");

    // Dynamic dropdown
    cy.get("#autocomplete")
      .type("pol")
      .get(".ui-menu-item .ui-menu-item-wrapper")
      .each(($el, index, $list) => {
        if ($el.text() === "Poland") {
          cy.wrap($el).click();
        }
      });
    cy.get("#autocomplete").should("have.value", "Poland");

    // radio buttons

    cy.get('[value="radio2"]').check().should("be.checked");

    // not visible items
    cy.get("#displayed-text").should("be.visible");
    cy.get("#hide-textbox").click();
    cy.get("#displayed-text").should("not.be.visible");
    cy.get("#show-textbox").click();
    cy.get("#displayed-text").should("be.visible");
  });
});
