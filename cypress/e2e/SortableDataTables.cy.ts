describe('Go to Page Sortable Data Tables', () => {
    it('Click Choose file', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Welcome to the-internet')
        cy.get('[href="/tables"]').click().contains('Data Tables')
    })
})