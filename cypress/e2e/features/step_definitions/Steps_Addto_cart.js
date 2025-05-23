const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
  import product_page from "../../pages/productpage";
  import { handleCypressError } from "../../../support/errorHandler";
  



Given('Add the products to the cart',()=>{
  
  cy.withErrorHandling(()=>{
    product_page.selectproduct()
  }, "Product is not added to the cart")
  
 
  
     })

When('Select the add to cart option', ()=>{

  cy.withErrorHandling(()=>{
    product_page.selectaddtocart()
  }, "Add to cart option is not selected")
  
 
  
})

Then('Verify the products are added in the cart', ()=>{

  cy.withErrorHandling(()=>{
    product_page.product_to_verify()
  }, "Verified the products are added in the cart is failed")
 

})


