describe('FHG-952-FX-filter-familySupport.spec -  Filter Search Result by Family support category',function(){
    it('Family Support filter - clear filters ',function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('e1 5jy')
        cy.ServiceFilterPage();
        cy.familyHubDetails();
        cy.serviceDetails();
        
      // Filter Search Result by Family support category
      
    //    let subcategories = ['Bullying and cyber bullying','Debt and welfare advice','Domestic abuse','Intensive targeted family support','Money, benefits and housing','Parenting support','Reducing parental conflict','Separating and separated parent support','Stopping smoking','Substance misuse (including alcohol and drug)','Targeted youth support','Youth justice services']
    let subcategories = ['Bullying and cyber bullying','Intensive targeted family support','Money, benefits and housing','Parenting support']

       let subcatcode = ['1','4','5','6']
       for (let i=0; i< subcatcode.length; i++){
        cy.activitiesFilter('2',`${subcatcode[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        
        // use clear filers 
        cy.clearFilters()

       }
    });
    

})