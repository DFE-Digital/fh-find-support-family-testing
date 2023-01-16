describe('healthCheckApi.spec| ', function() {

  it('Health Check - API Status , postcodeIO ,SErviceDirectory', function() {
    cy.request('/health')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          // Information Sharing
          expect(response.body.status).to.be.eq('Healthy');
          expect(response.body.entries.PostcodesIo.status).to.be.eq('Healthy')
          expect(response.body.entries.PostcodesIo.status).to.be.eq('Healthy')
        });
  });
})