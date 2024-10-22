class Login 

{

    txtUserName="input[name='username']";
    txtPassword="input[name='password']";
    txtClickBtn="input[value='Log In']";
    txtVerify="div[id='showOverview'] h1[class='title']"

setUserName(username)
{
    cy.get(this.txtUserName).type(username)

}
setPassword(password)
{
    cy.get(this.txtPassword).type(password)
}

clickBtn()
{

    cy.get(this.txtClickBtn).click();
}

loginVerify()
{
    cy.get(this.txtVerify).contains('Accounts Overview');
}

}
export default Login;