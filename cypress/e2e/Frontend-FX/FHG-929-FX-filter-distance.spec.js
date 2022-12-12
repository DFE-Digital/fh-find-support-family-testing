describe('FHG-929-FX-filter-distance.spec',function(){
    it('AC 1 - default 20 miles distance - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£2.50 every session').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('exist')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£2.50 every session').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });
    it('AC 2 - filter by 1 miles distance ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£2.50 every session').should('exist')
        // select 1 mile filter 
        cy.distanceFilter('1')
        cy.get('.moj-filter__selected').contains('1 mile').should('exist')
        // add validation 
        cy.noResultsFilter()
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£2.50 every session').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });
    it('AC 3 - filter by 2 miles distance ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£2.50 every session').should('exist')
        // select 1 mile filter 
        cy.distanceFilter('2')
        cy.get('.moj-filter__selected').contains('2 miles').should('exist')
        // add validation 
        cy.contains('Oakwood Academy (2.02 miles)').should('not.exist')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£2.50 every session').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });
    it('AC 4 - filter by 5 miles distance ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('E1 2EN')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£5 every').should('exist')
        // select 1 mile filter 
        cy.distanceFilter('5')
        cy.get('.moj-filter__selected').contains('5 miles').should('exist')
        // add validation 
        cy.contains('Acorn Fc (10.90 miles)').should('not.exist')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£5 every').should('exist')
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
        cy.get('.govuk-grid-column-two-thirds').contains('£5 every').should('exist')
        // select 1 mile filter 
        cy.distanceFilter('10')
        cy.get('.moj-filter__selected').contains('10 miles').should('exist')
        // add validation 
        cy.contains('Acorn Fc (10.90 miles)').should('not.exist')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£5 every').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });
    it.only('AC 6 - filter by 20 miles distance ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('E1 2EN')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£5 every').should('exist')
        // select 1 mile filter 
        cy.distanceFilter('20')
        cy.get('.moj-filter__selected').contains('20 miles').should('exist')
        // add validation 
        // cy.contains('Acorn Fc (10.90 miles)').should('not.exist')
        // apply free filter    
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£5 every').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('20 miles').should('not.exist')
    });


})