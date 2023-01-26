describe('FHG-929-FX-filter-distance.spec',function(){
    it('AC 1 - default 20 miles distance - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('exist')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });
    it('AC 2 - filter by 1 miles distance ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // select 1 mile filter 
        cy.distanceFilter('1')
        cy.get('.moj-filter__selected').contains('1 mile').should('exist')
        // add validation 
        cy.get(':nth-child(4) > .govuk-link').click()
        cy.get(':nth-child(7) > :nth-child(1) > .govuk-summary-list__key > .govuk-heading-s').contains('1.0 miles')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });
    it('AC 3 - filter by 2 miles distance ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // select 2 mile filter 
        cy.distanceFilter('2')
        cy.get('.moj-filter__selected').contains('2 miles').should('exist')
        // add validation 
        cy.get(':nth-child(4) > .govuk-link').click()
        cy.get('.govuk-summary-list__key > .govuk-heading-s').contains('2.0 miles')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });
    it('AC 4 - filter by 5 miles distance ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        // cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // select 1 mile filter 
        cy.distanceFilter('5')
        cy.get('.moj-filter__selected').contains('5 miles').should('exist')
        // add validation 
        cy.get(':nth-child(4) > .govuk-link').click()
        cy.get('.govuk-summary-list__key > .govuk-heading-s').contains('2.9 miles')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        // cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });
    it('AC 5 - filter by 10 miles distance ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('E1 2EN')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        // cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // select 1 mile filter 
        cy.distanceFilter('10')
        cy.get('.moj-filter__selected').contains('10 miles').should('exist')
        // add validation 
        cy.get(':nth-child(4) > .govuk-link').click()
        cy.get('.govuk-summary-list__key > .govuk-heading-s').contains('2.9 miles')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        // cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });
    it('AC 6 - filter by 20 miles distance ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        // cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // select 1 mile filter 
        cy.distanceFilter('20')
        cy.get('.moj-filter__selected').contains('20 miles').should('exist')
         // add validation 
        cy.get(':nth-child(4) > .govuk-link').click()
        cy.get('.govuk-summary-list__key > .govuk-heading-s').contains('13.0 miles')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        // cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });


})