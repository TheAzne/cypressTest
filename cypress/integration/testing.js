describe('My First Test', function(){
    it('Visit localhost', function(){
        cy.visit('http://127.0.0.1:5500/index.html')
    })
})

describe('My Second Test', function(){
    it('Visit pages in Github', function(){
        cy.visit('https://theazne.github.io/cypressTest/')
        
    })
})

describe('My Third Test', function(){
    it('Finding an element and', function(){
        cy.contains('Take this challenge online')
        cy.contains('Take this challenge online').click();
    })
})

// describe('My Forth Test', function(){
//     it('Click on the element', function(){
//         cy.contains('Take this challenge online')
        
//     })
// })