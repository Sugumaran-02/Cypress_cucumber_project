Feature: Verify the Snapdeal page

  Scenario Outline: User able to add the product in addtocart
    Given I visit the swag_labs homepage
    When Enter username and password
    Then Add the products to the cart
    When Select the add to cart option
    Then Verify the products are added in the cart

  Scenario Outline: Verify the product listed low to high as per filter
    Given I visit the swag_labs homepage
    When Enter username and password
    Then Click the filter price low to high
    When Check products are listed properly as per filter
  
Scenario: Checkout the product and verify the total amount
    Given I visit the swag_labs homepage
    When Enter username and password
    Then Add the products to the cart
    When Select the add to cart option
    Then Verify the products are added in the cart
    When Checkout the product
    Then Enter the informations and continue
    When Verify the total amount of the product

Scenario: Added product is removed from the cart
    Given I visit the swag_labs homepage
    When Enter username and password
    Then Add the products to the cart
    When Select the add to cart option
    Then Verify the products are added in the cart 
    When Product is removed from the cart
    Then Verify the product is removed from cart properly   

Scenario: User able to logout properly
    Given I visit the swag_labs homepage
    When Enter username and password
    Then Verify the product page 
    When Click on the logout 
    Then Verify logout properly    


 