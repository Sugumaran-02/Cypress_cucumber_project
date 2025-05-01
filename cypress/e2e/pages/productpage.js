class product_page {


  add_to_cart_image='[id="shopping_cart_container"]'
  product_list = '[class="inventory_list"]>div'
  productname = ["Sauce Labs Backpack", "Sauce Labs Fleece Jacket"]
  add_to_cart_Button = '[class="shopping_cart_link"]'
  filter_dropdown = '[class="product_sort_container"]'
  price = '[class="inventory_item_price"]'
  add_tocart_product_list='[class="cart_list"] [class="cart_item"]'
  add_tocart_product='[class="inventory_item_name"]'
  options_button='[id="react-burger-menu-btn"]'
  logout_button='[id="logout_sidebar_link"]'

  selectproduct() {

    cy.get(this.product_list).each(($el, index, $list) => {
      cy.wrap($el).find(".inventory_item_name").invoke('text').then((name) => {
        cy.log(name)
        if (this.productname.includes(name.trim())) {
          cy.wrap($el).find('[class="btn btn_primary btn_small btn_inventory "]').click()
        }

      })
    })



  }

  selectaddtocart() {
    cy.get(this.add_to_cart_Button).click()
  }


  filter_low_high() {
    cy.get(this.filter_dropdown).select('Price (low to high)')
  }

  get_price() {
    let totalprice = []

    cy.get(this.price).each(($el) => {

      const priceinrange = $el.text().replace('$', '').trim()

      totalprice.push(priceinrange)
      cy.log(`Found price: ${priceinrange}`);
    }).then(() => {

      // Sort totalprice array from low to high
      totalprice.sort((a, b) => a - b);

      cy.log(`Prices sorted from low to high: ${totalprice}`)
    })

  }


  product_to_verify() {

    var productname = ['Sauce Labs Backpack', 'Sauce Labs Bike Light']
    cy.get(this.add_tocart_product_list).should('have.length', 2);

    cy.get(this.add_tocart_product_list).each(($el) => {

      cy.wrap($el).find(this.add_tocart_product).invoke('text').then((productText) => {
        if (productname.includes(productText)) {
          cy.log("The product is added successfully")
        }

      })

    })

  }

  addtocart_image(){
   cy.get(this.add_to_cart_image).should('be.visible')
  }

  options_list(){
   cy.get( this.options_button).click()
  }

  logout(){
    cy.get(this.logout_button).click()
  }


} export default new product_page  