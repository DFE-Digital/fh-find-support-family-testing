describe('FHG-747-FX-startNowPage.spec',function(){
    it('AC 1 - Landing page main content validation',function(){
        cy.visit('/');
        cy.homepage();
        // validate copy
        cy.contains('activities for babies, toddlers, young people, parents and carers');
        cy.contains("support for parents and carers, such as with children's health, care and development");
        cy.contains('support with special educational needs and disabilities (SEND)');
        cy.contains('help with mental health, relationships, money, housing or family life');
        cy.contains('You can find specific types of support and search for all kinds of family services and activities run by different organisations.');
        cy.contains('You will also be able to find your nearest family hub. They offer general family services and activities in your local area, and are a great place to start looking.');
    });
    it('AC 2 -Start now - Search for local family support and services',function(){
        cy.visit('/');
        cy.homepage();
        cy.get("a[role='button']").click()
        cy.contains('Search for local family support and services')
        // back button
        cy.get('.govuk-back-link').click()
        cy.homepage();

    })
})