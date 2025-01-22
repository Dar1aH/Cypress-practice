// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('login', (username, password) => {
    cy.get('#signinEmail').type(username);
    cy.get('#signinPassword').type(password);
    cy.get('.modal-footer .btn-primary').click();
  });

  Cypress.Commands.overwrite('type', (originalFn, element, text, options) => {
    if (options && options.sensitive) {
  
      options.log = false;
 
      Cypress.log({
        $el: element,
        name: 'type',
        message: '*'.repeat(text.length), 
      });
    }
  
    return originalFn(element, text, options);
  });

  Cypress.Commands.add('createExpense', (expenseData, carId) => {
    const reportDate = new Date().toISOString().split('T')[0] + "T00:00:00Z"
    if (!carId) {
        throw new Error('Car ID is undefined or null. Ensure the car is properly added before creating an expense.');
    }

    cy.request({
        method: 'POST',
        url: 'https://qauto.forstudy.space/api/expenses/',
        failOnStatusCode: false,
        body: {
            mileage: expenseData.mileage,
            liters: expenseData.liters,
            totalCost: expenseData.totalCost,
            carId: carId,
            reportDate: reportDate
        }
    }).then((response) => {
        expect(response.status).to.eq(200);
        expect(response.body.data).to.include.keys('id', 'carId', 'mileage', 'liters', 'totalCost');
        expect(response.body.data.mileage).to.eq(expenseData.mileage);
        expect(response.body.data.liters).to.eq(expenseData.liters);
        expect(response.body.data.totalCost).to.eq(expenseData.totalCost);

        // Return the created expense data
        return response.body.data;
    });
});


  

  