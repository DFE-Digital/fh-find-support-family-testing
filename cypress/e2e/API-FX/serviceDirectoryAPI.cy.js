describe('serviceDirectoryApi.spec| ', function() {

  it('API status info', function() {
    cy.request('https://s181d01-as-fh-sd-api.azurewebsites.net/api/info')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          // expect(response.body.status).to.be.eq('Healthy');
          // expect(response.body.entries.PostcodesIo.status).to.be.eq('Healthy')
          // expect(response.body.entries.ServiceDirectoryAPI.status).to.be.eq('Healthy')
        });
  });
    it('Taxonomies', function() {
    cy.request('https://s181d01-as-fh-sd-api.azurewebsites.net/api/taxonomies?taxonomyType=1')
        .then((response) => {
          cy.validJsonAPIresponse(response);
        });
  });
   it('Organisations', function() {
    cy.request('https://s181d01-as-fh-sd-api.azurewebsites.net/api/organisations')
        .then((response) => {
          cy.validJsonAPIresponse(response);
        });
    // specific organisation using id
    cy.request('https://s181d01-as-fh-sd-api.azurewebsites.net/api/organisations/3')
        .then((response) => {
          cy.validJsonAPIresponse(response);
        });
  });
   it('Services', function() {
    cy.request('https://s181d01-as-fh-sd-api.azurewebsites.net/api/services')
        .then((response) => {
          cy.validJsonAPIresponse(response);
        });
    // service with id 
    cy.request('https://s181d01-as-fh-sd-api.azurewebsites.net/api/services/1')
        .then((response) => {
          cy.validJsonAPIresponse(response);
        });

  });
   it('Locations', function() {
    cy.request('https://s181d01-as-fh-sd-api.azurewebsites.net/api/locations')
        .then((response) => {
          cy.validJsonAPIresponse(response);
        });
    // specific location 
     cy.request('https://s181d01-as-fh-sd-api.azurewebsites.net/api/locations/1')
        .then((response) => {
          cy.validJsonAPIresponse(response);
        });
  });
  it('Organisation locations', function() {
    // specific organisation location 
     cy.request('https://s181d01-as-fh-sd-api.azurewebsites.net/api/organisationlocations/1')
        .then((response) => {
          cy.validJsonAPIresponse(response);
        });
  });
  
  
  
  

})