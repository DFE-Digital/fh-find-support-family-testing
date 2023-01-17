describe('FHG-956-FX-filter-catSEND.spec',function(){
       let subcategories = ['Autistic Spectrum Disorder (ASD)','Breaks and respite','Early years support','Groups for parents and carers of children with SEND','Hearing impairment','Multi-sensory impairment','Other difficulties or disabilities','Physical disabilities','Social, emotional and mental health support','Speech, language and communication needs','Visual impairment','Learning difficulties and disabilities']
       let subcatcode = ['1','2','3','4','5','6','7','8','9','10','11','12']
       for (let i=0; i< subcatcode.length; i++){
    
    it(`${subcategories[i]} - Special educational needs and disabilities (SEND) support category - clear filters `,function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        
        cy.activitiesFilter('5',`${subcatcode[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        
        // use clear filers 
        cy.clearFilters()

    });
}
    
    

})