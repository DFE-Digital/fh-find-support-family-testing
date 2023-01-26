//
describe('FHG--FX-filter-age.spec - Age filter category',function(){
  // activities filter - Holiday clubs and schemes
       let subcategories = ['All ages','0 to 12 months','1 year old','2 year old','3 year old','4 year old','5 year old','6 year old','7 year old','8 year old','9 year old','10 year old','11 year old','12 year old','13 year old','14 year old','15 year old','16 year old','17 year old','18 year old','19 year old','20 year old','21 year old','22 year old','23 year old','24 year old','25 year old']
       let allAges = ['0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 18','0 to 25+','0 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+']
      //  let excludedAges = ['null','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','16 to 25+','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5','0 to 5']
       for (let i=0; i< subcategories.length; i++){
     it(`${subcategories[i]} - Children and young people - clear filters - validation ${allAges[i]}`,function(){
        cy.visit('/PostcodeSearch')
        cy.searchHubsPage()
        cy.searchbypostcode('m6 5uj')
        // cy.ServiceFilterPage();
        // cy.familyHubDetails();
        // cy.serviceDetails();
        cy.get('input#children_and_young-option-selected').click()
        // cy.get('.govuk-form-group > #children_and_young-select').click()
        cy.get('select#children_and_young-select').select(`${subcategories[i]}`)
        cy.get('div#filters > .govuk-button').click()
        cy.get('.moj-filter__selected').contains(`${subcategories[i]}`).should('exist')
        cy.get('.govuk-grid-column-two-thirds').contains(`${allAges[i]}`).should('exist')
        // cy.get('.govuk-grid-column-two-thirds').contains(`${excludedAges[i]}`).should('not.be.visible')
        // validate family hubs dont show on top of the list 
        // cy.get('.app-family-hub').should('not.exist')
        
        // use clear filers 
        cy.clearFilters()

    });
  }
})