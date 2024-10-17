import login from "../Pageobject/login2.js"
import 'cypress-iframe'
describe('login website', () => {

    beforeEach(() => {
        cy.visit('https://profile.w3schools.com/login'); 
      });

    it.only('login', () => {
      

      cy.fixture("credentail").then((op)=>{
        const ln=new login();
        ln.setEmailid(op.emailid);
        ln.setPassword(op.password);
        ln.setbtn();
        cy.wait(5000);
        ln.setverifylogin();
        cy.frameLoaded('#top-nav-bar-iframe');
        cy.iframe('#top-nav-bar-iframe');
        cy.get('#logout-link').click({force:true})
        
        
        
        
    
        
        // ln.logoutUser()


       
      })

      })

      it('wrong password',()=>{
    

        cy.fixture("credentail").then((op)=>{
        const ln=new login();
        ln.setEmailid(op.emailid);
        ln.setWrongpassword(op.wrongpassword);
        ln.setbtn();
        ln.setverify();
        })


      })
      
  })