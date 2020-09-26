

describe('testes-mobile', () => {
    beforeEach(() => {
        cy.viewport('iphone-5') //320x568
        /*
        cy.viewport('iphone-6') //375x667
        cy.viewport('samsung-s10') //360x760
        cy.viewport('ipad-mini') //768x1024
        */
    })


    it("swipes through tutorial", () => {
        cy.habilitaTutorialEmStorage()

        cy.deslizaParaEsquerda()
        cy.deslizaParaEsquerda()
        cy.deslizaParaEsquerda()
        
        cy.contains("Continue").click()
    })

    it('skipes the tutorial', () => {
        cy.habilitaTutorialEmStorage()

        cy.contains('Skip').click()
    });

    // it("adds a session from list to favorites", () => {
    //     cy.desabilitaTutorialEmStorage();
    //     cy.contains('University of Ionic').click({ force: true });
    //     cy.get('[data-cy=favorite]').click();
    //     cy.get('[data-cy=back').click();
    //     cy.contains('Favorites').click();
    //     cy.contains('University of Ionic');
    // })

    it("enables dark mode", () => {
        cy.desabilitaTutorialEmStorage();
        cy.get('[data-cy=menu]').click();
        cy.get('[data-cy=dark-mode]').click();

        cy.contains("Dark Mode")
            .should('have.css', 'color', 'rgb(255, 255, 255)')
    })

    // it("searches for a session and adds to favorites", () => {
    //     cy.desabilitaTutorialEmStorage();
    //     cy.get('[data-cy=search]').click();
    //     cy.get('[data-cy=searchbar]').click().type("Angular{enter}")
    //     cy.contains("Angular Directives").click();
    //     cy.get('[data-cy=favorite]').click();
    //     cy.get('[data-cy=back]').click();
    //     cy.contains("Favorites").click();
    //     cy.contains("Angular Directives");
    // })

})