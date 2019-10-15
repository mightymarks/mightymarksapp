/// <reference types="Cypress" />

describe('Home Page', function() {
	beforeEach(() => indexedDB.deleteDatabase('firebaseLocalStorageDb'))
	beforeEach(() => cy.visit('/'))

	it('shows the cookie banner', () => {
		cy.get('h4')
			.contains('Let’s get this out of the way…')
			.parent()
			.within($banner => {
				expect($banner).to.be.visible
				cy.get('button')
					.click()
					.then(() => {
						expect($banner).to.be.hidden
					})
			})
	})

	it('shows the sign up button', () => cy.contains('Join the waiting list'))

	it('has no visual regressions', () => cy.percySnapshot())
})
