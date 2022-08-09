const LOCAL_HOST_PORT = "http://localhost:3000"


describe("navigates to dashboard", () => {
    beforeEach(() => {
      cy.visit(LOCAL_HOST_PORT);
    });

    it("", () => {
      cy.contains("View More");
      cy.get(':nth-child(3) > .list-item-container > .ViewMore-btn').click();
      cy.get('.project-stage-card > :nth-child(3)').contains("div", "Design");
    });
  /*   
    it("clicking anywhere on gray screen does nothing", () => {
      cy.root().click(100, 100);
      cy.contains(DISCLAIMER_TEXT);
    }); */
  });
  