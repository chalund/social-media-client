describe("Authentication", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.clearLocalStorage();
    });

    it("can login and access profile", () => {
      cy.visit("/");
      cy.wait(1000);
      cy.get(".btn-close:visible").click({ multiple: true });
      cy.wait(1000);
      cy.get("button[data-auth='login']:visible").click({ multiple: true });
      cy.wait(1000);
      cy.get("input[type='email']:visible").should("exist").type("hellouser@noroff.no");
      cy.wait(1000);
      cy.get("input[type='password']:visible").should("exist").type("12345678");
      cy.wait(1000);
      cy.get(".btn-success:visible").click({ multiple: true });
      cy.window().should((win) => {
        const profile = win.localStorage.getItem("profile");
        const token = win.localStorage.getItem("token");
        expect(profile).to.not.be.null;
        expect(token).to.not.be.null;
        });
      });
    
      cy.url().should("include", "profile");
    });

    it("cannot submit login form with invalid credentials and is shown a message", () => {
      cy.visit("/");
      cy.wait(1000);
      cy.get(".btn-close:visible").click({ multiple: true });
      cy.wait(1000);
      cy.get("button[data-auth='login']:visible").click({ multiple: true });
      cy.wait(1000);
      cy.get("input[type='email']:visible").should("exist").type("hellouser@noroff.no");
      cy.wait(1000);
      cy.get("input[type='password']:visible").should("exist").type("1234567890");
      cy.wait(1000);
      cy.get("button[type='submit']:visible").click({ multiple: true });
      cy.wait(1000);
    
      cy.get("#loginModal:visible")
        .should("exist")   
        .should("be.visible")  
        .then(() => {
          cy.log("Login modal is visible");
        });
    });
    

    it("can logout with the logout button" , () => {
        cy.visit("/")
        cy.wait(1000)
        cy.get(".btn-close:visible").click({ multiple: true });
        cy.wait(1000)
        cy.get("button[data-auth='login']:visible").click({ multiple: true });
        cy.wait(1000)
        cy.get("input[type='email']:visible").should("exist").type("hellouser@noroff.no");
        cy.wait(1000)
        cy.get("input[type='password']:visible").should("exist").type("12345678");
        cy.wait(1000)
        cy.get(".btn-success:visible").click({ multiple: true });
        cy.wait(1000)
        cy.get("button[data-auth='logout']:visible").click({ multiple: true });
    });

});