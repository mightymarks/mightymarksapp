/// <reference types="Cypress" />

describe('The Home Page', function() {
	it('successfully loads', function() {
		cy.visit('/')

		cy.contains('Join the waiting list')

		cy.get('h4')
			.contains('Let’s get this out of the way…')
			.parent()
			.then($el => {
				expect(Cypress.dom.isHidden($el)).to.be.false
				cy.get('button', { withinSubject: $el })
					.click()
					.then(() => {
						expect(Cypress.dom.isHidden($el)).to.be.true
					})
			})

		cy.percySnapshot()
	})
})
