const {Given, When, Then} =require('@badeball/cypress-cucumber-preprocessor')
import loginpage from '../../pages/loginpage'
import product_page from '../../pages/productpage'
import { handleCypressError } from '../../../support/errorHandler'

Then('Click the filter price low to high', ()=>{

    
    
    cy.withErrorHandling(()=>{
        product_page.filter_low_high()
      }, "Unable to click the filter")
    


})


When('Check products are listed properly as per filter', ()=>{

    
cy.withErrorHandling(()=>{
    product_page.get_price()
  }, "products is not listed properly as per filter")

})