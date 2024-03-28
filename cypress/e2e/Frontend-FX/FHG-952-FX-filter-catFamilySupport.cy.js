describe('FHG-952-FX-filter-familySupport.spec -  Filter Search Result by Family support category',function(){
// Filter Search Result by Family support category
      
    let subcategories = ['Bullying and cyber bullying','Debt and welfare advice','Domestic abuse','Intensive targeted family support','Money, benefits and housing','Parenting support','Reducing parental conflict','Separating and separated parent support','Stopping smoking','Substance misuse (including alcohol and drug)','Targeted youth support','Youth justice services']

       let subcatcode = ['1','2','3','4','5','6','7','8','9','10','11','12']
       for (let i=0; i< subcatcode.length; i++){
      
    it(`${subcategories[i]} - Family Support filter - clear filters`,function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('pr2 1qs')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        let k = 14 + i;
        
        cy.activitiesFilter('#family-support-'+k,`${subcatcode[i]}`)
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${subcategories[i]}`).should('exist')
        // validate family hubs dont show on top of the list 
        cy.get('.app-family-hub').should('not.exist')
        
        // use clear filers 
        cy.clearFilters()

    });
  }

})