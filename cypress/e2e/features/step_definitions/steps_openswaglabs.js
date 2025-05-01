const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
// const Login_page = require("../../pages/loginpage");
// const product_page = require("../../pages/productpage");
import Login_page from "../../pages/loginpage";
import product_page from "../../pages/productpage";



Given("I visit the swag_labs homepage", function () {
  cy.visit("https://www.saucedemo.com/")
  
});

When("Enter username and password",  ()=> {
 

  cy.fixture('testdata').then((data)=>{
cy.log(data.username)
    Login_page.login(data.username, data.password)

  })
 

  });

  Then("Add the product to the cart", () => {
    
    product_page.selectproduct()
   
   });