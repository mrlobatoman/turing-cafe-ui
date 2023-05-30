describe('home page', () => {
  
  beforeEach(() => {
    cy.intercept({method: 'GET', url: 'http://localhost:3001/api/v1/reservations'})
  })
  
  it('passes', () => {
    cy.visit('http://localhost:3000')
  })

  it('should render correct elements', () => {
    cy.get('.app-title').contains('Turing Cafe Reservations')
  })

})