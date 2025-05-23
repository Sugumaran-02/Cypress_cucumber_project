class Add_to_Cart{

    Checkout_button='[id="checkout"]'
    First_name='[class="input_error form_input"][id="first-name"]'
    Last_name='[id="last-name"]'
    Postal_code='[id="postal-code"]'
    Continue_button='[id="continue"]'
    cart_list='[class="cart_list"]'
    price_list='[class="inventory_item_price"]'
    item_total='[class="summary_subtotal_label"]'
    remove_product_button='[class="btn btn_secondary btn_small cart_button"]'
     add_tocart_product_list='[class="cart_list"] [class="cart_item"]'
  add_tocart_product='[class="inventory_item_name"]'

    checkout(){
        cy.get(this.Checkout_button).click()
    }

    firstname(){
        cy.get(this.First_name).type("Sugu")
    }

    lastname(){
        cy.get(this.Last_name).type("Maran")
    }

    postalcode(){
        cy.get(this.Postal_code).type("624204")
    }
    continue_click(){
        cy.get(this.Continue_button).click()
    }

    verify_total_amount(){
    let totalprice=[]
    cy.get(this.price_list).each(($el)=>{
   let priceofproduct= $el.text().replace('$','').trim()
   totalprice.push(parseFloat(priceofproduct));   // push as a number
    }).then(()=>{
        cy.get(this.item_total).invoke('text').then((text)=>{
    
            const item_totalamount = text.replace('Item total: $', '').trim();   // Extract the number as string
            const totalAmountNumber = parseFloat(item_totalamount);              // Convert string to number
            cy.log("The total amount of the product is " + totalAmountNumber);    // Log the number

            // Optional: if you want to verify
            const sum = totalprice.reduce((a, b) => a + b, 0);
            expect(totalAmountNumber).to.eq(sum);
          })

    })
    }

    product_to_removed() {

        var productname = ['Sauce Labs Backpack']
        cy.get(this.add_tocart_product_list).should('have.length', 2);
    
        cy.get(this.add_tocart_product_list).each(($el) => {
    
          cy.wrap($el).find(this.add_tocart_product).invoke('text').then((productText) => {
            if (productname.includes(productText)) {
                cy.wrap($el).find(this.remove_product_button).click()
              cy.log("The product is removed successfully"+ productText)
              cy.log("Check for jenkins")
            }
    
          })
    
        })
    
      }
    
    removed_verify(){

        var productname = ['Sauce Labs Backpack']
      //  cy.get(this.add_tocart_product_list).should('have.length', 2);
    
        cy.get(this.add_tocart_product_list).each(($el) => {
    
          cy.wrap($el).find(this.add_tocart_product).invoke('text').then((productText) => {
            if (!productname.includes(productText)) {
                cy.log("The product is removed successfully"+ productText)
            }
    
          })
    
        })
    

    }



}export default new Add_to_Cart



