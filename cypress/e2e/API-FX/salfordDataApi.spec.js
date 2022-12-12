describe.skip('salfordDataApi.spec| Validate Salford API response', function() {
  it('Validate Salford data api - Services + Family Hub label', function() {
    cy.request('https://s181d01-as-fh-sd-api-dev.azurewebsites.net/api/services/ce929e9f-027d-4c31-8364-af2cb857f66b')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          // Family Hub label
          expect(response.body.serviceType.name).to.be.eq('Family Experience');
        });
  });
  it('Validate Salford data api - Organisations + Information Sharing', function() {
    cy.request('https://s181d01-as-fh-sd-api-dev.azurewebsites.net/api/organizations/ca8ddaeb-b5e5-46c4-b94d-43a8e2ccc066')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          // Information Sharing
          expect(response.body.services[1].serviceType.name).to.be.eq('Information Sharing');
        });
  });
})