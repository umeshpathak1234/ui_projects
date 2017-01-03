"use strict";
function Person(){
    var firstName,lastName,phone,email;
    this.setFirstName=function(fname){
        firstName=fname;
    }
    this.setLastName=function(lname)
    {
        lastName=lname
    }
    this.setPhone=function(ph)
    {
        phone=ph;
    }
    this.setEmail=function(em)
    {
        email=em;
    }
    this.getFirstName =function(){
        return firstName;
    }
    this.getLastName =function(){
        return lastName;
        
    }
    this.getPhone =function(){
        return phone;
    }
    this.getEmail =function(){
        return email;
    }
    this.testFunc=function(){
        console.log("Rendering object");
        console.log(this.getFirstName());
        console.log(this.getLastName());
        console.log(this.getPhone());
        console.log(this.getEmail());
    }
}  
