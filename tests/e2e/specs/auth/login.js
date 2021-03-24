describe('login page', () => {
  beforeEach(() => {
    cy.visit('/auth/login')
  })
  it('shows the form', () => {
    cy.get('#login').should('exist')
    cy.get('#login').within(() => {
      cy.get('input:first-child').should(
        'have.attr',
        'placeholder',
        'Introduce tu nombre'
      )
    })
  })
  it('logs in succesfuly', () => {
    cy.get('#login input:first-child').type('Test')
    cy.get('#login input[type="email"').type('test@gmail.com')
    cy.get('#login button').click()
    cy.location('pathname').should('eq', '/')
  })
})
