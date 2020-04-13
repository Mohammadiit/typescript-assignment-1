class Person {
    name: string;
    age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

class Servant extends Person {
    salary: number;

    constructor(name: string, age: number, salary: number) {
        //calling super class constructor
        super(name, age);
        this.salary = salary;
    }
}

let emp = new Servant("Kamal", 23, 3000);
console.log(emp);

class Vehicle {
    numberOfPassanger : number;
    petrolNeeded : number;

    constructor (numberOfPassanger, petrolNeeded) {
        this.numberOfPassanger = numberOfPassanger;
        this.petrolNeeded = petrolNeeded;
    }
}

class Bus extends Vehicle {
    helperSalary : number;

    constructor (numberOfPassanger, petrolNeeded, helperSalary) {
        super (numberOfPassanger, petrolNeeded);
        this.helperSalary = helperSalary;
    }
}

class ServideHolder {
    firstName : string;
    lastName : string;

    constructor (firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }
}

class commissionHolderEmployee extends ServideHolder {
    commissionAmount : number;
    constructor (firstName, lastName, commissionAmount) {
        super (firstName,lastName);
        this.commissionAmount = commissionAmount;
    }
}

class monthlySalariedEmployee extends ServideHolder {
    monthlySalary : number;
    constructor (firstName, lastName, monthlySalary) {
        super (firstName,lastName);
        this.monthlySalary = monthlySalary;
    }
}

class weeklyPaidEmployee extends ServideHolder {
    weekCount : number;
    constructor (firstName, lastName,weekCount) {
        super (firstName,lastName);
        this.weekCount =weekCount;
    }
}