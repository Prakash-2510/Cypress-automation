class Bankregister
{
          txtfirstname="input[id='customer.firstName']";
          txtlastname="input[id='customer.lastName']";
          txtaddress="input[id='customer.address.street']";
          txtcity="input[id='customer.address.city']";
          txtstate="input[id='customer.address.state']";
          txtzipcode="input[id='customer.address.zipCode']";
          txtphone="input[id='customer.phoneNumber']";
          txtxssn="input[id='customer.ssn']";
          txtusername="input[id='customer.username']";
          txtpassword="input[id='customer.password']";
          txtconfirmpassword="#repeatedPassword"
          txtclickbtn="input[value='Register']"
          txtalreadyuser="span[id='customer.username.errors']"


enterfirstname(username)
    {
    cy.get(this.txtfirstname).type(username);
    }

enterlastname(lastname)
    {
    cy.get(this.txtlastname).type(lastname);
    }

enteraddress(address)
    {
    cy.get(this.txtaddress).type(address);
    }

entercity(city)
    {
    cy.get(this.txtcity).type(city);
    }
enterstate(state)
   {
   cy.get(this.txtstate).type(state);
   }
enterzipcode(pincode)   
  {
  cy.get(this.txtzipcode).type(pincode);
  }
enterphoen(number)
  {
  cy.get(this.txtphone).type(number)  
  }  

enterssn(snumber)
  {
  cy.get(this.txtxssn).type(snumber);
  }

enterusername(username)  
  {
  cy.get(this.txtusername).type(username);
  }

enterpassword(password) 
  {
  cy.get(this.txtpassword).type(password);  
  } 

enterconfirmpassword(cnfmpassword)
  {
cy.get(this.txtconfirmpassword).type(cnfmpassword);
  } 

clickregister() 
  {
  cy.get(this.txtclickbtn).click();
  } 

  alreadyusername()
  {
    cy.get(this.alreadyusername).contains('This username already exists.')
  }
}

export default Bankregister;