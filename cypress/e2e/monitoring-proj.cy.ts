const LOCAL_HOST_PORT = "http://localhost:3000";
const UPDATE_PROJECT_TEXT = "Select stage of Project";

describe("navigates to dashboard", () => {
    beforeEach(() => {
      cy.visit(LOCAL_HOST_PORT);
    });

    it("shows a dropdown selection on clicking view more", () => {
      cy.contains("View More");
      cy.get(':nth-child(3) > .list-item-container > .ViewMore-btn').click();
      cy.get('.project-stage-card > :nth-child(3)').contains("div", "Design");
    });
  
  
  it('update project popup opens', () => {
    cy.get(':nth-child(3) > .list-item-container > .project-list-item > .update-project-btn').click();
    cy.contains(UPDATE_PROJECT_TEXT);
  });
  it("new stage in project is selectable", () => {
    cy.get('Modal').click();
    cy.get('Modal > .stage-selection-btn > .spec').should('have.css', 'background-color', 'rgb(75,221,51)')
  });
  it('project selection modal closes on save', () => {

  });
  it('project card brief spec is updated', () => {

  });
});
  