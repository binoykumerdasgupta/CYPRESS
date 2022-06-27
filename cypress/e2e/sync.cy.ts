  // Sync and async 
  // Async --> Independent
  // Sync --> run sequences - promises, callback functions, async await
  // Cypress codes are sync
  // Non cypress related codes are Async
  // And should not binding sync and async codes  --> Should handle then keyword 
  

describe('Async and Sync related test cases', () => {
    xit('cy async', () => {
        console.log('Navigate to url')
       // console.log('Enter username')
        setTimeout(() => {console.log('enter username')}, 5000)
        console.log('Enter password')
        console.log('Users log in successfully')
    })

    xit('cy async test', () => {
        console.log('navigating to url') // non cypress code and async
        cy.visit('https://qavbox.github.io/demo/signup/') // cypress code and sync

       // console.log('enter username')
       // cy.get('#username').type('Binoy')
        cy.get('#username').type('Binoy').then(() => {
            console.log('then -enter email')
        })

        console.log('enter email')
        cy.get('#email').type('qatest@email.com')
    })

    it('with some variables', () => {
        let example: any
        cy.visit('https://qavbox.github.io/demo/signup/')

        cy.get('#username').type('Ishaan').invoke('val').then((myValue) => {
            example = myValue
            console.log('INSIDE THEN' + example)
        })

        console.log("OUTSIDE THEN" + example)
        cy.get('#email').type('test@email.com')
    })
})