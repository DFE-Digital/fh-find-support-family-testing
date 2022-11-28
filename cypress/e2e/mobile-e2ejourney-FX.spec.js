describe('mobile-e2ejourney-FX.spec',function(){
    let device = ['iphone-x','ipad-mini','samsung-s10','samsung-note9']
        for(let i=0;i<device.length;i++){
    it(`${device[i]} mobile Journey  - basic e2e journey - Start now page - page title`,function(){
        cy.viewport(`${device[i]}`)
        cy.visit('/');
        cy.homepage();
        cy.get('.govuk-button').click();
        cy.searchHubsPage()
        cy.searchbypostcode('m5 4wu')
        cy.ServiceFilterPage();
    })
}
})