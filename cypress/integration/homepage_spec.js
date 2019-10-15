/// <reference types="Cypress" />

describe('Home Page', function() {
	beforeEach(() => {
		cy.visit('/')
		indexedDB.deleteDatabase('firebaseLocalStorageDb')
	})

	it('shows the cookie banner', () =>
		cy.contains('Let’s get this out of the way…').should('be.visible'))

	it('can dismiss the cookie banner', () => {
		cy.contains('Accept cookies')
		// .click({ force: true })
		// .should('not.exist')
		// cy.contains('Let’s get this out of the way…').should('not.exist')
	})

	it('shows the sign up button', () => {
		cy.contains('Join the waiting list')
			.should('exist')
			.should('be.visible')
	})

	// it('has no visual regressions', () => cy.percySnapshot())
})
