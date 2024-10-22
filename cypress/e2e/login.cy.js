import Login from "../Pageobject/login";

describe('Login user', ()=>{

    beforeEach('visitwebsite',()=>{

        cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
        
    })
   
    it('Login User',()=>{
        const ln=new Login();
        ln.setUserName("Prakashp");
        ln.setPassword("Yug@9725574207");
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