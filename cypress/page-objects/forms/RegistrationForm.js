class RegistrationForm {
    elements = {
        nameInputField: () => cy.get('#signupName'),
        lastNameInputField: () => cy.get('#signupLastName'),
        emailInputField: () => cy.get('#signupEmail'),
        passwordInputField: () => cy.get('#signupPassword'),
        reEnterPasswordField: () => cy.get('#signupRepeatPassword'),
        registerBtn: () => cy.get('[type="button"].btn-primary'),
        headerGarage: () => cy.get('h1')
    }

    verifyEmptyNameErrorByText(text) {
        this.elements.nameInputField().focus().blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');
    }

    verifyEmptyLastNameErrorByText(text) {
        this.elements.lastNameInputField().focus().blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');
    }

    verifyEmptyEmailErrorByText(text) {
        this.elements.emailInputField().focus().blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');
    }

    verifyEmptyPasswordErrorByText(text) {
        this.elements.passwordInputField().focus().blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');
    }

    verifyEmptyReEnterPasswordErrorByText(text) {
        this.elements.reEnterPasswordField().focus().blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');
    }

    verifyNameWrongLengthErrorByText(text) {
        this.elements.nameInputField().type('A', { sensitive: true }).blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');

    }

    verifyNameWrongDataErrorByText(text) {
        this.elements.nameInputField().type('一只猫', { sensitive: true }).blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');

    }

    verifyLastNameWrongLengthErrorByText(text) {
        this.elements.lastNameInputField().type('A', { sensitive: true }).blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');

    }

    verifyLastNameWrongDataErrorByText(text) {
        this.elements.lastNameInputField().type('一只猫', { sensitive: true }).blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');

    }

    verifyInvalidEmailByText(text) {
        this.elements.emailInputField().type('abcds', { sensitive: true }).blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');

    }

    verifyWrongDataPasswordByText(text) {
        this.elements.passwordInputField().type('abc', { sensitive: true }).blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');
    }

    verifyPasswordMismatchByText(text) {
        this.elements.passwordInputField().type('9Fasdfggg', { sensitive: true })
        this.elements.reEnterPasswordField().type('8Fasdfggg', { sensitive: true }).blur()
        cy.contains('.invalid-feedback p', text).should('be.visible');
    }

    enterName() {
        this.elements.nameInputField().type('Daria', { sensitive: true })
    }

    enterLastName() {
        this.elements.lastNameInputField().type('Herasymenko', { sensitive: true })
    }

    enterEmail() {
        const uniqueEmail = `testuser+${Date.now()}@example.com`
        this.elements.emailInputField().type(uniqueEmail)
    }

    enterPassword() {
        this.elements.passwordInputField().type('9Fasdfggg', { sensitive: true })
    }

    reEnterPassword() {
        this.elements.reEnterPasswordField().type('9Fasdfggg', { sensitive: true })
    }

    verifyRegisterBtnDisabled() {
        this.elements.registerBtn().should('be.disabled')
    }
    clickRegisterBtn() {
        this.elements.registerBtn().click()
    }

    verifySuccessfulRegistration(){
        this.elements.headerGarage().should('have.text', 'Garage');
        cy.url().should('contain', '/garage');
    }

}
export default RegistrationForm
