describe('FHG-1313-FX-dfeBranding.spec',function(){
    it('AC 1,2,3 - dfe branding on all pages',function(){
        cy.visit('/')
        cy.dfeBranding()
        cy.get("a[role='button']").click();
        cy.searchHubsPage()
        cy.dfeBranding()
        cy.get("a[role='button']").click();
        cy.dfeBranding()
        cy.get("a[role='button']").click();
        cy.searchbypostcode('M6 5UJ')
        cy.dfeBranding()
        cy.get("a[role='button']").click();
        cy.searchHubsPage()
        cy.searchbypostcode('M6 5UJ')
        cy.ServiceFilterPage();
        cy.dfeBranding()
    })
})