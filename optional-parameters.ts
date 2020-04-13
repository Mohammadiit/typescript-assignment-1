function sayThanks (thanks ?: string){
    console.log(thanks);
}

console.log(sayThanks());
console.log(sayThanks("Many thanks"));



// example 2




function printName(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result13 = printName("Simon");                  // works correctly now
let result3 = printName("Simon", "Adams"); 


// example 3




function validateSchool(name: string, address?: string, pinCode?: string) {
    if (address == undefined) {
        console.log('address not defined');
    }
    if (pinCode == undefined) {
        console.log('pincode not defined');
    }

    console.log(name);
}

validateSchool ("TestSchool");
validateSchool ("TestSchool","Uttara");
validateSchool ("TestSchool","Uttara","234");