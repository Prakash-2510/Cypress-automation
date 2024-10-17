class Login 

{

    txtEmailid="[type='text']";
    txtPassword="[type='password']";
    txtbtn=".LoginForm_login_button__B4Ksc";
    txtverify=".LoginForm_error_text__4fzmN";
    txtprofile=".css-1kxy62p";
    txtlogout="#logout-link"


setEmailid(emailid)
{
    cy.get(this.txtEmailid).type(emailid)

}
setPassword(password)
{
    cy.get(this.txtPassword).type(password)
}

setbtn()
{
    cy.get(this.txtbtn).click()

}

setverifylogin()
 {

    cy.get(this.txtprofile).contains('Prakash Olakiya')
 }

 
    iframload()
    {
        cy.frameLoaded('#top-nav-bar-iframe')
    }
 

 logoutUser()

 {
    cy.get(this.txtlogout).should('be.visible');
;
 }
setWrongpassword(wrongpassword)
{
cy.get(this.txtPassword).type(wrongpassword)

}
 setverify()
 {

    cy.get(this.txtverify).contains('Make sure you type your email and password correctly. Both your password and email are case-sensitive')
 }


}
export default Login;