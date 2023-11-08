const email = "workflowtester1@noroff.no";
const password = "12345678"
const wrongEmail = "workflowtester111@noroff.no"
const wrongPassword = "1234567890"

describe("Login test", () => {
    it("should not allow user to login with wrong password", () => {
      cy.visit("/");
      cy.wait(1000);
      cy.get("#registerForm button[type=button]").contains("Login").click();
      cy.wait(1000);
      cy.get("#loginEmail").type(email, "{enter}");
      cy.get("#loginPassword").type(wrongPassword);
      cy.get("#loginForm button[type=submit]").contains("Login").click();
    });

    it("should not allow user to login with wrong email", () => {
      cy.visit("/");
      cy.wait(1000);
      cy.get("#registerForm button[type=button]").contains("Login").click();
      cy.wait(1000);
      cy.get("#loginEmail").type(wrongEmail, "{enter}");
      cy.get("#loginPassword").type(password);
      cy.get("#loginForm button[type=submit]").contains("Login").click();
    });

    it("should not allow user to login with empty input", () => {
        cy.visit("/");
        cy.wait(1000);
        cy.get("#registerForm button[type=button]").contains("Login").click();
        cy.wait(1000);
        cy.get("#loginForm button[type=submit]").contains("Login").click();
      });
  });