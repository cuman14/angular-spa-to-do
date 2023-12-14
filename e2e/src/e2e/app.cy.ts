describe('App is ok', () => {
  beforeEach(() => cy.visit('http://localhost:4200/'));

  it('should display welcome message', () => {
    // Custom command example, see `../support/commands.ts` file
    cy.contains('ToDo Manager');
  });
});
