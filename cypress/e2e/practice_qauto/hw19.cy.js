import HomeSection from "../../page-objects/pages/HomeSection";
import RegistrationForm from "../../page-objects/forms/RegistrationForm";

describe('Registration form test', () => {
    const homeSection = new HomeSection()
    const registrationForm = new RegistrationForm

    beforeEach(() => {
        cy.visit('/');
        homeSection.clickSignUpBtn()
    });

    it('Verify validation errors for empty fields', () => {
        registrationForm.verifyEmptyNameErrorByText('Name required')
        registrationForm.verifyEmptyLastNameErrorByText('Last name required')
        registrationForm.verifyEmptyEmailErrorByText('Email required')
        registrationForm.verifyEmptyPasswordErrorByText('Password required')
        registrationForm.verifyEmptyReEnterPasswordErrorByText('Re-enter password required')
    })

    it('Verify validation errors for invalid name,last name, email, password and password mismatch ', () => {
        registrationForm.verifyNameWrongLengthErrorByText('Name has to be from 2 to 20 characters long')
        registrationForm.verifyNameWrongDataErrorByText('Name is invalid')
        registrationForm.verifyLastNameWrongLengthErrorByText('Last name has to be from 2 to 20 characters long')
        registrationForm.verifyLastNameWrongDataErrorByText('Last name is invalid')
        registrationForm.verifyInvalidEmailByText('Email is incorrect')
        registrationForm.verifyWrongDataPasswordByText('Password has to be from 8 to 15 characters long and contain at least one integer, one capital, and one small letter')
        registrationForm.verifyPasswordMismatchByText('Passwords do not match')

    })

    it('Verify the Register button is disabled without name', () => {
        registrationForm.enterLastName()
        registrationForm.enterEmail()
        registrationForm.enterPassword()
        registrationForm.reEnterPassword()
        registrationForm.verifyRegisterBtnDisabled()

    })


    it('Verify the Register button is disabled without last name', () => {
        registrationForm.enterName()
        registrationForm.enterEmail()
        registrationForm.enterPassword()
        registrationForm.reEnterPassword()
        registrationForm.verifyRegisterBtnDisabled()
    })

    it('Verify the Register button is disabled without email', () => {
        registrationForm.enterName()
        registrationForm.enterLastName()
        registrationForm.enterPassword()
        registrationForm.reEnterPassword()
        registrationForm.verifyRegisterBtnDisabled()

    })

    it('Verify the Register button is disabled without password', () => {
        registrationForm.enterName()
        registrationForm.enterLastName()
        registrationForm.enterEmail()
        registrationForm.reEnterPassword()
        registrationForm.verifyRegisterBtnDisabled()

    })

    it('Verify the Register button is disabled without re-enter password', () => {
        registrationForm.enterName()
        registrationForm.enterLastName()
        registrationForm.enterEmail()
        registrationForm.enterPassword()
        registrationForm.verifyRegisterBtnDisabled()

    })

    it('Verify successful registration with valid data', () => {
        registrationForm.enterName()
        registrationForm.enterLastName()
        registrationForm.enterEmail()
        registrationForm.enterPassword()
        registrationForm.reEnterPassword()
        registrationForm.clickRegisterBtn()
    })

})

