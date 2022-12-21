describe('FHG-925-FX-filter-familyHubsServices.spec - Search by filter - familyhubs services',function(){
    it('AC 1,3 familyhubs filter - No filter + Family hubs filter',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('Service and groups').should('not.exist')
        cy.get('.moj-filter__selected').contains('Family hubs').should('not.exist')
        // apply familyhubs filter    
        cy.familyhubsFilter('familyhubs')
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('not.exist')
        cy.get('.moj-filter__selected').contains('Family hubs')
    });
    it('AC 2 Service and groups- filter',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails(); 
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('Services and groups').should('not.exist')
        cy.get('.moj-filter__selected').contains('Family hubs').should('not.exist')
        // apply services filter    
        cy.familyhubsFilter('services')
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('not.exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        cy.get('.moj-filter__selected').contains('Services and groups')
  
    });
    it('AC 4 family hubs & Service and groups filter - Both , clear each filter ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('Services and groups').should('not.exist')
        cy.get('.moj-filter__selected').contains('Family hubs').should('not.exist')
        // apply both filters   
        cy.familyhubsFilter('Both')
        cy.get('.app-family-hub').should('not.exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        cy.get('.moj-filter__selected').contains('Services and groups')
        cy.get('.moj-filter__selected').contains('Family hubs')
  
        // clear familyhubs filter 
        cy.get('.moj-filter__selected').contains('Family hubs').click()
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('not.exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        cy.get('.moj-filter__selected').contains('Services and groups')
        //clear services filter 
        cy.get('.moj-filter__selected').contains('Services and groups').click()
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
    });
    it('FHG-1634 - Post code with no Family hubs diaplays services',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m27 8ss')
        cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('not.exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Service and groups').should('exist')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('Service and groups').should('not.exist')
        cy.get('.moj-filter__selected').contains('Family hubs').should('not.exist')
    });
    
})