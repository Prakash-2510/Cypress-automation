import Login from "../Pageobject/LoginInEcommerce";

describe('Login user', ()=>{

    beforeEach('visitwebsite',()=>{

        cy.visit('https://www.saucedemo.com/');
        
    })
   
    it.only('Login User',()=>{
        const ln=new Login();
        ln.setUserName("standard_user");
        ln.setPassword("secret_sauce");
        ln.clickBtn();
        ln.loginVerify()
        
  

    })

    it('Username not found',()=>{
      const ln=new Login();
      ln.setUserName("Prakashddd");
      ln.setPassword("Yug@9725574207");
      ln.clickBtn();
      
      


  })





})