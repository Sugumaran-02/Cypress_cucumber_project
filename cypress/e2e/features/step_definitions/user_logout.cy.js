import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_page from "../../pages/loginpage";
import product_page from "../../pages/productpage";
import { handleCypressError } from "../../../support/errorHandler";

Then('Verify the product page', ()=>{

    cy.withErrorHandling(()=>{
        product_page.addtocart_image()
      }, "products is not added to the cart properly")
    


})

When('Click on the logout', ()=>{

    cy.withErrorHandling(()=>{
        product_page.options_list()
        product_page.logout()
      }, "Unable to logged out")




})

Then('Verify logout properly', ()=>{
    cy.withErrorHandling(()=>{
        Login_page.verify_loginpage()

      }, "Login page is not verified")

  


})
