describe('Go to Page FileUpload', () => {
    it('Click Choose file', () => {
        cy.visit('https://the-internet.herokuapp.com/')
        cy.contains('Welcome to the-internet')
        cy.get('[href="/upload"]').contains('File Upload').click()
        cy.wait(5000)
        cy.get('input[id="file-upload"]').selectFile('cypress/fixtures/image/pop.jpg')
        cy.get('input[id="file-submit"]').click({force:true})
    })
})