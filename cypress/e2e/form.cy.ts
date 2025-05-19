describe('Форма: Cypress', () => {
  beforeEach(() => {
    cy.visit('/form') 
  })

  it('заполняет и отправляет форму', () => {
    cy.get('input[name="name"]').type('Артём')
    cy.get('input[name="email"]').type('test@example.com')
    cy.get('button[type="submit"]').click()

    cy.contains('Форма успешно отправлена').should('be.visible')
  })
})
