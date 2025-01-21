class ApiHelper {
    getCars() {
        return cy.request('GET', 'https://qauto.forstudy.space/api/cars').then((response) => {
            expect(response.status).to.eq(200);
            return response.body.data;
        });
    }
}
export default ApiHelper;
