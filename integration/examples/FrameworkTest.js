/// <reference types="Cypress" />;
import HomePage from "../pageObjects/HomePage";
import ProductsPage from "../pageObjects/ProductsPage";

describe("My Framework Test case", () => {
  before(() => {
    cy.fixture("example").then(function (data) {
      this.data = data;
    });
  });

  it("My Framework Test case", function () {
    const homePage = new HomePage();
    const productPage = new ProductsPage();

    cy.visit("https://rahulshettyacademy.com/angularpractice/");
    homePage.getEditBox().type(this.data.name);
    homePage.getGender().select(this.data.gender);
    homePage.getTwoWayDataBinding().should("have.value", this.data.name);
    homePage.getEditBox().should("have.attr", "minlength", "2");
    homePage.getEnteroreneaur().should("be.disabled");
    homePage.getShopTab().click();
    this.data.productName.forEach((element) => {
      cy.selectProduct(element);
    });
    productPage.checkoutButton().click();
    cy.contains("Checkout").click();
    cy.get("#country").type("Poland");
    cy.get(".suggestions > ul > li > a").click();
  });
});
