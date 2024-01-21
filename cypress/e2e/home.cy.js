describe('home', () => {

  beforeEach(() => {
    cy.visit('https://apex.oracle.com/pls/apex/r/automation_1701/qa-application')
    cy.get('#P9999_USERNAME').type(Cypress.env('user_name'))
    cy.get('#P9999_PASSWORD').type(Cypress.env('user_password'))
    cy.contains('Sign In').click()

  })

  it('Update order 10 to quantity 20', () => {
    cy.get('#C63898803422352561850_HDR').click()
    cy.get('[placeholder="Filter..."]').type('10').click()
    cy.wait(500)
    cy.contains('10').click()
    cy.get('[data-id="10"]').find('td:contains(Grapes)').next().dblclick({force:true})
    cy.get('[data-id="10"]').find('td:contains(Grapes)').next().type('10')
    cy.contains('Save').click()
 
  })

  it('Update the location of order 10 to Deli', () => {
    cy.get('#C63898803422352561850_HDR').click()
    cy.get('[placeholder="Filter..."]').type('10').click()
    cy.wait(500)
    cy.contains('10').click()
    cy.wait(500)
    cy.get('[data-id="10"]').find('td:contains(Grapes)').next().dblclick({force:true})
    cy.get('#C63898803169968561847_lov_btn').dblclick({force:true}) 
    cy.get('ul').find('li:contains(Acme Store)').click()
    cy.contains('Save').click()

  })



})