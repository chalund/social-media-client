describe("Authentication", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearLocalStorage();
    });

    it("can login" , () => {
        cy.visit("/")
        cy.wait(1000)
        cy.get(".btn-close:visible").click();
        cy.wait(1000)
        cy.get("button[data-auth='login']:visible").click();
        cy.wait(1000)
        cy.get("input[type='email']:visible").should("exist").type("cha@noroff.no");
        cy.wait(1000)
        cy.get("input[type='password']:visible").should("exist").type("12345678");
        cy.wait(1000)
        cy.get(".btn-success:visible").click();
        cy.window({ log: false }).then((win) => {
            cy.wrap(null, { timeout: 3000 }).should(() => {
            const profile = win.localStorage.getItem("profile");
            const token = win.localStorage.getItem("token");
            expect(profile).to.not.be.null;
            expect(token).to.not.be.null;
            });
        });
    
        cy.url().should("include", "profile");
        });
    });