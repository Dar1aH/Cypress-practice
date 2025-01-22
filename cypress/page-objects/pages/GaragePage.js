import ApiHelper from "../helpers/ApiHelper"
const apiHelper = new ApiHelper()

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
 
    addCar(brand, model, mileage) {
        cy.intercept('POST', 'https://qauto.forstudy.space/api/cars').as('addCar');
        this.elements.addCarBtn().click();
        this.elements.brandInput().select(brand);
        this.elements.modelInput().select(model);
        this.elements.mileageInput().type(mileage);
        this.elements.addBtn().click();
    }

    verifyAddedCar(brand, mileage) {
        this.elements.carBrand().contains(brand)
        this.elements.carMileage().should('have.value', `${mileage}`)
    
    }
     /*
    verifyAddedCarStatus() {
        cy.wait('@addCar').then((data) => {
            expect(data.response.statusCode).to.eq(201);
            const carId = data.response.body.data.id;
            cy.log(`Car ID: ${carId}`);
            expect(carId).to.exist;
            this.addedCarId = carId; 
        });
    }

    verifyAddedCarInList(carData) {
        apiHelper.getCars().then((cars) => {
            const addedCar = cars.find(car => car.id === this.addedCarId);
            cy.log(`Added car: ${addedCar}`);
            expect(addedCar).to.exist;
            expect(addedCar.brand).to.eq(carData.brand);
            expect(addedCar.model).to.eq(carData.model);
            expect(addedCar.mileage).to.eq(carData.mileage)
        });
    }
        */

    verifyAddedCarStatus() {
        cy.wait('@addCar').then((data) => {
            expect(data.response.statusCode).to.eq(201);
            const carId = data.response.body.data.id;
            cy.log(`Car ID: ${carId}`);
            expect(carId).to.exist;
            cy.wrap(carId).as('addedCarId'); // Store carId as an alias
        });
    }
    
    verifyAddedCarInList(carData) {
        cy.log(`Fetching cars to validate added car...`);
        cy.get('@addedCarId').then((addedCarId) => { // Access the alias
            apiHelper.getCars().then((cars) => {
                cy.log(`Cars from API: ${JSON.stringify(cars, null, 2)}`);
                const addedCar = cars.find(car => car.id === addedCarId);
                cy.log(`Added car: ${JSON.stringify(addedCar, null, 2)}`);
                expect(addedCar).to.exist;
                expect(addedCar.brand).to.eq(carData.brand);
                expect(addedCar.model).to.eq(carData.model);
                expect(addedCar.mileage).to.eq(carData.mileage);
            });
        });
    }
    
}

export default GaragePage