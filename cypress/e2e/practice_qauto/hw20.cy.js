import HomeSection from "../../page-objects/pages/HomeSection";
import RegistrationForm from "../../page-objects/forms/RegistrationForm";
import GaragePage from "../../page-objects/pages/GaragePage";
import ExpensesPage from "../../page-objects/pages/ExpensesPage";

describe('Registration form test', () => {
    const homeSection = new HomeSection()
    const registrationForm = new RegistrationForm()
    const garagePage = new GaragePage()
    const expensesPage = new ExpensesPage()

    beforeEach(() => {
        cy.visit('/');
        homeSection.clickSignUpBtn()
        registrationForm.enterName()
        registrationForm.enterLastName()
        registrationForm.enterEmail()
        registrationForm.enterPassword()
        registrationForm.reEnterPassword()
        registrationForm.clickRegisterBtn()
        registrationForm.verifySuccessfulRegistration()
    });


    it('Add a car and fuel expenses', () => {
        garagePage.clickAddCarBtn()
        garagePage.selectBrand('BMW')
        garagePage.selectModel('Z3')
        garagePage.inputMileage('300')
        garagePage.clickAddBtn()
        garagePage.verifyAddedCarBrand('BMW')
        garagePage.verifyAddedCarMileage('300')
        expensesPage.clickAddFuelExpensesBtn()
        expensesPage.updateMileage('600')
        expensesPage.inputNumberOfLiters('500')
        expensesPage.inputTotalCost('500')
        expensesPage.clickAddBtn()
        expensesPage.verifyMileage('600')
        expensesPage.verifyNumberOfLiters('500')
        expensesPage.verifyTotalCost('500')

    })

})


