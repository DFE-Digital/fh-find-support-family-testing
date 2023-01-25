describe.skip('healthCheckApi.spec| ', function() {

  it('Health Check - API Status , postcodeIo ,ServiceDirectory', function() {
    cy.request('/health')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          // 
          expect(response.body.status).to.be.eq('Healthy');
          expect(response.body.entries.PostcodesIo.status).to.be.eq('Healthy')
          expect(response.body.entries.ServiceDirectoryAPI.status).to.be.eq('Healthy')
        });
  });
})