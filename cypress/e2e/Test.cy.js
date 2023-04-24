

describe('template spec', () => {
  it('visit website', () => {
    cy.visit('https://katalon-demo-cura.herokuapp.com/')
    cy.wait(100)
    cy.get('h1').should('be.visible')
    cy.get('#menu-toggle > .fa').click().should('be.visible')
    cy.get('.sidebar-nav > :nth-child(4) > a').click()
    cy.get('#txt-username').type('John Doe')
    cy.get('#txt-password').type('ThisIsNotAPassword')
    cy.wait(100)
    cy.get('#btn-login').click()
  })

})