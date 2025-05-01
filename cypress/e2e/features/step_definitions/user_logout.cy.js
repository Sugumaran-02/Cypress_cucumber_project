import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import Login_page from "../../pages/loginpage";
import product_page from "../../pages/productpage";

Then('Verify the product page', ()=>{
product_page.addtocart_image()

})

When('Click on the logout', ()=>{

product_page.options_list()
product_page.logout()
})

Then('Verify logout properly', ()=>{
Login_page.verify_loginpage()


})
