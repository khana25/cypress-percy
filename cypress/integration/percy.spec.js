describe('Visual Regression Testing with Percy and Cypress', () => {

    beforeEach(() => {
        cy.log('I run before every test in every spec file!!!!!!')
      })

    afterEach(function(){
        console.log("----------- Test Case Ended ------------")
    });

    it('should take homepage snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk")
        cy.wait(1000)
        cy.percySnapshot('Homepage', { widths: [414, 834, 1024] });
    })

   /* it('should take Portfolio page snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk//my-home/sign-in")
        cy.wait(10000)
        cy.get('#BS4MYHOMESIGNIN_EMAIL').type('owner2@gmail.com')
        cy.wait(500);
        cy.get('#BS4MYHOMESIGNIN_FORMACTION_FINISH').click()
        cy.wait(500);
        cy.get('#BS4MYHOMESIGNIN_PASSWORD').type('Myhomeplus1')
        cy.wait(500);
        cy.get('#BS4MYHOMESIGNIN_FORMACTION_FINISH').click()
        cy.wait(5000)
       
        cy.xpath("//div[@class='modal-dialog modal-dialog-centered modal-lg']//button[@class='btn btn-secondary close-btn'][contains(text(),'Close')]").click()
        cy.wait(500)
        cy.percySnapshot('Portfolio page', { widths: [414, 834, 1024] });

        cy.visit("https://www.berkeleygroup.co.uk/my-home/development/cobham-quays")
        cy.wait(500)
        cy.percySnapshot('MHP Development page', { widths: [414, 834, 1024] });
    })  */

    it('should take Sustainability snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/about-us/sustainability")
       cy.percySnapshot('Sustainability', { widths: [414, 834, 1024] });
       cy.wait(500)
    })


    it('should take Search Results snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/search-results?allowLazyLoading=false")
        cy.wait(1000)
        cy.percySnapshot('Search Results', { widths: [414, 834, 1024] });
    })

    it('should take marketing preferences snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/marketing-preferences")
        cy.wait(1000)
        cy.percySnapshot('Marketing Preferences', { widths: [414, 834, 1024] });
    })

    it('should take forgotten password snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/forgotten-password")
        cy.wait(1000)
        cy.percySnapshot('Forgotten Password', { widths: [414, 834, 1024] });
    })

    it('should take HTB snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/buying/help-to-buy/participating-developments")
        cy.wait(1000)
        cy.percySnapshot('Help to Buy', { widths: [414, 834, 1024] });
    })

    it('should take Taplow snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/developments/buckinghamshire/taplow/taplow-riverside&allowLazyLoading=false")
        cy.wait(1000)
        cy.percySnapshot('Taplow Rvier Side', { widths: [414, 834, 1024] });
    })

    it('should take Green PArk snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/developments/berkshire/reading/green-park-village&allowLazyLoading=false")
        cy.wait(1000)
        cy.percySnapshot('Green Park', { widths: [414, 834, 1024] });
    })

    it('should take sitemap snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/sitemap")
        cy.wait(1000)
        cy.percySnapshot('sitemap', { widths: [414, 834, 1024] });
    })

    it('should take accessibility snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/accessibility")
        cy.wait(1000)
        cy.percySnapshot('Accessibility', { widths: [414, 834, 1024] });
    })

    it('should take St William snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/about-us/our-brands/st-william")
        cy.wait(1000)
        cy.percySnapshot('St William', { widths: [414, 834, 1024] });
    })

    it('should take St Joseph snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/about-us/our-brands/st-joseph")
        cy.wait(1000)
        cy.percySnapshot('St Joseph', { widths: [414, 834, 1024] });
    })

    it('should take berkeley brand snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/about-us/our-brands/berkeley")
        cy.wait(1000)
        cy.percySnapshot('Berkeley Brand Homepage', { widths: [414, 834, 1024] });
    })

    it('should take St George homepage snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/about-us/our-brands/st-george")
        cy.wait(1000)
        cy.percySnapshot('St George Homepage', { widths: [414, 834, 1024] });
    })

    it('should take St James homepage snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/about-us/our-brands/st-james")
        cy.wait(1000)
        cy.percySnapshot('St James', { widths: [414, 834, 1024] });
    })

    it('should take St Edward snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/about-us/our-brands/st-edward")
        cy.wait(1000)
        cy.percySnapshot('St Edward', { widths: [414, 834, 1024] });
    })

    it('should take MHP snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/my-home/sign-in")
        cy.wait(1000)
        cy.percySnapshot('MHP Sign in page', { widths: [414, 834, 1024] });
    })

    it('should take Careers snapshot', () => {
        cy.visit("https://www.berkeleygroup.co.uk/about-us/careers")
        cy.wait(1000)
        cy.percySnapshot('Careers', { widths: [414, 834, 1024] });
    })
})