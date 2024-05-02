describe('FHG-924-FX-filter-cost.spec - Search by filter - Cost',function(){
    it('AC 1,3 Cost filter - No filter - Free filter',function(){
       cy.visit('/');
        cy.homepage();
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();

        // no filters tagged
        cy.get('.moj-filter__selected').contains('Pay to use').should('not.exist')
        cy.get('.moj-filter__selected').contains('Free').should('not.exist')
        // apply free filter    
        cy.costFilter('Free')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('not.exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.moj-filter__selected').contains('Free')
    });
    it('AC 2 Cost filter - Paid filter - Clear filters',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails(); // both filters unchecked

        // apply paid filter    
        cy.costFilter('Paid')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        cy.get('.moj-filter__selected').contains('Pay to use')
        // use clear filers 
        cy.clearFilters()
       // 
        cy.get('results').should('not.be.empty')

    });
    it('AC 4 Cost filter - Both , clear each filter ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails(); // both filters unchecked

        // apply paid filter    
        cy.costFilter('Both')
       
        cy.get('.moj-filter__selected').contains('Pay to use')
        cy.get('.moj-filter__selected').contains('Free')
        // clear paid filter 
        cy.get('.moj-filter__selected').contains('Pay to use').click()
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('not.exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.moj-filter__selected').contains('Free')
        //clear free filer 
        cy.get('results').should('not.be.empty')
       // 


    });
    
})