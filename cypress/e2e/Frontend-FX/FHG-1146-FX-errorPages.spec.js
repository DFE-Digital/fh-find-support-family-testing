describe('FHG-1146-FX-errorPages.spec',function(){
    it('No results found page - no family hubs or services found for postcode , link to LA , back button',function(){
        cy.visit('/');
        cy.clearCookies();
        cy.homepage();
        cy.searchHubsPage()
        cy.searchbypostcode('M15 4QZ')
        cy.noResultsPage()
        // back button 
        cy.get('.govuk-back-link').click();
        cy.searchHubsPage();
    });
    it('error pages - 400 , 500 ,404 ',function(){
        const pages = ['400','500','404']
        for (let i=0; i < pages.length;i++){
            cy.visit(`/${pages[i]}`,{failOnStatusCode: false})
            cy.contains('Page not found')
            cy.contains('If you typed the web address, check it is correct.')
            cy.contains('If you pasted the web address, check you copied the entire address.')

        }
       
    })

})