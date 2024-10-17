class Login 

{

setEmailid(emailid)
{
    cy.get('[type="text"]').type(emailid)

}
setPassword(password)
{
    cy.get("[type='password']").type(password)
}

setbtn()
{
    cy.get(".LoginForm_login_button__B4Ksc").click()
}
}
export default Login;