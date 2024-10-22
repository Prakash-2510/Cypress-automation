import Bankregister from "../Pageobject/BankRegister";

describe('Register', ()=>{

    beforeEach('visitwebsite',()=>{

        cy.visit('https://parabank.parasoft.com/parabank/index.htm?ConnType=JDBC');
        cy.get('#loginPanel > :nth-child(3) > a').click({force: true} );
    })
   
    
    it('Sucessfull Registation',()=>{

       
        const ln=new Bankregister();
        ln.enterfirstname("Prakash");
        ln.enterlastname("Olakiya");
        ln.enteraddress("602- srgasan");
        ln.entercity("Gandhinagar");
        ln.enterstate("Gujarat");
        ln.enterzipcode("382421");
        ln.enterphoen("9725574207");
        ln.enterssn("456789GFGH");
        ln.enterusername("Prakashp");
        ln.enterpassword("Yug@9725574207");
        ln.enterconfirmpassword("Yug@9725574207");
        ln.clickregister();

    })
    it('User name already exist eorr message show',()=>{

        const ln=new Bankregister();
        ln.enterfirstname("Prakash");
        ln.enterlastname("Olakiya");
        ln.enteraddress("602- srgasan");
        ln.entercity("Gandhinagar");
        ln.enterstate("Gujarat");
        ln.enterzipcode("382421");
        ln.enterphoen("9725574207");
        ln.enterssn("456789GFGH");
        ln.enterusername("Prakashp");
        ln.enterpassword("Yug@9725574207");
        ln.enterconfirmpassword("Yug@9725574207");
        ln.clickregister();
        ln.alreadyusername()

    })







})