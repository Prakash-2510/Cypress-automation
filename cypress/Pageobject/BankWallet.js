class Bankwallet

{
   txtusername="#username";
   txtpassword="#password";
   txtxbtn="#log-in";

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
 


}

export default Bankwallet;
