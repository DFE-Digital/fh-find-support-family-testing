describe('FHG-4-FX-familyHubsPage Test',function(){
    it('AC 1 ,2 family hub page validation and back button',function(){
        cy.visit('/');
        cy.homepage();
        cy.get("[class] .govuk-grid-column-one-half:nth-of-type(1) .nhsuk-action-link__text").click();
        cy.contains('Find a family hub');
        cy.contains('If you want to meet other families and find out more about local family support services, your nearest family hub or children’s centre can point you in the right direction.')
        cy.contains('There are family hubs all over England, run by local councils.')
        cy.contains('Search here to find family hubs near you.')
        cy.contains('As this service is new, not all family hubs will be listed. If there are no family hubs listed in your area, you will be signposted to your council website.')
        cy.contains('Some family hubs services are only available to local residents.')
        cy.get('input#postcode-hub').should('be.empty');
        // enter valid postcode and it takes to next page
        cy.get('input#postcode-hub').clear().type('m5 4wu')
        cy.get('form#main-content-form > .govuk-button').click();
        cy.contains('Your local family hubs')
        cy.contains('Get support from Salford family hubs.')
        cy.get('.govuk-back-link-or').click();
        // back link takes back to landing page
        cy.get('.govuk-back-link-or').click();
        cy.contains('Find your local family support services');
    });
})