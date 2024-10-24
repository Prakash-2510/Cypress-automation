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
        it('User Profile Verify', () => {
            const ln=new Bankwallet();
            ln.enterusername("Prakash");
            ln.enterpassword("Yug");
            ln.clicklogin();
            ln.userprofile();
        });
        it('Search button show to user', () => {
            const ln=new Bankwallet();
            ln.enterusername("Prakash");
            ln.enterpassword("Yug");
            ln.clicklogin();
            ln.searchbutton()
        });

        it('Verify the two card type', () => {
            const ln=new Bankwallet();
            ln.enterusername("Prakash");
            ln.enterpassword("Yug");
            ln.clicklogin();
            ln.cardtype()
        });

        it('Bank close time', () => {
            const ln=new Bankwallet();
            ln.enterusername("Prakash");
            ln.enterpassword("Yug");
            ln.clicklogin();
            ln.banktime()
        });
        it('Add account button verify', () => {
            const ln=new Bankwallet();
            ln.enterusername("Prakash");
            ln.enterpassword("Yug");
            ln.clicklogin();
            ln.addbankaccount()
        });
        it('Make payment button verify', () => {
            const ln=new Bankwallet();
            ln.enterusername("Prakash");
            ln.enterpassword("Yug");
            ln.clicklogin();
            ln.makepayment()
      
        });
        it('Make payment button verify', () => {
            const ln=new Bankwallet();
            ln.enterusername("Prakash");
            ln.enterpassword("Yug");
            ln.clicklogin();
            ln.pendingpayment()
      
        });



       
   
});
