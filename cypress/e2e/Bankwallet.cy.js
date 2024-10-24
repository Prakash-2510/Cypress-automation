import Bankwallet from "../Pageobject/BankWallet";
const ln = new Bankwallet();
describe('Bank Wallet', () => {
    beforeEach(() => {
        cy.visit('https://demo.applitools.com')
        ln.enterusername("Prakash");
        ln.enterpassword("Yug");
        ln.clicklogin()
    });
    it('User Profile Verify', () => {
        ln.userprofile();
    });
    it('Search button show to user', () => {
        ln.searchbutton()
    });
    it('Verify the two card type', () => {
        ln.cardtype()
    });
    it('Bank close time', () => {
        ln.banktime()
    });
    it('Add account button verify', () => {
        ln.addbankaccount()
    });
    it('Make payment button verify', () => {
        ln.makepayment()
    });
    it('Make payment button verify', () => {
        ln.pendingpayment()
    });

});
