describe('Header', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('links to the correct pages', () => {
    cy.getBySel('logo').click();
    cy.location('pathname').should('eq', '/');
  });

  it('the search bar returns the correct search results', () => {
    cy.getBySel('search-input').eq(0).type('star');
    cy.getBySel('search-input').eq(0).realPress('Enter');

    cy.get('[data-test="product-tag"]')
      .first()
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'Star Wars');
        cy.get('[data-test="product-price"]').should('contain', '$25.00USD');
      });
  });
});
