interface Dictionary {    
    readonly [x: string]: string;  
  }
  let dict: Dictionary = {'foo': 'foo'};

interface Image {
    [key: string]: boolean
}
let image1: Image = {'FOCUSED': true, 'BLURRED':false};
console.log(image1); 

interface PersonalInformation {
    [key: string]: any
}
let person1:PersonalInformation = {};
person1.dateOfBirth = new Date(0);
person1.firstName = 'Mozart';

console.log(person1.dateOfBirth);