const email = "workflowtester1@noroff.no";
const password = "12345678"

describe("Logout test", () => {
    it("user can log out with the logout button", () => {
      cy.visit("/");
      cy.wait(1000);
      cy.get("#registerForm button[type=button]").contains("Login").click();
      cy.wait(1000);
      cy.get("#loginEmail").type(email, "{enter}");
      cy.get("#loginPassword").type(password);
      cy.get("#loginForm button[type=submit]").contains("Login").click();
      cy.wait(1000);
      cy.url().should("include", "profile");
      cy.get("button[data-auth='logout']:visible").click();
      cy.url().should("not.include", "profile");
    });
  });