class ExpensesPage {
    elements = {
        addFuelExpenseBtn: () => cy.get('.car_add-expense.btn'),
        mileageInput: () => cy.get('#addExpenseMileage'),
        numberOfLitersInput: () => cy.get('#addExpenseLiters'),
        totalCostInput: () => cy.get('#addExpenseTotalCost'),
        addBtn: () => cy.get('.btn.btn-primary:eq(1)'),
        expensesTableRow: () => cy.get('tbody > tr')
    }

    clickAddFuelExpensesBtn() {
        this.elements.addFuelExpenseBtn().click()

    }
    updateMileage(mileage) {
        this.elements.mileageInput().clear().type(mileage)
    }

    inputNumberOfLiters(liters) {
        this.elements.numberOfLitersInput().type(liters)
    }

    inputTotalCost(cost) {
        this.elements.totalCostInput().type(cost)
    }

    clickAddBtn() {
        this.elements.addBtn().click({ force: true })
    }

    verifyMileage(mileage) {
        this.elements.expensesTableRow()
            .first()
            .find('td')
            .eq(1)
            .should('have.text', mileage);

    }

    verifyNumberOfLiters(liters) {
        this.elements.expensesTableRow()
            .first()
            .find('td')
            .eq(2)
            .should('have.text', `${liters}L`);
    }

    verifyTotalCost(cost) {
        this.elements.expensesTableRow()
            .first()
            .find('td')
            .eq(3)
            .should('have.text', `${cost}.00 USD`);
    }

}


export default ExpensesPage