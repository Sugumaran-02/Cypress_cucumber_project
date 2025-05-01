const {Given, When, Then} =require('@badeball/cypress-cucumber-preprocessor')
import Add_to_cart_page from '../../pages/Add_to_cart_page'


When('Checkout the product',()=>{
Add_to_cart_page.checkout()

})

Then('Enter the informations and continue', ()=>{
Add_to_cart_page.firstname()
Add_to_cart_page.lastname()
Add_to_cart_page.postalcode()
Add_to_cart_page.continue_click()
})

When('Verify the total amount of the product', ()=>{
Add_to_cart_page.verify_total_amount()

})