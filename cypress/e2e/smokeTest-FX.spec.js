describe('smokeTest-FX.spec',function(){
    it('e2e journey - Start now page - page title ',function(){
        cy.visit('/');
        cy.title()
        cy.homepage();
        
        cy.searchHubsPage()
        cy.searchbypostcode('e1 2en')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        cy.title()
    })
    it('Health Check - API Status , postcodeIO ,SErviceDirectory', function() {
        cy.request('/health')
            .then((response) => {
        cy.validJsonAPIresponse(response);
        
          expect(response.body.status).to.be.eq('Healthy');
          expect(response.body.entries.PostcodesIo.status).to.be.eq('Healthy')
          expect(response.body.entries.PostcodesIo.status).to.be.eq('Healthy')
        });
  });
})