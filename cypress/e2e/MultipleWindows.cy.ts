describe('Go to Page Multiple Windows', () => {
    it('Click Choose file', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Welcome to the-internet')
        cy.get('[href="/windows"]').contains('Multiple Windows').click()
        cy.contains('Opening a new window')
        cy.get('[href="/windows/new"]').contains('Click Here').click()
    })
})