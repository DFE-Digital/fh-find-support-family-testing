describe('test ',function(){
    it('pagination',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        // select 1 mile filter 
        cy.distanceFilter('1')
        // no filters tagged
        cy.get('.moj-filter__selected').contains('1 mile').should('exist')
        // add validation 
        cy.get(':nth-child(3) > .govuk-pagination__link').click()


        // cy.get(':nth-child(4) > :nth-child(1) > .govuk-summary-list__key > .govuk-heading-s').then(function($elem) {
        //     let dist = $elem.text()
        //     let dist1 = dist.substring(dist.length - 10)
        //     let dist2 = dist1.substring(0,4)
        //     cy.log(dist2)
        //     })
        
        // })
        let result;
        let a = cy.distanceCal()
           cy.log(a)
            if (a < 1) {
                result = "Pass"
            } else {
                result = "fail"
    }
    
        
        })
})