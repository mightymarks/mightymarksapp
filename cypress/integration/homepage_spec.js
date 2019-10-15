/// <reference types="Cypress" />

describe('Home Page', function() {
	beforeEach(() => indexedDB.deleteDatabase('firebaseLocalStorageDb'))
	beforeEach(() => cy.visit('/'))

	it('shows the cookie banner', () =>
		cy.contains('Let’s get this out of the way…'))

	it('can dismiss the cookie banner', () => {
		cy.contains('Accept cookies').click()
		cy.contains('Let’s get this out of the way…').should('not.exist')
	})

	it('shows the sign up button', () => cy.contains('Join the waiting list'))

	it('has no visual regressions', () => cy.percySnapshot())
})
