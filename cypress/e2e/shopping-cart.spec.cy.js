describe('Shopping Cart', () => {
  it('users can add products to the cart', () => {
    cy.visit('/');
    cy.getBySel('product-tag').eq(0).click();
    cy.get('[title="Size Small"]').click();
    cy.get('[aria-label="Add to cart"]').click();
    cy.getBySel('item-count').contains('1');
  });
});
