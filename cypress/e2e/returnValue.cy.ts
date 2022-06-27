describe('Returning attribute or value', () => {
    xit('Invoking a value', () => {
        cy.visit('https://qavbox.github.io/demo/signup/')
        // fetching the value from the text box
        cy.get('#username').type('binoy').invoke('val').then((myValue:any)=> {
            cy.log(myValue)
        })
    })
    xit('validate a text data', () => {
        cy.visit('https://qavbox.github.io/demo/signup/')
        cy.get('#username').clear().type('binoytest').should('have.value', 'binoytest')    
    })
    it('validate a text label with promises', () => {
        cy.visit('https://qavbox.github.io/demo/signup/')
        cy.get('#lblname').invoke('text').then((myVal:any) => {
            cy.log(myVal)
        })   
    })
    it('validate a text label', () => {
        cy.visit('https://qavbox.github.io/demo/signup/')
        cy.get('#lblname').should('have.text', 'Full Name')    
    })
    it('validate a check box checked or Not as if not checked ', () => {
        cy.visit('https://qavbox.github.io/demo/signup/')
        cy.get('input[value=\'automationtesting\']').invoke('prop', 'checked').then((myValue:any) => {
            cy.log(myValue) //  False
        }) 
    })
    it('validate a check box checked as if it checked', () => {
        cy.visit('https://qavbox.github.io/demo/signup/')
        cy.get('input[value=\'automationtesting\']').click().invoke('prop', 'checked').then((myValue:any) => {
            cy.log(myValue) // True
        }) 
    })
    it('validate a properties name', () => {
        cy.visit('https://qavbox.github.io/demo/signup/')
        cy.get('input[value=\'automationtesting\']').click().invoke('prop', 'name').then((myValue:any) => {
            cy.log(myValue) // True
        }) 
    })
    it('validate href tags', () => {
        cy.visit('https://qavbox.github.io/demo/signup/')
        cy.contains('Tutorials!').invoke('prop', 'href').then((myValue:any) => {
            cy.log(myValue) // True
        }) 
    })

})