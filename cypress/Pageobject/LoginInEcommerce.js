class Logininecommerce

{

    txtUserName="#user-name";
    txtPassword="#password";
    txtClickBtn="#login-button";
    txtVerify=".app_logo"

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
    cy.get(this.txtVerify).contains('Swag labs');
}

}
export default Logininecommerce;