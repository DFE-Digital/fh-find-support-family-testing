describe('test',function(){

it('test - Both , clear each filter ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
       
        // both filters unchecked
       cy.familyhubsFilter('Both')
        let pages = cy.get('.govuk-pagination__list')
       cy.log(pages.index)
    //   
    //    for ( let i=1; i< pages.length; i++){

    //    }



    //    let familyhub =  cy.get('.govuk-grid-column-two-thirds').contains('Family hub').should('exist')
    //    let pages =  cy.findItem(pageNumber)
       
    //    let found = false;
    //   for (let i = 1; i < pages.length; i++) {
    //     if (pages[i] == 'familyhub') {

    //       found = true;
    //       break;
    //     }
       
    //   }
    //   expect(found).to.be.true;

       
    

    });
})