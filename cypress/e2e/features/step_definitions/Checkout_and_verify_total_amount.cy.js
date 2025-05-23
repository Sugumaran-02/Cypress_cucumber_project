const {Given, When, Then} =require('@badeball/cypress-cucumber-preprocessor')
import Add_to_cart_page from '../../pages/Add_to_cart_page'
import { handleCypressError } from '../../../support/errorHandler'


When('Checkout the product',()=>{
cy.withErrorHandling(()=>{
    Add_to_cart_page.checkout()
  }, "Product is not Checkedout")



})

Then('Enter the informations and continue', ()=>{
   

    cy.withErrorHandling(()=>{
        Add_to_cart_page.firstname()
    Add_to_cart_page.lastname()
    Add_to_cart_page.postalcode()
    Add_to_cart_page.continue_click()
      }, "Unable to enter the information")
    

})

When('Verify the total amount of the product', ()=>{


cy.withErrorHandling(()=>{
    Add_to_cart_page.verify_total_amount()
  }, "Total amount is not proper")



})