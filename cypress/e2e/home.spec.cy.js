describe('Home Page', () => {
  it('displays all 3 products on the home page', () => {
    cy.visit('http://localhost:3000');
    cy.get('[data-test="product-tag"]')
      .eq(0)
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'Grinch');
        cy.get('[data-test="product-price"]').should('contain', '$35.00USD');
      });

    cy.get('[data-test="product-tag"]')
      .eq(1)
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'Jurassic Park');
        cy.get('[data-test="product-price"]').should('contain', '$30.00USD');
      });

    cy.get('[data-test="product-tag"]')
      .eq(2)
      .within(() => {
        cy.get('[data-test="product-name"]').should('contain', 'Star Wars');
        cy.get('[data-test="product-price"]').should('contain', '$25.00USD');
      });
  });
});
