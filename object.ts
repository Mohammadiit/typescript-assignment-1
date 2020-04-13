
 var car1 = {
    name : "Ferrari",
   numberPlate : "y802kdif"
} 

console.log( car1.numberPlate);



// example 2




var person = { 
    firstname:"Tom", 
    lastname:"Hanks" 
 }; 
 console.log(person.firstname) 
 console.log(person.lastname)


// example 3




 var person12 = {
    firstName:"Tom", 
    lastName:"Hanks", 
    sayHello:function() {  }  
 } 
 person12.sayHello = function() {  
    console.log("hello "+person12.firstName)
 }  
 person12.sayHello();
