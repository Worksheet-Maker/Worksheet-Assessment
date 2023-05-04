// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//const cypress = require("cypress");
Cypress.on("uncaught:exception",(error,runnable)=>{
    return false
})
Cypress.Commands.add("selectorClick",(selector)=>{
        cy.get(selector).click({force:true})
})
// Cypress.Commands.add("urlIncludes",(text)=>{
//     cy.url().should("include",text)
// })
// Cypress.Commands.add("removeTarget",(selector,text)=>{
//     cy.get(selector).invoke("removeAttr","target").click({force:true})
// })
// Cypress.Commands.add("typeText",(selector,text)=>{
//     cy.selectorClick(selector).type(text)
// })
//     Cypress.Commands.add("ContainsText",(selector,text)=>{
//         cy.contains(selector,text).should("be.visible")
//     })
    Cypress.Commands.add("selectorVisible",(selector)=>{
        cy.get(selector).should("be.visible")
    })

//     Cypress.Commands.add("noText",(selector,text)=>{
//         cy.get(selector).should("not.have.text",text)

//     })
