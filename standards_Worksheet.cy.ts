///<reference types = "Cypress"/>
const data = require("../../fixtures/selectors.json");
import "../../support/commands.ts";
describe('Common Core Standards Page', () => {
  before(function () {
    cy.fixture("selectors").then(function (data) {
      globalThis.data = data
    })
  })
  beforeEach(function () {
    cy.visit("/")
  })
  it('When a User clicks a subject English - Grades level', () => {
    cy.selectorClick(data.documents.subject)
    cy.get(data.documents.gradeLevels).should("contain", "Grade 1").and("contain", "Grade 2")
      .and("contain", "Grade 3").and("contain", "Grade 4").and("contain", "Grade 5").and("contain", "Grade 6")
      .and("contain", "Grade 7").and("contain", "Grade 8").and("contain", "Grades 9-10").and("contain", "Grades 11-12")
      .should("be.visible")
  })
  it('When a user clicks a grade level - Domain Panel', () => {
    cy.selectorClick(data.documents.subject)
    cy.get(data.documents.gradeLevels).then(grades => {
      const random = (count = grades.length) => Math.floor(Math.random() * count)
      cy.get(data.documents.gradeLevels).eq(random()).click({ force: true })
      cy.selectorVisible(data.documents.domainPanel)
    })
  })
  it('When a user clicks a domain - subdomain panel', () => {
    cy.selectorClick(data.documents.subject)
    cy.get(data.documents.gradeLevels).then(grades => {
      const random = (count = grades.length) => Math.floor(Math.random() * count)
      cy.get(data.documents.gradeLevels).eq(random()).click({ force: true })
      cy.get(data.documents.domains).eq(0).click({ force: true })
      cy.selectorVisible(data.documents.subDomain)

    })
  })
  it('When a user clicks a subdomain - a panel', () => {
    cy.selectorClick(data.documents.subject)
    cy.get(data.documents.gradeLevels).then(grades => {
      const random = (count = grades.length) => Math.floor(Math.random() * count)
      cy.get(data.documents.gradeLevels).eq(random()).click({ force: true })
      cy.get(data.documents.domains).eq(0).click({ force: true })
      cy.selectorClick(data.documents.subDomains)
      cy.selectorVisible(data.documents.subPanel)

    })
  })
  it('Assuming a user clicks ‘English > Kindergarten > Language > Conventions of English’', () => {

     cy.selectorClick(data.documents.subject)
     cy.get(data.documents.gradeLevels).contains("Kindergarten").click({force:true})
     cy.get(data.documents.domains).contains("Language").click({force:true})
     cy.get(data.documents.subDomains).contains("Conventions of Standard English").click({force:true})
     cy.selectorVisible(data.documents.listItems)
     cy.get(data.documents.blueText).should("contain"," You have not selected any standard. Your selected standards will appear here. ")
     Cypress._.times(2,()=>{

     cy.get(data.documents.checkbox).then(items => {
      const random = (count = items.length) => Math.floor(Math.random() * count)
      cy.get(data.documents.checkbox).eq(random()).click({ force: true })
      .parents(".items-start").find("label").invoke("text")
      .then($name=>{
        cy.get(data.documents.blueText).should("not.exist")  
        cy.selectorVisible(data.documents.standardList)
        cy.get(data.documents.standardList).should("contain",$name)
          })
        })
    }) 

   })
   it('When a user unchecks all the checkboxes', () => {

    cy.selectorClick(data.documents.subject)
    cy.get(data.documents.gradeLevels).contains("Kindergarten").click({force:true})
    cy.get(data.documents.domains).contains("Language").click({force:true})
    cy.get(data.documents.subDomains).contains("Conventions of Standard English").click({force:true})
    cy.selectorVisible(data.documents.listItems)
    cy.get(data.documents.blueText).should("contain"," You have not selected any standard. Your selected standards will appear here. ")
    Cypress._.times(2,()=>{
      cy.get(data.documents.checkbox).eq(0).click({ force: true })
    })
    cy.selectorVisible(data.documents.blueText)
  })
})