/// <reference types="Cypress" />

describe('Home Page', function() {
	beforeEach(() => {
		cy.visit('/')
		indexedDB.deleteDatabase('firebaseLocalStorageDb')
	})

	it('shows the sign up button', () => {
		cy.contains('Join the waiting list')
			.should('exist')
			.should('be.visible')
	})
})
