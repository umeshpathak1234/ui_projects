"use strict";
var personList=[];
$(document).ready(function(){
    
    var personObj1= new Person();
    var personObj2= new Person();
    var personObj3= new Person();
    
    personObj1.setFirstName("George");
    personObj1.setLastName("Micheal");
    personObj1.setPhone("1234-1234");
    personObj1.setEmail("agff@agka.com");
    
    personObj2.setFirstName("NEpali");
    personObj2.setLastName("nalskdf");
    personObj2.setPhone("4321-1234");
    personObj2.setEmail("asdffhf@agka.com");
    
    personObj3.setFirstName("sfagasdf");
    personObj3.setLastName("Msdfag");
    personObj3.setPhone("1987-1234");
    personObj3.setEmail("askdhf@agka.com");
    personList.push(personObj1);
    personList.push(personObj2);
    personList.push(personObj3);
    render();
    
        
    personList.forEach(function(x){
                       x.testFunc();
                      });
    

   $("#add").on('click', submit);
});
