const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
import { handleCypressError } from "../../../support/errorHandler";
// const Login_page = require("../../pages/loginpage");
// const product_page = require("../../pages/productpage");
import Login_page from "../../pages/loginpage";
import product_page from "../../pages/productpage";



Given("I visit the swag_labs homepage", function () {

cy.withErrorHandling(()=>{
  cy.visit("https://www.saucedemo.com/")
  }, "Unable to visit homepage")



  
  
});

When("Enter username and password",  ()=> {
 
  cy.withErrorHandling(()=>{
    cy.fixture('testdata').then((data)=>{
      cy.log(data.username)
          Login_page.login(data.username, data.password)
      
        })
    }, "Username or password is incorrect")

 
 

  });

  Then("Add the product to the cart", () => {
    
cy.withErrorHandling(()=>{
  product_page.selectproduct()
  }, "products is not added to the cart properly")

    
    
   
   });