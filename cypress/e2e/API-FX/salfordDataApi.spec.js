describe('salfordDataApi.spec| Validate Salford API response', function() {
  it('Validate Salford data api + Family Hub label', function() {
    cy.request('https://api.openobjects.com/v2/salfordfsd/records?key=633eb0a9e4b0b3bc6d117a9a&startIndex=0&count=100&query=api_channel:familyhubs')
        .then((response) => {
          cy.validJsonAPIresponse(response);
          // Family Hub lable
          expect(response.body.records[8].website.label).to.be.eq('Family Hub');
        });
  });
})