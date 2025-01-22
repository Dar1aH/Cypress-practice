import HomeSection from "../../page-objects/pages/HomeSection";
import RegistrationForm from "../../page-objects/forms/RegistrationForm";
import GaragePage from "../../page-objects/pages/GaragePage";
import ExpensesPage from "../../page-objects/pages/ExpensesPage";

const homeSection = new HomeSection();
const registrationForm = new RegistrationForm();
const garagePage = new GaragePage();
const expensesPage = new ExpensesPage();

describe('Car and fuel expense tests with API checks', () => {
    const carData = {
        brand: 'BMW',
        model: 'Z3',
        mileage: 300
    };

    const expenseData = {
        mileage: 600,
        liters: 50,
        totalCost: 500
    };

    beforeEach(() => {
        cy.visit('/');
        homeSection.clickSignUpBtn();
        registrationForm.fillRegistrationForm();
        registrationForm.clickRegisterBtn();
        registrationForm.verifySuccessfulRegistration();
    });

    it('Add a new car, validate API response, and verify expense functionality', () => {

        garagePage.addCar(carData.brand, carData.model, carData.mileage);
        garagePage.verifyAddedCar(carData.brand, carData.mileage)
        garagePage.verifyAddedCarStatus();
        garagePage.verifyAddedCarInList(carData);

    });

    it.only('Create expense via API using custom command and validate via UI', () => {

   
        garagePage.addCar(carData.brand, carData.model, carData.mileage);
        garagePage.verifyAddedCar(carData.brand, carData.mileage);
        garagePage.verifyAddedCarStatus();
        garagePage.verifyAddedCarInList(carData)
    
        cy.get('@addedCarId').then((carId) => { // Fetch carId from alias
            cy.log(`Using car ID for expense creation: ${carId}`);
            cy.createExpense(expenseData, carId);
            expensesPage.clickAddFuelExpensesBtn();
            expensesPage.updateMileage(expenseData.mileage);
            expensesPage.inputNumberOfLiters(expenseData.liters);
            expensesPage.inputTotalCost(expenseData.totalCost);
            expensesPage.clickAddBtn();
        
            expensesPage.verifyMileage(expenseData.mileage);
            expensesPage.verifyNumberOfLiters(expenseData.liters);
            expensesPage.verifyTotalCost(expenseData.totalCost);
        });
    });
    
    
});
