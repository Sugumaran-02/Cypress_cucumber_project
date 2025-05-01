const { Given, When, Then } = require("@badeball/cypress-cucumber-preprocessor");
  import product_page from "../../pages/productpage";
  



Given('Add the products to the cart',()=>{
  
  product_page.selectproduct()
     
})

When('Select the add to cart option', ()=>{

  product_page.selectaddtocart()


})

Then('Verify the products are added in the cart', ()=>{

 product_page.product_to_verify()
 
})


