class Bankwallet

{
   txtusername="#username";
   txtpassword="#password";
   txtxbtn="#log-in";
   txtprofilename=".logged-user-name";
   txtsearchbutton=".element-search.autosuggest-search-activator";
   txtcardtype1="li[class='selected has-sub-menu'] a span";
   txtcardtype2="body > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > ul:nth-child(3) > li:nth-child(3) > a:nth-child(1) > span:nth-child(2)"
   txttime="#time";
   txtaddaccount="a[class='btn btn-primary btn-sm'] span";
   txtmakepayment="a[class='btn btn-success btn-sm'] span";
   txtpending="tbody tr:nth-child(3) td:nth-child(1) span:nth-child(2)"

   enterusername(username)
      {
      cy.get(this.txtusername).type(username);
      }

   enterpassword(password)
       {
        cy.get(this.txtpassword).type(password);
       }

   clicklogin()
       {
       cy.get(this.txtxbtn).click();
       }
   userprofile()
       {
        cy.get(this.userprofile).contains('Jack Gomez');
       }

    searchbutton()
       {
        cy.get(this.txtsearchbutton).should('exist')
       }
     cardtype()
       {
       cy.get(this.txtcardtype1).contains('Credit cards')
       cy.get(this.txtcardtype2).contains('Debit cards')
       }
    banktime()
       {
        cy.get(this.txttime).contains('Your nearest branch closes in')
       }
    addbankaccount()  
       {
       cy.get(this.txtaddaccount).should('be.visible');
       } 
    makepayment()
       {
        cy.get(this.txtmakepayment).should('be.visible');
       }
    pendingpayment()
       {
        cy.get(this.txtpending).should('be.visible');
       }   
    



}

export default Bankwallet;
