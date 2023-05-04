declare namespace Cypress{
    interface Chainable{
        selectorClick:(selector:string)=>void,
        selectorVisible:(selector:string)=>void

    }

}