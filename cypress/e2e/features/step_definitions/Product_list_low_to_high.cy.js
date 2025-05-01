const {Given, When, Then} =require('@badeball/cypress-cucumber-preprocessor')
import loginpage from '../../pages/loginpage'
import product_page from '../../pages/productpage'

Then('Click the filter price low to high', ()=>{

    product_page.filter_low_high()


})


When('Check products are listed properly as per filter', ()=>{

    product_page.get_price()

})