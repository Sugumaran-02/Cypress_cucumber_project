class Login_page{


   username= '[id="user-name"]'
   password= '[id="password"]'
   login_button= '[id="login-button"]'

   login(username, password){
    cy.get(this.username).type(username)
    cy.get(this.password).type(password)
    cy.get(this.login_button).click()

   }

   verify_loginpage(){
      cy.url().should('include', 'https://www.saucedemo.com/')
   }



} export default  new Login_page