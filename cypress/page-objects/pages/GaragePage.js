class GaragePage {
    elements = {
        addCarBtn: () => cy.get('.btn-primary:eq(0)'),
        brandInput: () => cy.get('#addCarBrand'),
        modelInput: () => cy.get('#addCarModel'),
        mileageInput: () => cy.get('#addCarMileage'),
        addBtn: () => cy.get('.btn.btn-primary:eq(1)'),
        carBrand: () => cy.get('p.car_name'),
        carMileage: () => cy.get('[formcontrolname="miles"]')
    }

    clickAddCarBtn() {
        this.elements.addCarBtn().click()
    }

    selectBrand(brand) {
        this.elements.brandInput().select(brand)
    }

    selectModel(model) {
        this.elements.modelInput().select(model)
    }
    inputMileage(mileage) {
        this.elements.mileageInput().type(mileage)
    }

    clickAddBtn() {
        this.elements.addBtn().click()
    }

    verifyAddedCarBrand(brand) {
        this.elements.carBrand().contains(brand)

    }

    verifyAddedCarMileage(mileage) {
        this.elements.carMileage().should('have.value', `${mileage}`)

    }
}

export default GaragePage