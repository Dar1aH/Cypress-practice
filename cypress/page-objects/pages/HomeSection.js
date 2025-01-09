class HomeSection {
    elements = {
        homeBtn: () => cy.get('a.btn.header-link'),
        aboutBtn: () => cy.get('button.btn.header-link:eq(0)'),
        contactsBtn: () => cy.get('button.btn.header-link:eq(1)'),
        guestLogInBtn: () => cy.get('button.header-link.-guest'),
        signInBtn: () => cy.get('button.header_signin'),
        signUpBtn: () => cy.get('button.hero-descriptor_btn')
    }

    verifyHomeBtn() {
        this.elements.homeBtn().should('have.text', 'Home')
    }

    verifyAboutBtn() {
        this.elements.aboutBtn().should('have.text', 'About')
    }

    verifyContactsBtn() {
        this.elements.contactsBtn().should('have.text', 'Contacts')
    }

    verifyGuestLogInBtn() {
        this.elements.guestLogInBtn().should('be.visible').should('have.text', 'Guest log in')
    }

    verifySignInBtn() {
        this.elements.signInBtn().should('be.visible').should('have.text', 'Sign In')
    }

    verifySignUpBtn() {
        this.elements.signUpBtn().should('be.visible').should('be.enabled')
        this.elements.signUpBtn().should('have.text', 'Sign up')
    }

    clickSignUpBtn() {
        this.elements.signUpBtn().click()
    }
}
export default HomeSection