import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import Add_to_cart_page from '../../pages/Add_to_cart_page'
import { handleCypressError } from "../../../support/errorHandler"

Then('Product is removed from the cart', ()=>{

    cy.withErrorHandling(()=>{
        Add_to_cart_page.product_to_removed()
      }, "Product is not removed from the cart")
    
    
        
        

})

Given('Verify the product is removed from cart properly', ()=>{
cy.log("The product is removed");
cy.withErrorHandling(()=>{
    Add_to_cart_page.removed_verify()
  }, "Product is not removed from the cart")




})