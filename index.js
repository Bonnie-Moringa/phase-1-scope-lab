// Write your solution in this file!
//Declaring customerName in the global scope
var customerName = "bob"; 

//return customerName
function returnCustomerName() {
  return customerName;
}

//modify customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

//set bestCustomer
function setBestCustomer() {
    bestCustomer = "not bob"; // Implicitly global
  }
  
  //overwrite bestCustomer
function overwriteBestCustomer() {
    bestCustomer = "maybe bob"; // Reassigns the global bestCustomer variable
  }
  
  