describe('FHG-924-FX-filter-cost.spec - Search by filter - Cost',function(){
    it('AC 1,3 Cost filter - No filter + Free filter',function(){
       cy.visit('/');
        cy.homepage();
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // no filters tagged
         cy.get('.moj-filter__selected').contains('Pay to use').should('not.exist')
        cy.get('.moj-filter__selected').contains('Free').should('not.exist')
        // apply free filter    
        cy.costFilter('Free')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('not.exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.moj-filter__selected').contains('Free')
    });
    it('AC 2 Cost filter - Paid - Clear filers',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails(); // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // apply paid filter    
        cy.costFilter('Paid')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('not.exist')
        cy.get('.moj-filter__selected').contains('Pay to use')
        // use clear filers 
        cy.clearFilters()
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')

    });
    it('AC 4 Cost filter - Both , clear each filter ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails(); // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        // apply paid filter    
        cy.costFilter('Both')
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        cy.get('.moj-filter__selected').contains('Pay to use')
        cy.get('.moj-filter__selected').contains('Free')
        // clear paid filter 
        cy.get('.moj-filter__selected').contains('Pay to use').click()
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('not.exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.moj-filter__selected').contains('Free')
        //clear free filer 
        cy.get('.moj-filter__selected').contains('Free').click()
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        // both filters unchecked
        cy.get('.govuk-grid-column-two-thirds').contains('Free').should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains('£').should('exist')


    });
    
})