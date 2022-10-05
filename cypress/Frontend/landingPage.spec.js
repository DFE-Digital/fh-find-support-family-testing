describe('LandingPage Test',function(){
    it('Landing page main content validation',function(){
        cy.visit('/');
        cy.homepage();
        cy.contains('You can use this service to find support and groups for you or your family.')
        cy.contains('Your nearest family hub is a welcoming place to go that offers a wide range of local support, groups and services for the whole family.')
        // family hub section
        cy.contains('At your local family hub you can find:');
        cy.contains('social groups in your area')
        cy.contains('support for parents and carers, such as with infant feeding')
        cy.contains('children’s health clinics')
        cy.contains('classes and workshops')
        cy.contains('baby and toddler groups')
        cy.contains('youth groups')
        cy.contains('support for special educational needs and disabilities (SEND)')
        // family support services
        cy.contains('Family support services and groups are available for:')
        cy.contains('babies')
        cy.contains('children')
        cy.contains('young people up to age 19 (up to 25 with SEND)')
        cy.contains('parents and carers')
    });
    it('Find a family hub section validation',function(){
        cy.visit('/');
        cy.contains('Find a family hub')
        cy.contains('If you’re looking for general family services and activities near you, family hubs are a good place to start. They bring together local services in one place for families.')
        cy.contains('Your family hub can help your whole family with the nearest:')
        cy.contains('support')
        cy.contains('services')
        cy.contains('groups')
        // validate Start Here button
    })
    it('Find services or groups section validation',function(){
        cy.visit('/');
        cy.contains('Find a family hub')
        cy.contains('If you’re looking for a specific type of support or group, you can search for all kinds of services for families across different family hubs, such as:')
        cy.contains('help with child development')
        cy.contains('groups and classes for babies, toddlers, young people, parents and carers')
        cy.contains('mental health support')
        cy.contains('help with relationships')
        // validate Start Here button
    })
})