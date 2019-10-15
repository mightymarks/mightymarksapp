/// <reference types="Cypress" />

describe('The Home Page', function() {
	beforeEach(() => indexedDB.deleteDatabase('firebaseLocalStorageDb'))
	beforeEach(() => cy.visit('/'))

	it('shows the cookie banner', () =>
		cy
			.get('h4')
			.contains('Let’s get this out of the way…')
			.parent()
			.then($el => {
				expect(Cypress.dom.isHidden($el)).to.be.false
				cy.get('button', { withinSubject: $el })
					.click()
					.then(() => {
						expect(Cypress.dom.isHidden($el)).to.be.true
					})
			}))

	it('shows the sign up button', () => cy.contains('Join the waiting list'))

	it('has no visual regressions', () => cy.percySnapshot())
})
