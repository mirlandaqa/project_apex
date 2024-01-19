describe('home', () => {

  beforeEach(() => {
    cy.visit('https://apex.oracle.com/pls/apex/r/automation_1701/qa-application')

  })


  it('passes', () => {
    cy.get('#P9999_USERNAME').type(Cypress.env('user_name'))
    cy.get('#P9999_PASSWORD').type(Cypress.env('user_password'))
    cy.contains('Sign In').click()
  })
})