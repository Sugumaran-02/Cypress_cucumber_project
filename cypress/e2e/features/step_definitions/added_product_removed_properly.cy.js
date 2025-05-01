import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import Add_to_cart_page from '../../pages/Add_to_cart_page'

Then('Product is removed from the cart', ()=>{

    Add_to_cart_page.product_to_removed()

})

Given('Verify the product is removed from cart properly', ()=>{
cy.log("The product is removed");
Add_to_cart_page.removed_verify()

})