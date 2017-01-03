function importFormElements(){
    
    event.preventDefault();
    var personObj=new Person();
    personObj.setFirstName($("#firstName").val());
    personObj.setLastName($("#lastName").val());
    personObj.setEmail($("#email").val());
    personObj.setPhone($("#phone").val());
    console.log("checking");
    var result = personObj.getFirstName();
    result+=personObj.getLastName()+ "<br>";
    result+=personObj.getEmail()+"<br>";
    result+=personObj.getPhone()+"<br>";
    console.log(result);
    return personObj;
}
    function submit(){
        var tempObj=importFormElements();
        personList.push(tempObj); 
       render();
        return false;
    }
    //rendering html content
    function render(){
        var results="";
        personList.forEach(function(personObj){
            results+="<tr>";
            results+="<td>"+ personObj.getFirstName()+"</td>";                                 
            results+="<td>"+ personObj.getLastName()+"</td><td>"
                    + personObj.getEmail()+"</td><td>"
                    + personObj.getPhone()+"</td>"
                +"</tr>";
            $("#resultTbl tbody").html(results);   
                                               
             });
        
        
    }
