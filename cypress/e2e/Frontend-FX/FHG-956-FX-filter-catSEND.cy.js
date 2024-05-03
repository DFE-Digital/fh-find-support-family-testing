describe('FHG-956-FX-filter-catSEND.spec',function(){
       let subcategories = ['Autistic Spectrum Disorder (ASD)','Breaks and respite','Early years support','Groups for parents and carers of children with SEND','Hearing impairment','Learning difficulties and disabilities','Multi-sensory impairment','Other difficulties or disabilities','Physical disabilities','Social, emotional and mental health support','Speech, language and communication needs','Visual impairment']
       let subcatcode = ['1','2','3','4','5','6','7','8','9','10','11','12']
       for (let i=0; i< subcatcode.length; i++){
    
    it(`${subcategories[i]} - Special educational needs and disabilities (SEND) support category - clear filters `,function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('bs5 0sw')
        // cy.serviceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        let k = 37 + i;
        
        cy.activitiesFilter('#send-'+k,`${subcatcode[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        
        // use clear filers 
        cy.clearFilters()

    });
}
    
    

})