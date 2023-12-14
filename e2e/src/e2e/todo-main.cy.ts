describe('Form is ok', () => {
  beforeEach(() => cy.visit('http://localhost:4200/'));

  it('The form exist', () => {
    cy.getByAttr('form-todo-main');

    cy.get('app-to-do-list');
  });
});
