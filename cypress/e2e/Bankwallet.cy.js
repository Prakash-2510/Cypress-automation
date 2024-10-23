import Bankwallet from "../Pageobject/BankWallet";

describe('Bank Wallet', () => {
    beforeEach(() => {
        cy.visit('https://demo.applitools.com')

    });
    it('Positive login', () => {

        const ln=new Bankwallet();
        ln.enterusername("Prakash");
        ln.enterpassword("Yug");
        ln.clicklogin()
    
            
        });
   
});
